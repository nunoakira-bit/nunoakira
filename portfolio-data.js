/* =============================================================================
   NUNO AKIRA SUGANO — SHARED PORTFOLIO DATA
   -----------------------------------------------------------------------------
   Fonte única de verdade para:
     1. visual.html          (site visual / versão "awwwards")
     2. index.html           (versão com IA — a criatura)
   -----------------------------------------------------------------------------
   Como a IA consome:
     NUNO_DATA.cases[i].aiCard  ->  card pronto para renderizar no chat
     (title, thumb, tags, oneLiner, bullets, links, deepLink)
   Como o site visual consome:
     NUNO_DATA.cases[i].story   ->  narrativa completa do case
   -----------------------------------------------------------------------------
   PLACEHOLDERS: todo valor iniciado por "__" precisa ser substituído.
   Se a imagem não existir, o site gera automaticamente um mockup esquemático.
============================================================================= */

const NUNO_DATA = {

  meta: {
    version: '1.0.0',
    updated: '2026-08-23',
    aiVersionUrl: '/',                    // botão "voltar para a versão com IA"
    visualVersionUrl: '/visual.html',
    assetsBase: 'assets/'
  },

  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: 'Nuno Akira Sugano',
    nameJa: 'ヌノ・アキラ・スガノ',
    role: { pt: 'Product Designer Sênior', en: 'Senior Product Designer', ja: 'シニアプロダクトデザイナー' },
    years: 16,
    base: { pt: 'Curitiba, Brasil', en: 'Curitiba, Brazil', ja: 'ブラジル・クリチバ' },
    availability: {
      pt: 'Aberto a oportunidades remotas ou presenciais',
      en: 'Open to remote or on-site opportunities',
      ja: 'リモート・オンサイトのいずれにも対応'
    },
    headline: {
      pt: ['Transformo', 'ideias', 'em produtos', 'e sistemas'],
      en: ['I turn', 'ideas', 'into products', 'and systems']
    },
    intro: {
      pt: 'Product Designer Sênior com 16 anos em produtos digitais, UX/UI, design systems, estratégia de produto e prototipagem funcional. Minha formação também passa por design gráfico, branding, direção de arte, motion e visual design.',
      en: 'Senior Product Designer with 16 years in digital products, UX/UI, design systems, product strategy and functional prototyping. My background also includes graphic design, branding, art direction, motion and visual design.',
      ja: 'デジタルプロダクト、UX/UI、デザインシステム、プロダクト戦略、機能するプロトタイプの領域で16年の経験を持つシニアプロダクトデザイナー。グラフィックデザイン、ブランディング、アートディレクション、モーション、ビジュアルデザインの経歴もあります。'
    },
    thesis: {
      pt: 'Design é resolver problemas de pessoas. O objetivo é entender o problema real e transformar complexidade em algo simples, elegante e intuitivo. Qualidade visual importa — mas uma interface bonita, sozinha, não é bom design.',
      en: 'Design is about solving problems for people. The goal is to understand the real problem and turn complexity into something simple, elegant and intuitive. Visual quality matters — but a beautiful interface alone is not good design.',
      ja: 'デザインとは、人のために課題を解くことだと考えています。本当の問題を理解し、複雑さを、単純で、無駄がなく、直感的なものへと変えていく。見た目の質は大切ですが、美しいだけのインターフェースは良いデザインではありません。'
    },
    contact: {
      email: 'nunoakira@gmail.com',
      linkedin: 'https://linkedin.com/in/nunosugano-ux',
      github: 'https://github.com/nunoakira-bit',
      site: 'https://www.nunoakira.com.br',
      resume: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/resumes/324aef14-9878-45ca-ba96-a75e9e9a2462/Nuno_Akira_Sugano_CV_PT_2026.pdf'
    }
  },

  /* ------------------------------------------------------------ CAPABILITIES */
  capabilities: [
    { id: 'complex',   label: { pt: 'Domínios complexos',       en: 'Complex domains',       ja: '複雑なドメイン' } },
    { id: 'ux',        label: { pt: 'UX / UI',                  en: 'UX / UI',                  ja: 'UX / UI' } },
    { id: 'ds',        label: { pt: 'Design Systems',           en: 'Design Systems',           ja: 'デザインシステム' } },
    { id: 'strategy',  label: { pt: 'Estratégia de produto',    en: 'Product strategy',    ja: 'プロダクト戦略' } },
    { id: 'research',  label: { pt: 'Pesquisa com especialistas', en: 'Specialist research', ja: '専門領域のリサーチ' } },
    { id: 'proto',     label: { pt: 'Prototipagem funcional',   en: 'Functional prototyping',   ja: '機能するプロトタイプ' } },
    { id: 'ai',        label: { pt: 'Produtos de IA',           en: 'AI products',           ja: 'AIプロダクト' } },
    { id: 'eng',       label: { pt: 'Colaboração com engenharia', en: 'Working with engineering', ja: 'エンジニアリングとの協働' } }
  ],

  /* -------------------------------------------------------------- PRINCÍPIOS */
  principles: [
    {
      id: 'user-centered',
      kicker: { pt: 'Decisão', en: 'Decision', ja: '判断' },
      title: { pt: 'Centrado no usuário, não na tendência', en: 'User-centered, not trend-centered', ja: '流行ではなく、ユーザーを起点に' },
      body: {
        pt: 'Considero princípios de usabilidade, heurísticas, contexto, requisitos de negócio e restrições técnicas ao decidir. Evito desenhar interface apoiado só em estética ou tendência.',
        en: 'I weigh usability principles, heuristics, context, business requirements and technical constraints when deciding. I avoid designing interfaces based only on aesthetics or trends.',
        ja: '判断するときは、ユーザビリティの原則とヒューリスティック、文脈、ビジネス要件、技術的な制約を並べて検討します。美しさや流行だけを根拠にインターフェースを決めることは避けています。'
      }
    },
    {
      id: 'complexity',
      kicker: { pt: 'Método', en: 'Method', ja: '手法' },
      title: { pt: 'Reduzir a complexidade sem ignorá-la', en: 'Reduce complexity without ignoring it', ja: '複雑さを無視せずに、減らす' },
      body: {
        pt: 'Gosto de produtos e fluxos complexos: entender regras, exceções, usuários e limites técnicos e então reduzir isso a uma experiência que parece simples. Prefiro soluções simples a camadas desnecessárias.',
        en: 'I enjoy complex products and workflows: understanding rules, exceptions, users and technical constraints, then reducing that into an experience that feels simple. I prefer simple solutions over unnecessary layers.',
        ja: '複雑なプロダクトや業務フローに向き合うのが好きです。規則、例外、ユーザー、技術的な制約を理解したうえで、それを単純に感じられる体験へと縮めていく。不要な層を重ねるより、単純な解を選びます。'
      }
    },
    {
      id: 'prototyping',
      kicker: { pt: 'Prática', en: 'Practice', ja: '実践' },
      title: { pt: 'Protótipo funcional, não só tela estática', en: 'Functional prototypes, not just static screens', ja: '静的な画面ではなく、動くプロトタイプ' },
      body: {
        pt: 'Uso Figma, Claude Code, repositórios GitHub e desenvolvimento assistido por IA para transformar ideias em protótipos funcionais que podem ser experimentados e testados mais cedo. Código é ferramenta de design — não me apresento como engenheiro de software.',
        en: 'I use Figma, Claude Code, GitHub repositories and AI-assisted development to turn ideas into functional prototypes that can be experienced and tested earlier. Code is a design tool — I do not present myself as a software engineer.',
        ja: 'Figma、Claude Code、GitHubのリポジトリ、AIを用いた開発を使って、アイデアを早い段階で体験・検証できるプロトタイプにします。コードはデザインの道具です。自分をソフトウェアエンジニアだとは称しません。'
      }
    },
    {
      id: 'ai',
      kicker: { pt: 'IA', en: 'AI', ja: 'AI' },
      title: { pt: 'IA cuida da linguagem. Regras cuidam dos fatos.', en: 'AI handles language. Rules handle facts.', ja: '言語はAIが、事実はルールが受け持つ。' },
      body: {
        pt: 'Me interessa desenhar sistemas em que a IA cuida de linguagem e raciocínio enquanto regras determinísticas controlam fatos, permissões e decisões críticas de negócio. Revisão humana continua importante quando faz sentido.',
        en: 'I am interested in designing systems where AI handles language and reasoning while deterministic rules control facts, permissions and critical business decisions. Human review remains important where appropriate.',
        ja: '言語と推論はAIが担い、事実・権限・重要なビジネス判断は決定的なルールが制御する。そうしたシステムの設計に関心があります。必要な場面では、人によるレビューも欠かせません。'
      }
    },
    {
      id: 'engineering',
      kicker: { pt: 'Time', en: 'Team', ja: 'チーム' },
      title: { pt: 'Design não é handoff', en: 'Design is not a handoff', ja: 'デザインは引き渡しではない' },
      body: {
        pt: 'Trabalho junto de devs e produto da descoberta à implementação: discuto restrições técnicas, documento decisões, crio protótipos e specs, reviso a qualidade da implementação e ajusto a solução em conjunto.',
        en: 'I work with developers and product teams from discovery through implementation: discussing technical constraints, documenting decisions, creating prototypes and specs, reviewing implementation quality and adjusting solutions together.',
        ja: 'ディスカバリーから実装まで、開発者やプロダクトチームと一緒に進めます。技術的な制約を話し合い、決定を記録し、プロトタイプと仕様をつくり、実装の品質をレビューし、解決策を共に調整していきます。'
      }
    },
    {
      id: 'international',
      kicker: { pt: 'Contexto', en: 'Context', ja: '背景' },
      title: { pt: 'Colaboração internacional', en: 'International collaboration', ja: '国際的な協働' },
      body: {
        pt: 'Tenho experiência colaborando com pessoas e times de países diferentes. Participo de reuniões em inglês, discuto decisões de produto e design, apresento trabalho e documento decisões e soluções em inglês.',
        en: 'I have experience collaborating with people and teams from different countries. I take part in meetings in English, discuss product and design decisions, present work and document decisions and solutions in English.',
        ja: 'さまざまな国の人やチームと協働してきました。英語で会議に参加し、プロダクトとデザインの判断について議論し、成果を発表し、決定と解決策を英語で記録しています。'
      }
    }
  ],

  /* ------------------------------------------------------------------ CASES */
  cases: [

    /* ============================================================ CASE 01 */
    {
      id: 'siga',
      index: '01',
      name: 'SIGA',
      family: 'EOS Suite · Printer do Brasil',
      status: 'live',
      accent: '#6FA8FF',
      positioning: {
        pt: ['Domínio complexo', 'Pesquisa com especialistas', 'Fluxos regulados', 'Continuidade de produto'],
        en: ['Complex domain', 'Specialist research', 'Regulated workflows', 'Product continuity']
      },
      question: {
        pt: 'Como transformar regras arquivísticas, conhecimento de especialistas e requisitos operacionais complexos em um produto que as pessoas realmente entendem e conseguem usar?',
        en: 'How do you transform archival rules, specialist knowledge and complex operational requirements into a product that people can actually understand and use?',
        ja: '記録管理の規則、専門知識、複雑な業務要件を、実際に理解して使えるプロダクトへと、どう置き換えるか。'
      },
      oneLiner: {
        pt: 'Gestão arquivística e documental desenhada a partir do domínio — não a partir da interface.',
        en: 'Archival and document management designed from the domain — not from the interface.',
        ja: 'インターフェースからではなく、ドメインから設計した文書・記録管理。'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context', ja: '背景' }, body: {
          pt: 'O SIGA faz parte do EOS Suite e atua em gestão arquivística e documental. Desenhar o produto exigiu entender um domínio especializado em que os fluxos são restringidos não apenas por necessidades do usuário e requisitos de negócio, mas também por normas e regras arquivísticas.',
          en: 'SIGA is part of the EOS Suite and operates in archival and document management. Designing the product required understanding a specialised domain in which workflows are constrained not only by user needs and business requirements, but also by archival standards and rules.',
          ja: 'SIGAはEOS Suiteの一部で、記録・文書管理の領域を扱います。この製品の設計には、専門的なドメインの理解が必要でした。業務フローを縛るのはユーザーのニーズやビジネス要件だけでなく、記録管理の標準と規則でもあるからです。' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role', ja: '担当' }, body: {
          pt: 'Fui o designer responsável pela solução completa. Meu envolvimento foi além de desenhar interfaces: entendimento do domínio, definição e validação de fluxos, estruturação da experiência e manutenção da continuidade do conhecimento de produto ao longo do desenvolvimento.',
          en: 'I was the designer responsible for the complete solution. My involvement went beyond designing interfaces: understanding the domain, defining and validating workflows, structuring the experience and maintaining continuity of product knowledge throughout development.',
          ja: '解決策全体を担当するデザイナーでした。関与はインターフェースの設計にとどまりません。ドメインを理解し、業務フローを定義して検証し、体験を構造化し、開発を通じてプロダクトの知識の連続性を保つことまでを含みます。' } },
        { key: 'discovery', label: { pt: 'Aprender o domínio', en: 'Learning the domain', ja: 'ドメインを学ぶ' }, body: {
          pt: 'Em vez de desenhar a partir de suposições, entrevistei arquivistas e especialistas para entender como os processos arquivísticos realmente funcionam. Essas conversas ajudaram a mapear terminologia, responsabilidades, restrições e fluxos — e foram usadas também para validar as experiências propostas.',
          en: 'Rather than designing from assumptions, I interviewed archivists and specialists to understand how archival processes actually work. These conversations helped map terminology, responsibilities, constraints and workflows, and were also used to validate the proposed experiences.',
          ja: '思い込みから設計するのではなく、アーキビストや専門家に話を聞き、記録管理の実務がどう動いているのかを理解しました。この対話から用語、責任範囲、制約、業務フローを整理し、提案した体験の検証にも用いました。' } },
        { key: 'constraints', label: { pt: 'Entender as regras', en: 'Understanding the rules', ja: '規則を理解する' }, body: {
          pt: 'Estudei a documentação do e-ARQ Brasil e do CONARQ para entender os requisitos que afetavam o produto. O objetivo era garantir que a experiência não fosse apenas usável, mas viável dentro do contexto arquivístico e legal em que o SIGA opera.',
          en: 'I studied e-ARQ Brasil and CONARQ documentation to understand the requirements affecting the product. The objective was to make sure the experience was not only usable, but viable within the archival and legal context in which SIGA operates.',
          ja: 'e-ARQ BrasilとCONARQの文書を読み込み、プロダクトに関わる要件を把握しました。目的は、使いやすいだけでなく、SIGAが置かれた記録管理上・法制度上の文脈で成立する体験にすることでした。' } },
        { key: 'approach', label: { pt: 'Abordagem de design', en: 'Design approach', ja: '設計のアプローチ' }, body: {
          pt: 'O processo foi baseado em reduzir complexidade sem ignorá-la. Traduzi regras de especialistas e requisitos operacionais em fluxos e interações compreensíveis pelos usuários, preservando os requisitos que o sistema precisava atender. A interface foi consequência do entendimento do domínio — não o ponto de partida.',
          en: 'The process was based on reducing complexity without ignoring it. I translated specialist rules and operational requirements into flows and interactions users could understand, while preserving the requirements the system had to satisfy. The interface was the consequence of understanding the domain, not the starting point.',
          ja: '進め方の軸は、複雑さを無視せずに減らすことでした。専門的な規則と業務要件を、ユーザーが理解できるフローと操作に置き換えながら、システムが満たすべき要件は保ちました。インターフェースは出発点ではなく、ドメインを理解した結果です。' } },
        { key: 'continuity', label: { pt: 'Continuidade e liderança', en: 'Continuity and leadership', ja: '継続性とリード' }, body: {
          pt: 'O SIGA teve três Product Owners diferentes durante o desenvolvimento. Por permanecer envolvido do início ao fim e acumular conhecimento sobre regras, fluxos e decisões de design, tornei-me a pessoa com a visão mais ampla do produto e assumi um papel de condução do seu desenvolvimento.',
          en: 'SIGA had three different Product Owners during development. Because I remained involved throughout and accumulated knowledge of its rules, workflows and design decisions, I became the person with the broadest view of the product and took a leading role in driving its development forward.',
          ja: 'SIGAでは開発期間中にプロダクトオーナーが三度替わりました。私は最初から関わり続け、規則・業務フロー・設計上の判断についての知識を積み重ねたため、プロダクト全体をもっとも広く見渡せる立場になり、開発を前に進める役割を担いました。' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates', ja: 'この事例が示すもの' }, body: {
          pt: 'Capacidade de entrar em um domínio desconhecido e altamente especializado, aprender diretamente com especialistas, estudar restrições regulatórias, estruturar informação complexa, desenhar e validar fluxos e manter a coerência do produto durante um desenvolvimento longo.',
          en: 'The ability to enter an unfamiliar, highly specialised domain, learn directly from experts, study regulatory constraints, structure complex information, design and validate workflows, and keep the product coherent across a long development process.',
          ja: '馴染みのない高度に専門的なドメインに入り、専門家から直接学び、規制上の制約を調べ、複雑な情報を構造化し、業務フローを設計・検証し、長い開発期間を通じてプロダクトの一貫性を保つ力。' } }
      ],
      takeaway: {
        pt: 'Bom UX em sistema complexo não é esconder a complexidade atrás de uma interface mais bonita. É entendê-la bem o suficiente para que a interação do usuário com ela seja clara, previsível e administrável.',
        en: 'Good UX in a complex system is not about hiding complexity behind a prettier interface. It is about understanding it well enough to make the user\'s interaction with it feel clear, predictable and manageable.',
        ja: '複雑なシステムにおける良いUXとは、複雑さをきれいなインターフェースの裏に隠すことではありません。それを十分に理解したうえで、ユーザーの操作が明快で、予測でき、扱えると感じられるようにすることです。'
      },
      evidenceTodo: {
        pt: 'A adicionar: telas e fluxos específicos, exemplos de feedback de especialistas e mudanças resultantes, material antes/depois, requisitos do e-ARQ/CONARQ que influenciaram decisões e resultados observáveis.',
        en: 'To add: specific screens and workflows, examples of specialist feedback and resulting changes, before/after material, e-ARQ/CONARQ requirements that shaped decisions, and observable outcomes.',
        ja: '今後追加する予定：具体的な画面と業務フロー、専門家からの指摘とそれによる変更の例、改修前後の比較、判断を左右したe-ARQ／CONARQの要件、観測可能な成果。'
      },
      media: {
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/enderecamento-escolha-de-localidade.png',
        shots: [
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/enderecamento-escolha-de-localidade.png', caption: { pt: 'Endereçamento — escolha da localidade, com capacidade de cada galpão à vista', en: 'Addressing — choosing the location, with each warehouse\'s capacity in view', ja: '住所付け — 保管場所の選択。各倉庫の空き容量を見ながら判断できる' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/criar-tipo-unidade-acondicionamento.png', caption: { pt: 'Criação de tipo de unidade de acondicionamento, com as medidas pré-visualizadas', en: 'Creating a storage unit type, with dimensions previewed as they are typed', ja: '保管ユニット種別の作成。入力に合わせて寸法がプレビューされる' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/ciclo-de-vida-do-documento.png', caption: { pt: 'Estudo do ciclo de vida do documento arquivístico, anterior a qualquer interface', en: 'Study of the archival document lifecycle, drawn before any interface', ja: '記録文書のライフサイクルの検討。インターフェースを描く前の作業' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/processo-de-enderecamento.png', caption: { pt: 'Processo de endereçamento em cinco passos até o endereço único da unidade', en: 'The five-step addressing process, ending in the unit\'s unique address', ja: '5段階の住所付けプロセス。最後にユニット固有の住所が生成される' } }
        ]
      },
      links: [],
      aiCard: {
        thumb: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/enderecamento-escolha-de-localidade.png',
        tags: ['Complex domain', 'Research', 'Regulated workflows'],
        bullets: {
          pt: [
            'Designer responsável pela solução completa, não só pelas interfaces.',
            'Entrevistas com arquivistas e especialistas para mapear e validar fluxos.',
            'e-ARQ Brasil e CONARQ estudados como restrição real de design.',
            'Três Product Owners: manteve a continuidade do conhecimento do produto.'
          ],
          en: [
            'Designer responsible for the complete solution, not only the interfaces.',
            'Interviews with archivists and specialists to map and validate workflows.',
            'e-ARQ Brasil and CONARQ studied as real design constraints.',
            'Three Product Owners: kept continuity of product knowledge.'
          ]
        },
        deepLink: '/visual.html#case-siga'
      }
    },

    /* ============================================================ CASE 02 */
    {
      id: 'eos',
      index: '02',
      name: 'EOS Suite',
      family: 'Printer do Brasil',
      status: 'live',
      accent: '#7FE0D6',
      positioning: {
        pt: ['Design Systems', 'Ecossistema enterprise', 'Consistência de UX', 'Governança de design'],
        en: ['Design Systems', 'Enterprise ecosystem', 'UX consistency', 'Design governance']
      },
      question: {
        pt: 'Como fazer uma suíte de aplicações enterprise diferentes parecer um ecossistema coerente sem apagar a identidade e o propósito de cada produto?',
        en: 'How do you make a suite of different enterprise applications feel like one coherent ecosystem without removing the identity and purpose of each product?',
        ja: 'それぞれのプロダクトの個性と目的を損なわずに、異なる業務アプリケーション群を一つのまとまった生態系として感じさせるには、どうすればよいか。'
      },
      oneLiner: {
        pt: 'Um Design System tratado como infraestrutura de produto — não como biblioteca visual.',
        en: 'A Design System treated as product infrastructure — not as a visual library.',
        ja: '見た目のライブラリではなく、プロダクトの基盤として扱うデザインシステム。'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context', ja: '背景' }, body: {
          pt: 'O EOS Suite é um ecossistema de aplicações enterprise que inclui produtos como AIR, SIGA, FLOW, FLOW CIDADÃO, ACCESS e AIR SAFE. Usuários podem transitar por mais de uma aplicação, então inconsistências de navegação, componentes, padrões de interação e linguagem visual aumentam o esforço de aprendizado e a fricção.',
          en: 'EOS Suite is an ecosystem of enterprise applications including products such as AIR, SIGA, FLOW, FLOW CIDADÃO, ACCESS and AIR SAFE. Users may interact with more than one application, so inconsistencies in navigation, components, interaction patterns and visual language increase learning effort and friction.',
          ja: 'EOS Suiteは、AIR、SIGA、FLOW、FLOW CIDADÃO、ACCESS、AIR SAFEなどを含む業務アプリケーションの生態系です。ユーザーは複数のアプリケーションを行き来するため、ナビゲーション、コンポーネント、操作パターン、視覚言語の不統一が、学習の負担と摩擦をそのまま増やします。' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role', ja: '担当' }, body: {
          pt: 'Refatorei a suíte de aplicações e trabalhei para estabelecer uma experiência coerente em todo o ecossistema. Criei e mantenho o Design System que sustenta a suíte, além de desenhar novos fluxos e novas aplicações quando os padrões existentes não bastam.',
          en: 'I refactored the application suite and worked to establish a coherent experience across the ecosystem. I created and continue to maintain the Design System that supports the suite, while also designing new flows and new applications when existing patterns are not enough.',
          ja: 'アプリケーション群をリファクタリングし、生態系全体で一貫した体験を築く仕事をしました。Suiteを支えるデザインシステムを立ち上げ、いまも維持しています。既存のパターンでは足りない場面では、新しいフローや新しいアプリケーションの設計も行います。' } },
        { key: 'objective', label: { pt: 'O objetivo do refactor', en: 'The design objective', ja: '設計の目的' }, body: {
          pt: 'A refatoração foi movida por mais do que consistência visual. O objetivo era tornar o comportamento previsível entre aplicações, reduzir o quanto o usuário precisa reaprender, reduzir fricção e criar uma experiência EOS reconhecível.',
          en: 'The refactoring was driven by more than visual consistency. The objective was to make behaviour predictable across applications, reduce how much users need to relearn, reduce friction and create a recognisable EOS experience.',
          ja: 'リファクタリングの動機は見た目の統一だけではありませんでした。目的は、アプリケーション間で振る舞いを予測できるようにし、ユーザーが学び直す量を減らし、摩擦を下げ、EOSらしいと分かる体験をつくることでした。' } },
        { key: 'system', label: { pt: 'O Design System', en: 'The Design System', ja: 'デザインシステム' }, body: {
          pt: 'O Design System estabelece componentes reutilizáveis, padrões de interação e regras visuais para o ecossistema. É mantido como capacidade de produto, não apenas como biblioteca visual. Soluções compartilhadas devem ser reutilizadas sempre que resolvem bem o problema.',
          en: 'The Design System establishes reusable components, interaction patterns and visual rules for the ecosystem. It is maintained as a product capability rather than only as a visual library. Shared solutions should be reused whenever they solve the problem well.',
          ja: 'デザインシステムは、生態系のための再利用可能なコンポーネント、操作パターン、視覚上の規則を定めます。単なる見た目のライブラリではなく、プロダクトの能力として維持しています。よく解けている共有の解は、繰り返し使われるべきです。' } },
        { key: 'scale', label: { pt: 'Escalar design pelo desenvolvimento', en: 'Scaling design through development', ja: '開発を通じてデザインを広げる' }, body: {
          pt: 'Com padrões estabelecidos, desenvolvedores criam novas telas padrão mantendo a linguagem visual e de interação esperada do EOS. Essas implementações passam pela minha revisão, permitindo mais autonomia de desenvolvimento sem perder governança e qualidade de design.',
          en: 'With established patterns, developers can create new standard screens while maintaining the expected EOS visual and interaction language. These implementations pass through my review, allowing development to move with more autonomy while preserving design governance and quality.',
          ja: 'パターンが定まっていれば、開発者は標準的な新しい画面を自分でつくれます。EOSらしい視覚と操作の言語は保たれたままです。それらの実装は私のレビューを通すため、開発は自律性を得ながら、デザインの統制と品質は維持されます。' } },
        { key: 'newflows', label: { pt: 'Onde ainda desenho diretamente', en: 'Where I still design directly', ja: 'いまも自分で設計する領域' }, body: {
          pt: 'O Design System não existe para forçar todo problema novo a caber num componente existente. Entro diretamente quando um fluxo introduz uma experiência genuinamente diferente ou quando os padrões atuais não resolvem bem. A nova solução então informa a evolução do sistema.',
          en: 'The Design System is not intended to force every new problem into an existing component. I get directly involved when a workflow introduces a genuinely different experience or when existing patterns cannot solve it well. The new solution can then inform the evolution of the system.',
          ja: 'デザインシステムは、すべての新しい問題を既存のコンポーネントに押し込めるためのものではありません。業務フローが本当に異なる体験を要求するとき、あるいは既存パターンではうまく解けないときは、私が直接設計に入ります。そこで生まれた解が、システム自体の進化につながります。' } },
        { key: 'newapps', label: { pt: 'Desenhar novas aplicações EOS', en: 'Designing new EOS applications', ja: 'EOSの新しいアプリケーションを設計する' }, body: {
          pt: 'Também trabalho na criação de novas aplicações da suíte. O desafio é dar a cada produto uma identidade que reflita seu propósito, mantendo a linguagem visual e os padrões de interação compartilhados que o tornam reconhecível como parte do EOS.',
          en: 'I also work on creating new applications in the suite. The challenge is to give each product an identity that reflects its purpose while maintaining the shared visual language and interaction patterns that make it recognisable as part of EOS.',
          ja: 'Suiteに新しいアプリケーションをつくる仕事もしています。難しいのは、それぞれの製品にその目的を映した個性を与えながら、EOSの一部だと分かる共通の視覚言語と操作パターンを保つことです。' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates', ja: 'この事例が示すもの' }, body: {
          pt: 'Pensamento de produto em escala de ecossistema: criar consistência, reduzir carga cognitiva e decisões repetidas, habilitar autonomia de desenvolvimento, governar a qualidade da implementação e saber quando padronizar — e quando uma nova experiência precisa ser desenhada.',
          en: 'Product thinking at ecosystem scale: creating consistency, reducing cognitive load and repeated decisions, enabling development autonomy, governing implementation quality, and knowing when standardisation helps — and when a new experience needs to be designed.',
          ja: '生態系の規模でプロダクトを考えること。一貫性をつくり、認知の負荷と繰り返しの判断を減らし、開発の自律性を可能にし、実装の品質を統制し、標準化が効く場面と、新しい体験を設計すべき場面を見分けること。' } }
      ],
      takeaway: {
        pt: 'Um Design System maduro torna os problemas conhecidos mais baratos de resolver, para que o tempo de design se concentre nos problemas novos e difíceis.',
        en: 'A mature Design System makes known problems cheaper to solve, so design time can be concentrated on the new and difficult ones.',
        ja: '成熟したデザインシステムは、既知の問題を安く解けるようにします。だからこそ、新しく難しい問題にデザインの時間を集められます。'
      },
      evidenceTodo: {
        pt: 'A adicionar: telas antes e depois do refactor, exemplos do Design System, documentação de componentes e tokens, exemplo de tela construída pelo desenvolvimento usando o sistema e exemplos de identidades intencionalmente distintas entre aplicações.',
        en: 'To add: screens before and after the refactor, Design System examples, component and token documentation, an example of a screen built by development using the system, and examples of intentionally different application identities.',
        ja: '今後追加する予定：リファクタリング前後の画面、デザインシステムの実例、コンポーネントとトークンのドキュメント、開発者がシステムを使って構築した画面の例、意図的に異なる個性を与えたアプリケーションの例。'
      },
      media: {
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/design-system-index-mcp.png',
        shots: [
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/design-system-index-mcp.png', caption: { pt: 'Índice do design system compartilhado, escrito também para ser lido por um agente de IA', en: 'Index of the shared design system, written to be read by an AI agent as well', ja: '共有デザインシステムの目次。AIエージェントが読むことも想定して書かれている' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/token-system-cores-css.png', caption: { pt: 'Sistema de tokens de cor, com paletas por produto e exportação para variáveis CSS', en: 'Colour token system, with per-product palettes exported as CSS variables', ja: 'カラートークンの体系。プロダクトごとのパレットをCSS変数として書き出す' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/patterns-reutilizaveis.png', caption: { pt: 'Patterns reutilizáveis: tabelas, cadastros, estados vazios, modais e cabeçalhos', en: 'Reusable patterns: tables, forms, empty states, modals and headers', ja: '再利用可能なパターン：テーブル、フォーム、空の状態、モーダル、ヘッダー' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/tokens-tipografia-e-radius.png', caption: { pt: 'Tokens de tipografia e raio, cada um declarando o uso a que se destina', en: 'Typography and radius tokens, each declaring what it is for', ja: 'タイポグラフィと角丸のトークン。それぞれ用途を明記している' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/figma-estrutura-e-pesquisa-personas.png', caption: { pt: 'Pesquisa de sete papéis em prefeituras brasileiras, com metodologia e fontes declaradas', en: 'Research into seven roles in Brazilian city halls, with stated method and sources', ja: 'ブラジルの自治体における7つの役割のリサーチ。手法と出典を明記' } }
        ]
      },
      links: [],
      aiCard: {
        thumb: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/design-system-index-mcp.png',
        tags: ['Design Systems', 'Enterprise', 'Governance'],
        bullets: {
          pt: [
            'Refatorou o ecossistema completo de aplicações do EOS Suite.',
            'Criou e mantém o Design System da suíte.',
            'Desenvolvedores ganham autonomia; implementação passa por revisão de design.',
            'Novas aplicações com identidade própria dentro da mesma linguagem.'
          ],
          en: [
            'Refactored the complete EOS Suite application ecosystem.',
            'Created and maintains the suite Design System.',
            'Developers gain autonomy; implementation goes through design review.',
            'New applications with their own identity inside the same language.'
          ]
        },
        deepLink: '/visual.html#case-eos'
      }
    },

    /* ============================================================ CASE 03 */
    {
      id: 'imobia',
      index: '03',
      name: 'Imob.IA',
      family: { pt: 'Produto próprio · B2B SaaS', en: 'Own product · B2B SaaS', ja: '自社プロダクト · B2B SaaS' },
      status: 'wip',
      accent: '#B18CFF',
      positioning: {
        pt: ['AI Product Design', 'B2B SaaS', 'Estratégia de produto', 'UX conversacional', 'Produto ponta a ponta'],
        en: ['AI Product Design', 'B2B SaaS', 'Product strategy', 'Conversational UX', 'End-to-end product']
      },
      question: {
        pt: 'Como desenhar um assistente de IA em que um pequeno negócio confie aquilo que ele mais valoriza — a relação com o cliente?',
        en: 'How do you design an AI assistant that a small business will trust with the thing it values most — its relationship with the client?',
        ja: '小さな会社がもっとも大切にしているもの、つまり顧客との関係を任せてもらえるAIアシスタントを、どう設計するか。'
      },
      oneLiner: {
        pt: 'Um assistente de IA para imobiliárias pequenas, desenhado para fortalecer o corretor em vez de substituí-lo.',
        en: 'An AI assistant for small real-estate agencies, designed to strengthen the broker instead of replacing them.',
        ja: '仲介担当者を置き換えるのではなく、その力を高めるために設計した、小規模不動産会社向けのAIアシスタント。'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context', ja: '背景' }, body: {
          pt: 'Imob.IA é uma plataforma B2B SaaS para imobiliárias brasileiras de pequeno e médio porte que ainda operam sem CRM estruturado. Essas empresas normalmente gerenciam leads por WhatsApp pessoal e planilhas. O produto oferece um assistente de IA que responde sobre os imóveis da imobiliária, qualifica leads 24h e agenda visitas, além de um painel de gestão para o dono e para os corretores.',
          en: 'Imob.IA is a B2B SaaS platform for small and mid-sized Brazilian real-estate agencies still operating without a structured CRM. These companies typically manage leads through personal WhatsApp accounts and spreadsheets. The product offers an AI assistant that answers questions about the agency\'s properties, qualifies leads around the clock and schedules visits, together with a management panel for the owner and for the brokers.',
          ja: 'Imob.IAは、いまだ体系的なCRMを持たないブラジルの中小規模の不動産会社に向けたB2B SaaSです。こうした会社は多くの場合、個人のWhatsAppアカウントと表計算ソフトで見込み客を管理しています。本製品は、物件についての質問に答え、24時間体制で見込み客を選別し、内見の予定を組むAIアシスタントに加えて、経営者向けと仲介担当者向けの管理画面を提供します。' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role', ja: '担当' }, body: {
          pt: 'Criei o produto do zero: enquadramento do problema, definição do perfil de cliente ideal, estratégia de produto, estrutura de planos e preço, arquitetura de informação, UX/UI para os dois perfis de usuário, o site comercial e os protótipos funcionais construídos em código com apoio de IA. Decisões sobre arquitetura de IA, origem dos dados e custo de operação fizeram parte do trabalho de design.',
          en: 'I created the product from scratch: problem framing, definition of the ideal customer profile, product strategy, plan and pricing structure, information architecture, UX/UI for both user profiles, the commercial site, and functional prototypes built in code with AI assistance. Decisions about AI architecture, data sourcing and operating cost were part of the design work.',
          ja: '問題の定義、理想的な顧客像の設定、プロダクト戦略、プランと価格の設計、情報アーキテクチャ、二種類のユーザー向けのUX/UI、商用サイト、そしてAIを用いてコードで構築した動くプロトタイプまで、ゼロから作りました。AIのアーキテクチャ、データの入手方法、運用コストに関する判断も、デザインの仕事の一部として扱いました。' } },
        { key: 'problem', label: { pt: 'Problema', en: 'Problem', ja: '課題' }, body: {
          pt: 'Leads qualificados chegam fora do horário comercial e se perdem antes que alguém responda. Agendar visitas é manual e depende de disponibilidades que ninguém consolidou. Donos não têm visibilidade do próprio funil. CRMs existentes são feitos para operações maiores: pesados, caros e lentos demais para uma imobiliária com poucos corretores e sem time de TI.',
          en: 'Qualified leads arrive outside business hours and are lost before anyone answers. Scheduling visits is manual and depends on individual availability nobody has consolidated. Owners have no visibility into their own funnel. Existing CRMs are built for larger operations: too heavy, too expensive and too slow to implement for an agency with a handful of brokers and no IT team.',
          ja: '見込みのある問い合わせが営業時間外に届き、誰かが応じる前に失われます。内見の調整は手作業で、誰も一元管理していない個々人の空き状況に左右されます。経営者は自社の商談の流れを把握できません。既存のCRMはより大きな組織を前提にしており、担当者が数名でIT部門もない会社には、重すぎ、高すぎ、導入に時間がかかりすぎます。' } },
        { key: 'discovery', label: { pt: 'Descoberta', en: 'Discovery', ja: 'ディスカバリー' }, body: {
          pt: 'Em vez de começar pela interface, comecei pelo que poderia matar o produto. Conduzi um pre-mortem estruturado nos eixos técnico, legal, de mercado, de produto e de negócio, e usei as conclusões para reformular o conceito antes de qualquer decisão de design. Dois achados mudaram o produto: o plano original de coletar dados de imóveis por scraping de portais era tecnicamente frágil e contrário aos termos de uso desses portais, e o perfil de cliente era amplo demais para ser bem atendido.',
          en: 'Instead of starting from the interface, I started from what could kill the product. I ran a structured pre-mortem across technical, legal, market, product and business risk, and used its conclusions to reshape the concept before any design decision. Two findings changed the product: the original plan to collect property data by scraping portals was both technically fragile and contrary to those portals\' terms of use, and the customer profile was too broad to be served well.',
          ja: 'インターフェースからではなく、この製品を殺しかねないものから始めました。技術、法務、市場、プロダクト、事業のリスクにわたって構造化したプレモーテムを実施し、その結論をもとに、デザインの判断を下す前にコンセプト自体を組み直しました。特に二つの発見が製品を変えました。物件情報をポータルのスクレイピングで集めるという当初の計画は、技術的に脆いうえに、それらのポータルの利用規約に反していたこと。そして、想定していた顧客層が広すぎて、十分に応えられないことです。' } },
        { key: 'constraints', label: { pt: 'Restrições', en: 'Constraints', ja: '制約' }, body: {
          pt: 'Dados de leads são dados pessoais, então a conformidade com a LGPD precisava moldar a arquitetura em vez de ser adicionada depois. Dados de imóveis tinham que vir de fontes que a imobiliária tem direito de usar. O custo de tokens precisava permanecer uma fração controlada da receita do plano para o negócio sobreviver em escala. O cliente não tem time técnico, então o onboarding precisava ser self-service e curto. E corretores trabalham por comissão, o que torna impossível adotar qualquer sistema que pareça interceptar seus leads.',
          en: 'Lead data is personal data, so LGPD compliance had to shape the architecture rather than be added later. Property data had to come from sources the agency is entitled to use. Token cost had to remain a controlled fraction of plan revenue for the business to survive at volume. The customer has no technical team, so onboarding had to be self-service and short. And brokers work on commission, which makes any system that appears to intercept their leads impossible to adopt.',
          ja: '見込み客の情報は個人データであるため、LGPD（ブラジルの個人情報保護法）への適合は、後から足すものではなくアーキテクチャそのものを規定しました。物件情報は、その会社が正当に利用できる出所から来る必要があります。トークンの費用は、量が増えても事業が成立するよう、プラン収益の管理された一部に収めなければなりません。顧客に技術者はいないため、導入は自分で完結でき、短時間で終わる必要があります。そして仲介担当者は歩合で働くので、自分の見込み客を横取りすると見えるシステムは、そもそも受け入れられません。' } },
        { key: 'decisions', label: { pt: 'Decisões-chave', en: 'Key decisions', ja: '重要な判断' }, list: {
          pt: [
            'O assistente responde apenas a partir da base de imóveis que a própria imobiliária cadastrou, via recuperação restrita a esses dados. No mercado imobiliário, uma afirmação inventada sobre um imóvel é um problema comercial e legal — não apenas uma experiência ruim. O sistema foi desenhado para ser incapaz de fazer isso.',
            'A IA é posicionada como assistente do corretor, nunca como substituto. Ela qualifica e agenda, mas sempre notifica o corretor e entrega o contato. O corretor continua dono da relação. Adoção em times pequenos depende de confiança, não de ruptura forçada.',
            'Feeds XML e APIs oficiais substituíram o scraping como fonte de dados de imóveis, removendo a principal exposição legal e um custo permanente de manutenção.',
            'O perfil de cliente ideal foi definido explicitamente, incluindo para quem o produto não é, para que ele não derive para clientes que não conseguiria atender bem.',
            'Custo de operação tratado como restrição de design: camadas de entrada usam modelos econômicos e cada plano carrega um teto de custo definido.',
            'Gestor e corretor são experiências separadas, não uma interface com itens escondidos. O gestor vê a operação inteira; o corretor vê apenas seus leads, sua agenda e uma visão somente leitura da base de imóveis.'
          ],
          en: [
            'The assistant answers only from the property base the agency itself registered, through retrieval restricted to that data. In real estate an invented statement about a property is a commercial and legal problem, not merely a poor experience — so the system was designed to be unable to make one.',
            'The AI is positioned as the broker\'s assistant, never as a replacement. It qualifies and schedules, but always notifies the broker and hands over the contact. The broker remains the owner of the relationship. Adoption inside small teams depends on trust, not on forced disruption.',
            'Official XML feeds and APIs replaced scraping as the source of property data, removing the main legal exposure and a permanent maintenance cost.',
            'The ideal customer profile was defined explicitly, including who the product is not for, so the product would not drift toward customers it could not serve well.',
            'Operating cost was treated as a design constraint: entry layers use economical models and each plan carries a defined cost ceiling.',
            'Manager and broker are separate experiences rather than one interface with hidden items. The manager sees the whole operation; the broker sees only their own leads, their own agenda and a read-only view of the property base.'
          ]
        } },
        { key: 'solution', label: { pt: 'Solução', en: 'Solution', ja: '解決策' }, body: {
          pt: 'O gestor trabalha com dashboard, histórico de conversas, agenda compartilhada, base de imóveis, time e um assistente de criação de anúncios. O corretor recebe uma versão reduzida focada no seu dia. O onboarding importa a base de imóveis por CSV ou XML em menos de trinta minutos. O agendamento sincroniza com Google Calendar e Outlook, para que a imobiliária não precise de uma segunda ferramenta. O assistente de anúncios gera o texto da campanha e um link de rastreamento que carrega o identificador do corretor, preservando a atribuição do anúncio até o lead. Um site comercial apresenta os planos e conclui a compra.',
          en: 'The manager works with a dashboard, conversation history, a shared agenda, the property base, the team and an AI-assisted advertising wizard. The broker receives a reduced version focused on their own day. Onboarding imports the property base by CSV or XML in under thirty minutes. Scheduling synchronises with Google Calendar and Outlook so the agency does not need a second tool. The advertising wizard produces campaign copy and a tracking link carrying the broker\'s identifier, so attribution survives from the advertisement to the lead. A commercial site presents the plans and completes the purchase.',
          ja: '経営者はダッシュボード、会話履歴、共有の予定表、物件データベース、チーム管理、そしてAIが支援する広告作成ウィザードを使います。仲介担当者には、自分の一日に絞った簡素な版が届きます。導入時は、CSVまたはXMLで物件データを30分以内に取り込みます。予定はGoogleカレンダーとOutlookと同期するため、会社が二つ目の道具を持つ必要はありません。広告ウィザードは訴求文と、担当者の識別子を含む計測用リンクを生成するので、広告から見込み客までの帰属が途切れません。商用サイトがプランを提示し、購入まで完結させます。' } },
        { key: 'validation', label: { pt: 'Validação', en: 'Validation', ja: '検証' }, body: {
          pt: 'O pre-mortem foi usado como instrumento de design: riscos foram convertidos em requisitos antes da implementação. Os dois perfis foram construídos como protótipos funcionais em código, e não como telas estáticas, para que os fluxos pudessem ser operados e julgados em uso. O produto ainda não foi validado com imobiliárias reais; essa validação está planejada e não é reivindicada aqui.',
          en: 'The pre-mortem was used as a design instrument: risks were converted into requirements before implementation. Both profiles were built as functional prototypes in code rather than static screens, so the flows could be operated and judged in use. The product has not yet been validated with real agencies; that validation is planned and is not claimed here.',
          ja: 'プレモーテムはデザインの道具として使いました。リスクは実装の前に要件へと変換されています。二種類の画面は静的なモックではなくコードで動くプロトタイプとして作り、フローを実際に操作して判断できるようにしました。本製品はまだ実在の不動産会社では検証されていません。検証は予定されており、ここでその成果を主張することはありません。' } },
        { key: 'outcome', label: { pt: 'Resultado', en: 'Outcome', ja: '結果' }, body: {
          pt: 'O produto está em desenvolvimento ativo e ainda não tem resultados com clientes. Nenhuma métrica de performance ou comercial deve ser atribuída a ele. O que existe e pode ser mostrado: um perfil de cliente definido, uma arquitetura de produto moldada por restrições legais e de custo, protótipos funcionais dos dois perfis de usuário e uma estrutura comercial completa com planos e checkout.',
          en: 'The product is in active development and has no customer results yet. No performance or commercial metrics should be attributed to it. What exists and can be shown: a defined customer profile, a product architecture shaped by legal and cost constraints, functional prototypes of both user profiles, and a complete commercial structure with plans and checkout.',
          ja: '本製品は開発中で、顧客における実績はまだありません。いかなる性能上・商業上の数値も本製品に帰属させるべきではありません。示せるのは次のものです。定義された顧客像、法的制約と費用の制約から形づくられたプロダクトのアーキテクチャ、二種類のユーザー向けの動くプロトタイプ、そしてプランと決済を含む商用の全体構造。' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates', ja: 'この事例が示すもの' }, body: {
          pt: 'A criação de um produto ponta a ponta: enquadrar o problema, escolher o cliente, definir a estratégia, desenhar a experiência para papéis distintos e construir protótipos funcionais. Demonstra também uma abordagem específica para produtos de IA, em que confiabilidade, conformidade legal e custo de operação são tratados como material de design — não como detalhes de engenharia descobertos depois.',
          en: 'Creating a product end to end: framing the problem, choosing the customer, defining the strategy, designing the experience for distinct roles and building functional prototypes. It also demonstrates a specific approach to AI products, in which reliability, legal compliance and operating cost are treated as design material rather than engineering details discovered later.',
          ja: '問題の定義、顧客の選定、戦略の策定、異なる役割に向けた体験の設計、そして動くプロトタイプの構築まで、プロダクトを端から端までつくること。あわせて、AIプロダクトに対する明確な姿勢も示しています。信頼性、法令適合、運用コストを、後から見つかる技術的な細部ではなく、デザインの材料として扱うという姿勢です。' } }
      ],
      takeaway: {
        pt: 'Uma funcionalidade de IA conquista adoção quando protege o que seus usuários já valorizam. Desenhar o assistente para fortalecer a relação do corretor com o cliente, em vez de interceptá-la, foi uma decisão de produto — não uma gentileza.',
        en: 'An AI feature earns adoption when it protects what its users already value. Designing the assistant to strengthen the broker\'s relationship with the client, instead of intercepting it, was a product decision — not a courtesy.',
        ja: 'AIの機能が受け入れられるのは、それが利用者のすでに大切にしているものを守るときです。顧客との関係を横取りするのではなく、仲介担当者とその顧客の関係を強めるようにアシスタントを設計したのは、気づかいではなくプロダクト上の判断でした。'
      },
      evidenceTodo: {
        pt: 'A adicionar: telas das experiências de gestor e corretor, walkthrough do protótipo, o artefato do pre-mortem, o fluxo do assistente de anúncios, o fluxo de importação no onboarding, sessões de validação com imobiliárias reais e resultados observáveis quando o produto chegar aos clientes.',
        en: 'To add: manager and broker screens, prototype walkthrough, the pre-mortem artifact, the advertising wizard flow, the onboarding import flow, validation sessions with real agencies, and observable results once the product reaches customers.',
        ja: '今後追加する予定：経営者と仲介担当者の画面、プロトタイプの操作記録、プレモーテムの成果物、広告ウィザードのフロー、導入時の取り込みフロー、実在の不動産会社との検証、そして顧客に届いたあとの観測可能な結果。'
      },
      media: {
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/entrada-escolha-de-papel.png',
        shots: [
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/entrada-escolha-de-papel.png', caption: { pt: 'Painel do corretor: o que é meu e o que preciso fazer agora', en: 'Agent dashboard: what is mine and what I need to do now', ja: '仲介担当者の画面：いま自分が持っている案件と、次にすべきこと' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/gestor-dashboard.png', caption: { pt: 'Painel do gestor: a mesma operação lida de outro ângulo', en: 'Manager dashboard: the same operation read from another angle', ja: '管理者の画面：同じ現場を別の角度から読む' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/corretor-meus-atendimentos.png', caption: { pt: 'A IA entrega o lead qualificado ao corretor com o contexto já pronto', en: 'The AI hands a qualified lead to the agent with the context already prepared', ja: 'AIが要件を整理したうえで、担当者に見込み客を引き継ぐ' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/gestor-equipe.png', caption: { pt: 'Gestão de equipe, visível apenas para o gestor (números de demonstração)', en: 'Team management, visible only to the manager (demonstration figures)', ja: 'チーム管理。管理者だけに表示される（数値はデモ用）' } }
        ]
      },
      links: [],
      aiCard: {
        thumb: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/entrada-escolha-de-papel.png',
        tags: ['AI Product Design', 'B2B SaaS', 'Conversational UX'],
        bullets: {
          pt: [
            'Produto criado do zero: problema, ICP, estratégia, planos, UX/UI e protótipo em código.',
            'Pre-mortem estruturado usado como instrumento de design.',
            'A IA responde apenas a partir da base de imóveis da imobiliária.',
            'Assistente do corretor, nunca substituto: o corretor mantém a relação.',
            'LGPD e custo de operação tratados como restrições de design.'
          ],
          en: [
            'Product created from scratch: problem, ICP, strategy, plans, UX/UI and coded prototype.',
            'Structured pre-mortem used as a design instrument.',
            'The AI answers only from the agency\'s own property base.',
            'The broker\'s assistant, never a replacement: the broker keeps the relationship.',
            'LGPD and operating cost treated as design constraints.'
          ]
        },
        deepLink: '/visual.html#case-imobia'
      }
    },

    /* ============================================================ CASE 04 */
    {
      id: 'mercs',
      index: '04',
      name: 'Mercs',
      family: { pt: 'Produto próprio', en: 'Independent product', ja: '自社プロダクト' },
      status: 'building',
      accent: '#8CE05A',
      positioning: {
        pt: ['AI Product Design', 'B2B SaaS', 'UX conversacional', 'Regras comerciais seguras'],
        en: ['AI Product Design', 'B2B SaaS', 'Conversational UX', 'Safe commercial rules']
      },
      question: {
        pt: 'Como deixar uma IA negociar uma venda real — com preços, descontos e compromissos — sem nunca deixá-la decidir quais são esses números?',
        en: 'How do you let an AI negotiate a real sale — with prices, discounts and commitments attached — without ever letting it decide what those numbers are?',
        ja: '価格や値引き、約束が伴う実際の商談をAIに任せながら、その数字を決めさせないようにするには、どうすればよいか。'
      },
      oneLiner: {
        pt: 'A IA argumenta. O sistema decide.',
        en: 'The AI argues. The system decides.',
        ja: 'AIは説得する。決めるのはシステム。'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context', ja: '背景' }, body: {
          pt: 'Mercs é um SaaS B2B para pequenos e médios negócios brasileiros que já vendem por WhatsApp. Um agente de IA recebe as conversas, responde sobre os produtos que o lojista cadastrou, negocia dentro da margem que o dono definiu, fecha a venda e devolve a conversa para o humano. Esses comerciantes não perdem venda por falta de canal: perdem porque o lead chega a qualquer hora e a qualidade da negociação depende de quem estiver livre para responder.',
          en: 'Mercs is a B2B SaaS platform for small and mid-sized Brazilian businesses already selling through WhatsApp. An AI agent receives inbound conversations, answers questions about the products the merchant registered, negotiates within the margin the owner defined, closes the sale and hands the conversation back to a human. These merchants do not lose sales for lack of a channel: they lose them because leads arrive at all hours and the quality of a negotiation depends on whoever happens to be free.',
          ja: 'Mercsは、すでにWhatsAppで販売しているブラジルの中小規模の事業者に向けたB2B SaaSです。AIエージェントが届いた会話を受け、店舗が登録した商品について答え、経営者が定めた利幅の範囲で交渉し、販売を成立させ、会話を人に引き継ぎます。こうした店舗が販売を逃すのは、販売経路がないからではありません。問い合わせがいつ来るか分からず、交渉の質がそのとき手の空いている人によって変わってしまうからです。' } },
        { key: 'problem', label: { pt: 'O problema', en: 'The problem', ja: '課題' }, body: {
          pt: 'Uma IA que fala sobre dinheiro é um produto diferente de uma IA que responde perguntas. Uma frase errada sobre prazo de entrega é uma experiência ruim; uma frase errada sobre desconto é um desconto que o lojista terá de honrar. Modelos de linguagem são fluentes, concordantes e — sob pressão de um cliente insistente — negociáveis. São exatamente as propriedades erradas para a parte da conversa que envolve preço e margem. O problema de adoção não era qualidade de interface: era se dava para confiar o comercial ao sistema.',
          en: 'An AI that talks about money is a different product from an AI that answers questions. A wrong sentence about delivery is a poor experience; a wrong sentence about a discount is a discount the merchant has to honour. Language models are fluent, agreeable and — under pressure from a persistent customer — negotiable. Those are precisely the wrong properties for the part of a conversation involving price and margin. The adoption problem was not interface quality: it was whether the commercial conversation could be trusted to the system at all.',
          ja: 'お金の話をするAIは、質問に答えるAIとは別の製品です。配送についての誤った一文は体験の質の問題ですが、値引きについての誤った一文は、店舗が履行しなければならない値引きそのものになります。言語モデルは流暢で、相手に同調しやすく、しつこい顧客に押されれば譲歩します。会話のうち価格と利幅に関わる部分にとって、それはことごとく逆の性質です。導入の障壁はインターフェースの質ではなく、商談そのものをシステムに任せられるかどうかでした。' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role', ja: '担当' }, body: {
          pt: 'Criei o produto do zero, sozinho: definição do problema, perfil de cliente ideal, estratégia de produto e comercial, arquitetura de informação, UX/UI do painel, design conversacional do agente — identidade, tom, formato de mensagem, comportamento de negociação e fechamento —, as regras comerciais que o sistema aplica, o site e o produto funcionando, construído em código com apoio de IA. Exposição jurídica, obrigações regulatórias e custo de operação foram tratados como material de design, não como detalhes de engenharia a resolver depois.',
          en: 'I created the product from scratch as sole founder: problem framing, ideal customer profile, product and commercial strategy, information architecture, panel UX/UI, conversational design for the agent — identity, tone, message format, negotiation and closing behaviour — the commercial rules the system enforces, the marketing site, and the working product built in code with AI assistance. Legal exposure, regulatory obligations and operating cost were treated as design material rather than engineering details to resolve later.',
          ja: '単独の創業者として、ゼロから作りました。問題の定義、理想的な顧客像、プロダクトと事業の戦略、情報アーキテクチャ、管理画面のUX/UI、エージェントの会話設計（人格、口調、メッセージの形式、交渉と成約の振る舞い）、システムが強制する商取引のルール、マーケティングサイト、そしてAIを用いてコードで構築した実際に動く製品。法的な露出、規制上の義務、運用コストは、後で片づける技術的な細部ではなく、デザインの材料として扱いました。' } },
        { key: 'discovery', label: { pt: 'Começar pelas falhas', en: 'Starting from the failures', ja: '失敗の仕方から始める' }, body: {
          pt: 'Em vez de partir de telas, parti das formas como o agente poderia falhar. Construí dois comerciantes de teste completos — uma loja de hardware com vinte produtos e uma operadora de planos de saúde com seis planos — para exercitar o agente contra catálogos, regras de preço, variantes e perguntas reais, junto de um simulador público que tornava cada conversa observável. O modo como ele falhava moldou a arquitetura muito mais do que qualquer lista de funcionalidades moldaria.',
          en: 'Rather than starting from screens, I started from the ways the agent could fail. I built two complete test merchants — a computer-hardware retailer with a twenty-product catalogue and a health-plan provider with six plans — to exercise the agent against realistic catalogues, price rules, variants and customer questions, alongside a public simulator that made every conversation observable. How it failed shaped the architecture far more than any feature list would have.',
          ja: '画面からではなく、エージェントがどう失敗しうるかから始めました。二つの完全なテスト用店舗を用意しています。20商品を扱うPCパーツ販売店と、6つのプランを持つ医療プラン提供者です。現実的なカタログ、価格規則、派生商品、顧客の質問に対してエージェントを試すためで、あわせて公開のシミュレーターを用意し、すべての会話を観察できるようにしました。どのように失敗したかが、どんな機能一覧よりもアーキテクチャを形づくりました。' } },
        { key: 'decisions', label: { pt: 'A decisão central', en: 'The central decision', ja: '中心にある判断' }, body: {
          pt: 'O agente nunca escreve um número. Quando o cliente pede desconto, o modelo emite um marcador oculto informando apenas o que foi pedido. O backend calcula a oferta em centavos inteiros, aplica estratégia, faixas de quantidade, teto e piso, e escreve ele mesmo a frase comercial. Um guardrail determinístico depois lê o que o modelo escreveu, procurando percentuais e valores que rompam o teto ou fiquem abaixo do piso. Considerei substituir essa camada por um laço de tool calling em que o modelo pede o preço. Rejeitei: validação que roda depois da geração é uma fronteira, enquanto uma ferramenta que o modelo escolhe chamar é uma sugestão.',
          en: 'The agent never authors a number. When a customer asks for a discount, the model emits a hidden marker stating only what was requested. The backend calculates the offer in integer cents, applies the strategy, quantity bands, ceiling and floor, and writes the commercial sentence itself. A deterministic guardrail then reads what the model wrote, scanning for percentages and values that break the ceiling or fall below the floor. I considered replacing that layer with a tool-calling loop where the model requests a price. I rejected it: validation that runs after generation is a boundary, while a tool the model chooses to call is a suggestion.',
          ja: 'エージェントは決して数字を書きません。顧客が値引きを求めると、モデルは何を求められたかだけを示す隠しマーカーを出します。バックエンドが整数のセント単位で提示額を計算し、戦略、数量帯、上限と下限を適用したうえで、商談の一文そのものを書きます。その後、決定的なガードレールがモデルの書いた文を読み、上限を超える、あるいは下限を割る割合や金額がないかを走査します。この層を、モデルが価格を問い合わせるツール呼び出しの仕組みに置き換えることも検討し、退けました。生成のあとに走る検証は境界ですが、モデルが呼ぶかどうかを選べるツールは提案にすぎないからです。' } },
        { key: 'silence', label: { pt: 'Silêncio em vez de invenção', en: 'Silence over invention', ja: '作り話をせず、黙る' }, body: {
          pt: 'A recuperação de conhecimento é restrita ao lojista e ao produto ativo, com limiar de similaridade. Quando nada passa do limiar, o prompt carrega um bloco explícito de "sem evidência no material cadastrado", e o agente diz que vai confirmar com a equipe em vez de completar a resposta com conhecimento pré-treinado. Ambiguidade também é estrutural, não instrução: quando a frase do cliente casa com duas variantes e não há nada que as distinga, o sistema não troca de produto, não faz oferta e não fecha — apresenta os candidatos e pergunta.',
          en: 'Retrieval is scoped to the merchant and the active product, with a similarity threshold. When nothing passes it, the prompt carries an explicit "no evidence in the registered material" block, and the agent says it will confirm with the team instead of completing the answer from pre-trained knowledge. Ambiguity is structural rather than instructional: when a customer\'s phrasing matches two variants and contains nothing to distinguish them, the system does not switch product, does not make an offer and does not close — it presents the candidates and asks.',
          ja: '知識の検索は、その店舗と、いま話題になっている商品に限定され、類似度のしきい値を設けています。何もしきい値を超えないとき、プロンプトには「登録された資料に根拠なし」という明示的な区画が入り、エージェントは事前学習の知識で答えを埋めるのではなく、担当者に確認すると伝えます。曖昧さの扱いも、指示ではなく構造で担保しています。顧客の言い回しが二つの派生商品に当てはまり、区別する材料がないとき、システムは商品を切り替えず、提示もせず、成約もしません。候補を並べて、尋ねます。' } },
        { key: 'scope', label: { pt: 'Entregar menos em vez de prometer mais', en: 'Shipping less rather than promising more', ja: '約束を増やすより、範囲を狭めて出す' }, body: {
          pt: 'A versão um sai sem pagamento integrado. Uma única chave suspende o caminho de cobrança: a seção de pagamentos aparece como "em breve" e desabilitada, e quando o agente fecha uma venda ele alerta o dono e envia ao cliente uma mensagem de espera. Nenhuma tela e nenhuma frase promete um link de pagamento que o produto ainda não consegue gerar.',
          en: 'Version one ships without integrated payment. A single flag suspends the charging path: the payments section is labelled as coming soon and disabled, and when the agent closes a sale it alerts the owner and sends the customer a holding message. No screen and no sentence promises a payment link the product cannot yet produce.',
          ja: '最初の版は決済連携なしで出します。ひとつのフラグが課金の経路を止めており、決済の区画は「近日公開」として無効化されています。エージェントが販売を成立させると、経営者に通知し、顧客には待機を伝えるメッセージを送ります。まだ生成できない決済リンクを、どの画面も、どの一文も約束しません。' } },
        { key: 'validation', label: { pt: 'Validação', en: 'Validation', ja: '検証' }, body: {
          pt: 'As regras comerciais vivem num único módulo compartilhado entre o sistema em execução e a suíte de testes, de modo que a regra que decide um preço em produção é a mesma que os testes exercitam — cerca de trinta casos cobrindo os cenários de negociação. Incidentes foram tratados como retorno de design, e produziram uma lição consistente: o sintoma relatado quase nunca é a causa. O produto ainda não foi validado com lojistas reais, e essa validação não é reivindicada aqui.',
          en: 'The commercial rules live in a single module shared by the running system and its test suite, so the rule that decides a price in production is the one the tests exercise — roughly thirty cases covering the required negotiation scenarios. Incidents were treated as design feedback, and produced a consistent lesson: the reported symptom is rarely the cause. The product has not yet been validated with real merchants, and that validation is not claimed here.',
          ja: '商取引のルールは単一のモジュールにあり、稼働中のシステムとテスト群がそれを共有しています。つまり本番で価格を決めるルールが、そのままテストで検証されるルールです。必要な交渉の場面を網羅する30ほどのケースがあります。障害はデザインへのフィードバックとして扱い、そこから一貫した教訓が出ました。報告された症状が原因であることは、ほとんどありません。本製品はまだ実在の店舗では検証されておらず、ここでその成果を主張することはありません。' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates', ja: 'この事例が示すもの' }, body: {
          pt: 'O design de um produto de IA em que a confiabilidade é propriedade do sistema, e não esperança sobre o modelo: separar o que a IA pode dizer do que só o código pode decidir, projetar para os modos de falha de um modelo de linguagem num contexto comercial, tratar regulação, privacidade e custo como restrições de design, e escolher entregar um produto menor e honesto em vez de um maior e prometido.',
          en: 'The design of an AI product where reliability is a property of the system rather than a hope about the model: separating what the AI may say from what only code may decide, designing for the failure modes of a language model in a commercial setting, treating regulation, privacy and cost as design constraints, and choosing to ship a smaller honest product instead of a larger promised one.',
          ja: '信頼性が、モデルへの期待ではなくシステムの性質として成り立つAIプロダクトの設計。AIが言ってよいことと、コードだけが決めてよいことを分けること。商取引の文脈における言語モデルの失敗の仕方を前提に設計すること。規制、プライバシー、費用をデザイン上の制約として扱うこと。そして、大きく約束された製品ではなく、小さくても誠実な製品を出すことを選ぶこと。' } }
      ],
      takeaway: {
        pt: 'Confiança em um produto de IA não se constrói fazendo o modelo soar mais seguro. Constrói-se decidindo, de antemão, quais frases o modelo não tem permissão para escrever.',
        en: 'Trust in an AI product is not built by making the model sound more confident. It is built by deciding, in advance, which sentences the model is not allowed to write.',
        ja: 'AIプロダクトへの信頼は、モデルをより自信ありげに話させることでは築けません。どの文をモデルに書かせないかを、あらかじめ決めることで築かれます。'
      },
      evidenceTodo: {
        pt: 'A adicionar: diagrama do caminho da negociação, da mensagem ao guardrail e ao fechamento; fluxo de conexão do WhatsApp; exemplos de conversa com tentativa de desconto bloqueada; fluxo de alerta e transferência; sessões de validação com lojistas reais e custo observado por conversa.',
        en: 'To add: a diagram of the negotiation path from message to guardrail to closing; the WhatsApp connection flow; conversation examples including a blocked discount attempt; the alert and handover flow; validation sessions with real merchants and observed cost per conversation.',
        ja: '今後追加する予定：メッセージからガードレール、成約に至る交渉経路の図、WhatsAppの接続フロー、値引き要求が遮られた例を含む会話の実例、通知と引き継ぎのフロー、実在の店舗との検証、そして会話あたりの実測コスト。'
      },
      media: {
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/landing-demonstracao-ao-vivo.png',
        shots: [
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/cadastro-produto-limite-de-desconto.png', caption: { pt: 'Cadastro de produto: é aqui que mora a autoridade comercial — preço, teto de desconto e piso calculado', en: 'Product registration: where commercial authority lives — price, discount ceiling and calculated floor', ja: '商品登録：価格、値引きの上限、そこから算出される下限。商取引の権限はここにある' } },
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/conversa-whatsapp-planos.png', caption: { pt: 'Conversa real: o agente compara planos e admite não ter um detalhe em vez de preenchê-lo', en: 'A real conversation: the agent compares plans and admits a missing detail instead of filling it in', ja: '実際の会話：エージェントはプランを比較し、不足している情報は埋めずに正直に伝える' } },
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/demo-interativa-como-negocia.png', caption: { pt: 'Demonstração ao vivo no site: quem calcula o preço é o sistema, a IA apenas argumenta', en: 'Live demo on the site: the system calculates the price, the AI only argues', ja: 'サイト上のライブデモ：価格を計算するのはシステムで、AIは説得するだけ' } },
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/painel-dashboard-do-gestor.png', caption: { pt: 'Painel do lojista, com o interruptor que devolve o atendimento ao humano (números de demonstração)', en: 'Merchant panel, with the switch that returns the conversation to a human (demonstration figures)', ja: '店舗側の管理画面。対応を人に戻す切り替えがある（数値はデモ用）' } }
        ]
      },
      links: [],
      aiCard: {
        thumb: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/landing-demonstracao-ao-vivo.png',
        tags: ['AI Product Design', 'B2B SaaS', 'Conversational UX'],
        bullets: {
          pt: [
            'Criou o produto inteiro sozinho, do problema ao código funcionando.',
            'A IA argumenta; preço, teto e piso são decididos por código determinístico.',
            'Guardrail lê o que o modelo escreveu antes de enviar; violação vira alerta.',
            'Versão um sem pagamento integrado: nenhuma tela promete o que não existe.'
          ],
          en: [
            'Created the entire product alone, from problem framing to working code.',
            'The AI argues; price, ceiling and floor are decided by deterministic code.',
            'A guardrail reads what the model wrote before sending; violations raise alerts.',
            'Version one ships without payment: no screen promises what does not exist.'
          ]
        },
        deepLink: '/visual.html#case-mercs'
      }
    }

  ],

  /* ------------------------------------------------- CASES EM CONSTRUÇÃO */
  upcoming: [
    {
      id: 'mercs-mkt',
      name: 'Mercs MKT',
      accent: '#FF8C9A',
      oneLiner: {
        pt: 'Uma operação de marketing desenhada como produto multi-agente com humano no circuito: responsabilidades dos agentes, fluxos de planejamento e produção, aprovações e conhecimento de marca.',
        en: 'A marketing operation designed as a human-in-the-loop multi-agent product: agent responsibilities, planning and production workflows, approvals and brand knowledge.',
        ja: '人が確認を担うマルチエージェント型のプロダクトとして設計したマーケティング業務。エージェントの役割分担、企画と制作のワークフロー、承認、そしてブランドの知識。'
      },
      focus: { pt: 'Workflows multi-agente · Aprovações · Prototipagem funcional', en: 'Multi-agent workflows · Approvals · Functional prototyping', ja: 'マルチエージェントのワークフロー · 承認 · 機能するプロトタイプ' }
    },
    {
      id: 'portfolio-ai',
      name: { pt: 'Portfólio com IA', en: 'Portfolio AI', ja: 'ポートフォリオAI' },
      accent: '#7FE0D6',
      oneLiner: {
        pt: 'Transformar um portfólio estático em uma experiência conversacional multilíngue capaz de explicar o trabalho do seu criador por voz e por texto.',
        en: 'Turning a static portfolio into a multilingual conversational experience that can explain its creator\'s work by voice and by chat.',
        ja: '静的なポートフォリオを、音声とチャットで制作者の仕事を説明できる多言語の会話体験に変えること。'
      },
      focus: { pt: 'Conhecimento estruturado · Comportamento multilíngue · Identidade da IA', en: 'Structured knowledge · Multilingual behaviour · AI identity', ja: '構造化された知識 · 多言語での振る舞い · AIのアイデンティティ' },
      isThisSite: true
    }
  ],

  /* ------------------------------------------------------------- CONTEXTO */
  context: [
    { k: { pt: 'Base', en: 'Based in', ja: '拠点' },        v: { pt: 'Curitiba, Brasil', en: 'Curitiba, Brazil', ja: 'ブラジル・クリチバ' } },
    { k: { pt: 'Disponibilidade', en: 'Availability', ja: '稼働条件' }, v: { pt: 'Remoto ou presencial', en: 'Remote or on-site', ja: 'リモートまたはオンサイト' } },
    { k: { pt: 'Idiomas', en: 'Languages', ja: '言語' },    v: { pt: 'Português · Inglês profissional · Japonês básico', en: 'Portuguese · Professional English · Basic Japanese', ja: 'ポルトガル語 · 業務レベルの英語 · 基礎的な日本語' } },
    { k: { pt: 'Japão', en: 'Japan', ja: '日本' },          v: { pt: 'Vivi no Japão dos 9 aos 18 anos', en: 'Lived in Japan from age 9 to 18', ja: '9歳から18歳まで日本で生活' } },
    { k: { pt: 'Experiência', en: 'Experience', ja: '経験' }, v: { pt: '16 anos em produtos digitais', en: '16 years in digital products', ja: 'デジタルプロダクトで16年' } }
  ],

  /* --------------------------------------------------- REGRAS PARA A IA --
     Espelham as regras de comportamento do documento de conhecimento.
     Mantidas aqui para que a versão com IA leia a mesma fonte.                */
  aiRules: [
    'Descreva Nuno principalmente como Product Designer Sênior e solucionador de problemas. IA, prototipagem funcional e design systems são ferramentas e áreas de expertise — não devem ofuscar sua identidade central.',
    'Nunca invente conquistas, métricas, clientes, responsabilidades, tecnologias ou níveis de proficiência ausentes do conhecimento do portfólio. Se a informação não existir, diga que não está documentada e ofereça o contato.',
    'A IA é apenas uma interface conversacional que explica o trabalho de Nuno. Nunca se descreva como coautora, colaboradora ou criadora dos projetos.',
    'Nuno usa código e desenvolvimento assistido por IA para criar e validar protótipos funcionais. Não o apresente como engenheiro de software tradicional.',
    'Japonês em nível básico: lê e escreve hiragana e katakana. Nunca descreva como fluente ou proficiente profissionalmente.',
    'Disponibilidade: "aberto a oportunidades remotas ou presenciais". Não sugira que trabalhar no Japão é seu objetivo principal.',
    'Imob.IA está em desenvolvimento ativo e não tem resultados com clientes. Nenhuma métrica deve ser atribuída a ele.',
    'Não afirme que Nuno se tornou formalmente Product Owner do SIGA.'
  ]
};

if (typeof window !== 'undefined') window.NUNO_DATA = NUNO_DATA;
if (typeof module !== 'undefined' && module.exports) module.exports = NUNO_DATA;
