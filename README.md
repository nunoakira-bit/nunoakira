# Nuno Akira Sugano — conversational portfolio

A portfolio you talk to. The visitor meets a creature made of particles that
introduces Nuno's work by voice and by text, in Portuguese, English or Japanese.

## What is where

    index.html          the experience
    live.js             the Gemini Live client (must sit next to index.html)
    admin/index.html    the knowledge panel
    supabase/           schema and edge function, already applied to the project

The front end is static. Everything that needs a server runs as a Supabase edge
function. There is no build step.

## Publishing to GitHub Pages

Push the repository, then Settings → Pages → deploy from branch, root.
The site lands at `https://<user>.github.io/<repo>/`, the panel at `/admin/`.

For a custom domain, add a `CNAME` file containing `nunoakira.com.br` and point
the DNS at GitHub. Use whichever URL you settle on in `ALLOWED_ORIGINS` below —
the edge function refuses any other origin, which is what stops a stranger's
site from spending your Gemini credits.

## The two things only you can do

**1. Set the secrets.** Supabase → Edge Functions → Secrets:

    GEMINI_API_KEY     your key. It never leaves the server.
    ALLOWED_ORIGINS    https://<user>.github.io,https://nunoakira.com.br

Optional, with sensible defaults already in place:

    LIVE_MODEL              gemini-3.1-flash-live-preview
    SESSION_SECONDS         480    voice seconds per visitor session
    DAILY_SESSIONS_PER_IP   3
    DAILY_SESSIONS_TOTAL    200    global circuit breaker

Until `GEMINI_API_KEY` exists the site runs its local brain and answers in text.
Nobody sees an error.

**2. Create your account.** Supabase → Authentication → Users → Add user, with
`nunoakira@gmail.com`. A trigger grants admin rights to that address and to no
other, so afterwards you can close public signups without locking yourself out.

## Then, in the panel

Upload the résumé PDF under Résumé and mark it primary — that is what turns the
download into a real button instead of an honest "not published yet".

Add your roles under Experience. That section is deliberately empty: nothing in
this system invents a company, a date or a result.

## How the safety works

The system instruction, the authorship rules and the tool list are assembled
inside the edge function and locked into a single-use ephemeral token. The
browser receives the token, never the key and never the rules. A visitor who
rewrites the setup frame in DevTools changes nothing.

Knowledge and behaviour live in separate tables and are not publicly readable.
Behaviour commands sit below safety, truthfulness and authorship: the panel
refuses to publish one that tries to climb above them, and tells you why.
