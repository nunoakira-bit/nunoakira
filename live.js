// ============================================================================
//  live.js — the real voice link.
//
//  The browser never sees the API key or the system instruction. It asks the
//  edge function for a one-use token that is already locked to a model, a set
//  of rules and a tool list, then opens the socket with that token.
//
//  Usage:
//    import { LiveSession } from "./live.js";
//    const live = new LiveSession({ functionUrl, anonKey, language, on:{...} });
//    await live.start();  ...  live.stop();
// ============================================================================

import { GoogleGenAI, Modality } from "https://esm.sh/@google/genai@1";

const IN_RATE = 16000;    // what the API expects from the mic
const OUT_RATE = 24000;   // what it sends back

export class LiveSession {
  constructor({ functionUrl, anonKey, language = "en", sessionId, stream, audioCtx, on = {} }) {
    this.functionUrl = functionUrl;
    this.anonKey = anonKey;
    this.language = language;
    this.sessionId = sessionId || crypto.randomUUID();
    this.shared = stream || null;      // reuse the grant the page already has
    this.outCtx = audioCtx || null;    // reuse the context unlocked by the tap
    this.on = on;
    this.session = null;
    this.running = false;
    this.level = 0;                 // mic amplitude, for the creature
    this.outLevel = 0;              // her amplitude, for the creature
    this.playhead = 0;
    this.sources = new Set();
    this.resumeHandle = null;
  }

  emit(name, payload) { this.on[name]?.(payload); }

  // -- 1. token ------------------------------------------------------------
  async mint() {
    const res = await fetch(this.functionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: this.anonKey },
      body: JSON.stringify({ sessionId: this.sessionId, language: this.language }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || "token_failed"), { code: data.error });
    return data;
  }

  // -- 2. audio ------------------------------------------------------------
  // Playback only. The microphone is attached later, and only if the visitor
  // asks for it — opening the link must never trigger a permission prompt.
  async openOutput() {
    // A context created here would be born suspended on mobile: by this point
    // the tap that started the session is long over. The page hands us one it
    // unlocked inside the gesture instead.
    if (!this.outCtx) {
      this.outCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: OUT_RATE });
    }
    if (this.outCtx.state === "suspended") { try { await this.outCtx.resume(); } catch (_) {} }
    this.silent = this.outCtx.state !== "running";
    this.gain = this.outCtx.createGain();
    this.gain.connect(this.outCtx.destination);
  }

  async openMic(stream) {
    if (this.node) return;
    this.inCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: IN_RATE });
    if (this.inCtx.state === "suspended") await this.inCtx.resume();
    this.stream = (stream && stream.active) ? stream
      : await navigator.mediaDevices.getUserMedia({
          audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        });
    this.shared = stream || this.shared;

    const src = this.inCtx.createMediaStreamSource(this.stream);
    // ScriptProcessor is deprecated but universally available; an AudioWorklet
    // is the upgrade path once this is proven.
    const node = this.inCtx.createScriptProcessor(4096, 1, 1);
    node.onaudioprocess = e => {
      if (!this.running || !this.session) return;
      const f32 = e.inputBuffer.getChannelData(0);

      let sum = 0;
      const pcm = new Int16Array(f32.length);
      for (let i = 0; i < f32.length; i++) {
        const s = Math.max(-1, Math.min(1, f32[i]));
        sum += s * s;
        pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
      }
      this.level = Math.min(Math.sqrt(sum / f32.length) * 5.5, 1.6);

      this.session.sendRealtimeInput({
        audio: { data: b64(pcm.buffer), mimeType: `audio/pcm;rate=${IN_RATE}` },
      });
    };
    src.connect(node);
    node.connect(this.inCtx.destination);   // required for the callback to fire
    this.node = node;
  }

  closeMic() {
    try { this.node?.disconnect(); } catch (_) {}
    this.node = null; this.level = 0;
    try { this.inCtx?.close(); } catch (_) {}
    this.inCtx = null;
  }

  // Something arrived to be played: if the context is still blocked, the page
  // needs to know so it can ask for a tap.
  audible() { return !!this.outCtx && this.outCtx.state === "running"; }

  play(bytes) {
    if (this.outCtx && this.outCtx.state === "suspended") {
      this.outCtx.resume().catch(function(){});
      this.emit("blocked");
    }
    const pcm = new Int16Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 2);
    const buf = this.outCtx.createBuffer(1, pcm.length, OUT_RATE);
    const ch = buf.getChannelData(0);
    let peak = 0;
    for (let i = 0; i < pcm.length; i++) { ch[i] = pcm[i] / 32768; peak = Math.max(peak, Math.abs(ch[i])); }
    this.outLevel = peak;

    const node = this.outCtx.createBufferSource();
    node.buffer = buf; node.connect(this.gain);
    const now = this.outCtx.currentTime;
    this.playhead = Math.max(this.playhead, now);
    node.start(this.playhead);
    this.playhead += buf.duration;
    this.sources.add(node);
    node.onended = () => { this.sources.delete(node); if (!this.sources.size) this.outLevel = 0; };
  }

  // Barge-in: she stops mid-sentence and the queue is dropped.
  interrupt() {
    this.sources.forEach(s => { try { s.stop(); } catch (_) {} });
    this.sources.clear();
    this.playhead = 0;
    this.outLevel = 0;
    this.emit("interrupted");
  }

  // -- 3. connect ----------------------------------------------------------
  async start() {
    const grant = await this.mint();
    this.emit("budget", grant.budgetSeconds);
    await this.openOutput();

    const ai = new GoogleGenAI({ apiKey: grant.token, httpOptions: { apiVersion: "v1alpha" } });
    this.running = true;

    this.session = await ai.live.connect({
      model: grant.model,
      // The token already locks model, system instruction and tools. Anything
      // sent here that contradicts it is refused server-side, by design.
      config: { responseModalities: [Modality.AUDIO] },
      callbacks: {
        onopen: () => this.emit("open"),
        onmessage: m => this.handle(m),
        onerror: e => this.emit("error", e),
        onclose: e => { this.running = false; this.emit("close", e); },
      },
    });
  }

  handle(m) {
    if (m.sessionResumptionUpdate?.resumable) this.resumeHandle = m.sessionResumptionUpdate.newHandle;

    const sc = m.serverContent;
    if (sc?.interrupted) this.interrupt();

    // Her words on screen come from the transcription of the audio she is
    // speaking — one utterance, two renderings. Never a second generation.
    if (sc?.outputTranscription?.text) this.emit("her", sc.outputTranscription.text);
    if (sc?.inputTranscription?.text) this.emit("you", sc.inputTranscription.text);

    for (const part of sc?.modelTurn?.parts ?? []) {
      const d = part.inlineData;
      if (d?.data && d.mimeType?.startsWith("audio/pcm")) this.play(bytes(d.data));
    }
    if (sc?.turnComplete) this.emit("turnComplete");
    if (sc?.generationComplete) this.emit("generationComplete");

    for (const call of m.toolCall?.functionCalls ?? []) {
      this.emit("tool", call);
      // The cards are rendered from published data the client already has, so
      // the tool only needs an acknowledgement.
      this.session?.sendToolResponse({
        functionResponses: [{ id: call.id, name: call.name, response: { ok: true } }],
      });
    }

    if (m.goAway) this.emit("goAway", m.goAway);
  }

  send(text) {
    // A discrete text turn: the opening "__open__" or a typed/clicked question.
    // sendClientContent is queued until the session's setup completes and closes
    // the turn, so the model always answers. sendRealtimeInput was fire-and-forget
    // realtime: the very first packet (the opening) landed before setup and was
    // dropped, leaving the presentation silent while later questions worked.
    this.session?.sendClientContent({ turns: [{ role: "user", parts: [{ text }] }], turnComplete: true });
  }

  stop() {
    this.running = false;
    this.interrupt();
    try { this.session?.close(); } catch (_) {}
    this.closeMic();
    // Only stop tracks we opened ourselves — killing a shared stream would make
    // the browser prompt for the microphone all over again.
    if (this.stream && this.stream !== this.shared) this.stream.getTracks().forEach(t => t.stop());
    // The context belongs to the page and is reused across sessions.
    this.session = null; this.level = 0;
    this.gain = null; this.playhead = 0;
    this.emit("stopped");
  }
}

const b64 = buf => {
  const b = new Uint8Array(buf);
  let s = "";
  for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode(...b.subarray(i, i + 0x8000));
  return btoa(s);
};
const bytes = b64s => {
  const bin = atob(b64s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
};
