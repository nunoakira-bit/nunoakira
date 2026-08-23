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
    updated: '2026-08-22',
    aiVersionUrl: '/',                    // botão "voltar para a versão com IA"
    visualVersionUrl: '/visual.html',
    assetsBase: 'assets/'
  },

  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: 'Nuno Akira Sugano',
    nameJa: 'ヌノ・アキラ・スガノ',
    role: { pt: 'Product Designer Sênior', en: 'Senior Product Designer' },
    years: 16,
    base: { pt: 'Curitiba, Brasil', en: 'Curitiba, Brazil' },
    availability: {
      pt: 'Aberto a oportunidades remotas ou presenciais',
      en: 'Open to remote or on-site opportunities'
    },
    headline: {
      pt: ['Transformo', 'complexidade', 'em experiências', 'simples'],
      en: ['I turn', 'complexity', 'into simple', 'experiences']
    },
    intro: {
      pt: 'Product Designer Sênior com 16 anos em produtos digitais, UX/UI, design systems, estratégia de produto e prototipagem funcional. Minha formação também passa por design gráfico, branding, direção de arte, motion e visual design.',
      en: 'Senior Product Designer with 16 years in digital products, UX/UI, design systems, product strategy and functional prototyping. My background also includes graphic design, branding, art direction, motion and visual design.'
    },
    thesis: {
      pt: 'Design é resolver problemas de pessoas. O objetivo é entender o problema real e transformar complexidade em algo simples, elegante e intuitivo. Qualidade visual importa — mas uma interface bonita, sozinha, não é bom design.',
      en: 'Design is about solving problems for people. The goal is to understand the real problem and turn complexity into something simple, elegant and intuitive. Visual quality matters — but a beautiful interface alone is not good design.'
    },
    contact: {
      email: '__nunoakira@gmail.com',
      linkedin: '__https://linkedin.com/in/__PREENCHER',
      github: 'https://github.com/nunoakira-bit',
      site: 'https://www.nunoakira.com.br',
      resume: '__assets/nuno-akira-sugano-cv.pdf'
    }
  },

  /* ------------------------------------------------------------ CAPABILITIES */
  capabilities: [
    { id: 'complex',   label: { pt: 'Domínios complexos',       en: 'Complex domains' } },
    { id: 'ux',        label: { pt: 'UX / UI',                  en: 'UX / UI' } },
    { id: 'ds',        label: { pt: 'Design Systems',           en: 'Design Systems' } },
    { id: 'strategy',  label: { pt: 'Estratégia de produto',    en: 'Product strategy' } },
    { id: 'research',  label: { pt: 'Pesquisa com especialistas', en: 'Specialist research' } },
    { id: 'proto',     label: { pt: 'Prototipagem funcional',   en: 'Functional prototyping' } },
    { id: 'ai',        label: { pt: 'Produtos de IA',           en: 'AI products' } },
    { id: 'eng',       label: { pt: 'Colaboração com engenharia', en: 'Working with engineering' } }
  ],

  /* -------------------------------------------------------------- PRINCÍPIOS */
  principles: [
    {
      id: 'user-centered',
      kicker: { pt: 'Decisão', en: 'Decision' },
      title: { pt: 'Centrado no usuário, não na tendência', en: 'User-centered, not trend-centered' },
      body: {
        pt: 'Considero princípios de usabilidade, heurísticas, contexto, requisitos de negócio e restrições técnicas ao decidir. Evito desenhar interface apoiado só em estética ou tendência.',
        en: 'I weigh usability principles, heuristics, context, business requirements and technical constraints when deciding. I avoid designing interfaces based only on aesthetics or trends.'
      }
    },
    {
      id: 'complexity',
      kicker: { pt: 'Método', en: 'Method' },
      title: { pt: 'Reduzir a complexidade sem ignorá-la', en: 'Reduce complexity without ignoring it' },
      body: {
        pt: 'Gosto de produtos e fluxos complexos: entender regras, exceções, usuários e limites técnicos e então reduzir isso a uma experiência que parece simples. Prefiro soluções simples a camadas desnecessárias.',
        en: 'I enjoy complex products and workflows: understanding rules, exceptions, users and technical constraints, then reducing that into an experience that feels simple. I prefer simple solutions over unnecessary layers.'
      }
    },
    {
      id: 'prototyping',
      kicker: { pt: 'Prática', en: 'Practice' },
      title: { pt: 'Protótipo funcional, não só tela estática', en: 'Functional prototypes, not just static screens' },
      body: {
        pt: 'Uso Figma, Claude Code, repositórios GitHub e desenvolvimento assistido por IA para transformar ideias em protótipos funcionais que podem ser experimentados e testados mais cedo. Código é ferramenta de design — não me apresento como engenheiro de software.',
        en: 'I use Figma, Claude Code, GitHub repositories and AI-assisted development to turn ideas into functional prototypes that can be experienced and tested earlier. Code is a design tool — I do not present myself as a software engineer.'
      }
    },
    {
      id: 'ai',
      kicker: { pt: 'IA', en: 'AI' },
      title: { pt: 'IA cuida da linguagem. Regras cuidam dos fatos.', en: 'AI handles language. Rules handle facts.' },
      body: {
        pt: 'Me interessa desenhar sistemas em que a IA cuida de linguagem e raciocínio enquanto regras determinísticas controlam fatos, permissões e decisões críticas de negócio. Revisão humana continua importante quando faz sentido.',
        en: 'I am interested in designing systems where AI handles language and reasoning while deterministic rules control facts, permissions and critical business decisions. Human review remains important where appropriate.'
      }
    },
    {
      id: 'engineering',
      kicker: { pt: 'Time', en: 'Team' },
      title: { pt: 'Design não é handoff', en: 'Design is not a handoff' },
      body: {
        pt: 'Trabalho junto de devs e produto da descoberta à implementação: discuto restrições técnicas, documento decisões, crio protótipos e specs, reviso a qualidade da implementação e ajusto a solução em conjunto.',
        en: 'I work with developers and product teams from discovery through implementation: discussing technical constraints, documenting decisions, creating prototypes and specs, reviewing implementation quality and adjusting solutions together.'
      }
    },
    {
      id: 'international',
      kicker: { pt: 'Contexto', en: 'Context' },
      title: { pt: 'Colaboração internacional', en: 'International collaboration' },
      body: {
        pt: 'Tenho experiência colaborando com pessoas e times de países diferentes. Participo de reuniões em inglês, discuto decisões de produto e design, apresento trabalho e documento decisões e soluções em inglês.',
        en: 'I have experience collaborating with people and teams from different countries. I take part in meetings in English, discuss product and design decisions, present work and document decisions and solutions in English.'
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
        en: 'How do you transform archival rules, specialist knowledge and complex operational requirements into a product that people can actually understand and use?'
      },
      oneLiner: {
        pt: 'Gestão arquivística e documental desenhada a partir do domínio — não a partir da interface.',
        en: 'Archival and document management designed from the domain — not from the interface.'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context' }, body: {
          pt: 'O SIGA faz parte do EOS Suite e atua em gestão arquivística e documental. Desenhar o produto exigiu entender um domínio especializado em que os fluxos são restringidos não apenas por necessidades do usuário e requisitos de negócio, mas também por normas e regras arquivísticas.',
          en: 'SIGA is part of the EOS Suite and operates in archival and document management. Designing the product required understanding a specialised domain in which workflows are constrained not only by user needs and business requirements, but also by archival standards and rules.' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role' }, body: {
          pt: 'Fui o designer responsável pela solução completa. Meu envolvimento foi além de desenhar interfaces: entendimento do domínio, definição e validação de fluxos, estruturação da experiência e manutenção da continuidade do conhecimento de produto ao longo do desenvolvimento.',
          en: 'I was the designer responsible for the complete solution. My involvement went beyond designing interfaces: understanding the domain, defining and validating workflows, structuring the experience and maintaining continuity of product knowledge throughout development.' } },
        { key: 'discovery', label: { pt: 'Aprender o domínio', en: 'Learning the domain' }, body: {
          pt: 'Em vez de desenhar a partir de suposições, entrevistei arquivistas e especialistas para entender como os processos arquivísticos realmente funcionam. Essas conversas ajudaram a mapear terminologia, responsabilidades, restrições e fluxos — e foram usadas também para validar as experiências propostas.',
          en: 'Rather than designing from assumptions, I interviewed archivists and specialists to understand how archival processes actually work. These conversations helped map terminology, responsibilities, constraints and workflows, and were also used to validate the proposed experiences.' } },
        { key: 'constraints', label: { pt: 'Entender as regras', en: 'Understanding the rules' }, body: {
          pt: 'Estudei a documentação do e-ARQ Brasil e do CONARQ para entender os requisitos que afetavam o produto. O objetivo era garantir que a experiência não fosse apenas usável, mas viável dentro do contexto arquivístico e legal em que o SIGA opera.',
          en: 'I studied e-ARQ Brasil and CONARQ documentation to understand the requirements affecting the product. The objective was to make sure the experience was not only usable, but viable within the archival and legal context in which SIGA operates.' } },
        { key: 'approach', label: { pt: 'Abordagem de design', en: 'Design approach' }, body: {
          pt: 'O processo foi baseado em reduzir complexidade sem ignorá-la. Traduzi regras de especialistas e requisitos operacionais em fluxos e interações compreensíveis pelos usuários, preservando os requisitos que o sistema precisava atender. A interface foi consequência do entendimento do domínio — não o ponto de partida.',
          en: 'The process was based on reducing complexity without ignoring it. I translated specialist rules and operational requirements into flows and interactions users could understand, while preserving the requirements the system had to satisfy. The interface was the consequence of understanding the domain, not the starting point.' } },
        { key: 'continuity', label: { pt: 'Continuidade e liderança', en: 'Continuity and leadership' }, body: {
          pt: 'O SIGA teve três Product Owners diferentes durante o desenvolvimento. Por permanecer envolvido do início ao fim e acumular conhecimento sobre regras, fluxos e decisões de design, tornei-me a pessoa com a visão mais ampla do produto e assumi um papel de condução do seu desenvolvimento.',
          en: 'SIGA had three different Product Owners during development. Because I remained involved throughout and accumulated knowledge of its rules, workflows and design decisions, I became the person with the broadest view of the product and took a leading role in driving its development forward.' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates' }, body: {
          pt: 'Capacidade de entrar em um domínio desconhecido e altamente especializado, aprender diretamente com especialistas, estudar restrições regulatórias, estruturar informação complexa, desenhar e validar fluxos e manter a coerência do produto durante um desenvolvimento longo.',
          en: 'The ability to enter an unfamiliar, highly specialised domain, learn directly from experts, study regulatory constraints, structure complex information, design and validate workflows, and keep the product coherent across a long development process.' } }
      ],
      takeaway: {
        pt: 'Bom UX em sistema complexo não é esconder a complexidade atrás de uma interface mais bonita. É entendê-la bem o suficiente para que a interação do usuário com ela seja clara, previsível e administrável.',
        en: 'Good UX in a complex system is not about hiding complexity behind a prettier interface. It is about understanding it well enough to make the user\'s interaction with it feel clear, predictable and manageable.'
      },
      evidenceTodo: {
        pt: 'A adicionar: telas e fluxos específicos, exemplos de feedback de especialistas e mudanças resultantes, material antes/depois, requisitos do e-ARQ/CONARQ que influenciaram decisões e resultados observáveis.',
        en: 'To add: specific screens and workflows, examples of specialist feedback and resulting changes, before/after material, e-ARQ/CONARQ requirements that shaped decisions, and observable outcomes.'
      },
      media: {
        cover: '__assets/cases/siga/cover.jpg',
        shots: [
          { src: '__assets/cases/siga/01.jpg', caption: { pt: 'Placeholder — tela principal', en: 'Placeholder — main screen' } },
          { src: '__assets/cases/siga/02.jpg', caption: { pt: 'Placeholder — fluxo de classificação', en: 'Placeholder — classification flow' } },
          { src: '__assets/cases/siga/03.jpg', caption: { pt: 'Placeholder — antes / depois', en: 'Placeholder — before / after' } }
        ]
      },
      links: [
        { label: { pt: 'Ver produto', en: 'View product' }, url: '__https://', type: 'product' }
      ],
      aiCard: {
        thumb: '__assets/cases/siga/cover.jpg',
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
        en: 'How do you make a suite of different enterprise applications feel like one coherent ecosystem without removing the identity and purpose of each product?'
      },
      oneLiner: {
        pt: 'Um Design System tratado como infraestrutura de produto — não como biblioteca visual.',
        en: 'A Design System treated as product infrastructure — not as a visual library.'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context' }, body: {
          pt: 'O EOS Suite é um ecossistema de aplicações enterprise que inclui produtos como AIR, SIGA, FLOW, FLOW CIDADÃO, ACCESS e AIR SAFE. Usuários podem transitar por mais de uma aplicação, então inconsistências de navegação, componentes, padrões de interação e linguagem visual aumentam o esforço de aprendizado e a fricção.',
          en: 'EOS Suite is an ecosystem of enterprise applications including products such as AIR, SIGA, FLOW, FLOW CIDADÃO, ACCESS and AIR SAFE. Users may interact with more than one application, so inconsistencies in navigation, components, interaction patterns and visual language increase learning effort and friction.' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role' }, body: {
          pt: 'Refatorei a suíte de aplicações e trabalhei para estabelecer uma experiência coerente em todo o ecossistema. Criei e mantenho o Design System que sustenta a suíte, além de desenhar novos fluxos e novas aplicações quando os padrões existentes não bastam.',
          en: 'I refactored the application suite and worked to establish a coherent experience across the ecosystem. I created and continue to maintain the Design System that supports the suite, while also designing new flows and new applications when existing patterns are not enough.' } },
        { key: 'objective', label: { pt: 'O objetivo do refactor', en: 'The design objective' }, body: {
          pt: 'A refatoração foi movida por mais do que consistência visual. O objetivo era tornar o comportamento previsível entre aplicações, reduzir o quanto o usuário precisa reaprender, reduzir fricção e criar uma experiência EOS reconhecível.',
          en: 'The refactoring was driven by more than visual consistency. The objective was to make behaviour predictable across applications, reduce how much users need to relearn, reduce friction and create a recognisable EOS experience.' } },
        { key: 'system', label: { pt: 'O Design System', en: 'The Design System' }, body: {
          pt: 'O Design System estabelece componentes reutilizáveis, padrões de interação e regras visuais para o ecossistema. É mantido como capacidade de produto, não apenas como biblioteca visual. Soluções compartilhadas devem ser reutilizadas sempre que resolvem bem o problema.',
          en: 'The Design System establishes reusable components, interaction patterns and visual rules for the ecosystem. It is maintained as a product capability rather than only as a visual library. Shared solutions should be reused whenever they solve the problem well.' } },
        { key: 'scale', label: { pt: 'Escalar design pelo desenvolvimento', en: 'Scaling design through development' }, body: {
          pt: 'Com padrões estabelecidos, desenvolvedores criam novas telas padrão mantendo a linguagem visual e de interação esperada do EOS. Essas implementações passam pela minha revisão, permitindo mais autonomia de desenvolvimento sem perder governança e qualidade de design.',
          en: 'With established patterns, developers can create new standard screens while maintaining the expected EOS visual and interaction language. These implementations pass through my review, allowing development to move with more autonomy while preserving design governance and quality.' } },
        { key: 'newflows', label: { pt: 'Onde ainda desenho diretamente', en: 'Where I still design directly' }, body: {
          pt: 'O Design System não existe para forçar todo problema novo a caber num componente existente. Entro diretamente quando um fluxo introduz uma experiência genuinamente diferente ou quando os padrões atuais não resolvem bem. A nova solução então informa a evolução do sistema.',
          en: 'The Design System is not intended to force every new problem into an existing component. I get directly involved when a workflow introduces a genuinely different experience or when existing patterns cannot solve it well. The new solution can then inform the evolution of the system.' } },
        { key: 'newapps', label: { pt: 'Desenhar novas aplicações EOS', en: 'Designing new EOS applications' }, body: {
          pt: 'Também trabalho na criação de novas aplicações da suíte. O desafio é dar a cada produto uma identidade que reflita seu propósito, mantendo a linguagem visual e os padrões de interação compartilhados que o tornam reconhecível como parte do EOS.',
          en: 'I also work on creating new applications in the suite. The challenge is to give each product an identity that reflects its purpose while maintaining the shared visual language and interaction patterns that make it recognisable as part of EOS.' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates' }, body: {
          pt: 'Pensamento de produto em escala de ecossistema: criar consistência, reduzir carga cognitiva e decisões repetidas, habilitar autonomia de desenvolvimento, governar a qualidade da implementação e saber quando padronizar — e quando uma nova experiência precisa ser desenhada.',
          en: 'Product thinking at ecosystem scale: creating consistency, reducing cognitive load and repeated decisions, enabling development autonomy, governing implementation quality, and knowing when standardisation helps — and when a new experience needs to be designed.' } }
      ],
      takeaway: {
        pt: 'Um Design System maduro torna os problemas conhecidos mais baratos de resolver, para que o tempo de design se concentre nos problemas novos e difíceis.',
        en: 'A mature Design System makes known problems cheaper to solve, so design time can be concentrated on the new and difficult ones.'
      },
      evidenceTodo: {
        pt: 'A adicionar: telas antes e depois do refactor, exemplos do Design System, documentação de componentes e tokens, exemplo de tela construída pelo desenvolvimento usando o sistema e exemplos de identidades intencionalmente distintas entre aplicações.',
        en: 'To add: screens before and after the refactor, Design System examples, component and token documentation, an example of a screen built by development using the system, and examples of intentionally different application identities.'
      },
      media: {
        cover: '__assets/cases/eos/cover.jpg',
        shots: [
          { src: '__assets/cases/eos/01.jpg', caption: { pt: 'Placeholder — antes / depois do refactor', en: 'Placeholder — before / after refactor' } },
          { src: '__assets/cases/eos/02.jpg', caption: { pt: 'Placeholder — biblioteca de componentes', en: 'Placeholder — component library' } },
          { src: '__assets/cases/eos/03.jpg', caption: { pt: 'Placeholder — tokens e fundações', en: 'Placeholder — tokens and foundations' } },
          { src: '__assets/cases/eos/04.jpg', caption: { pt: 'Placeholder — identidades por aplicação', en: 'Placeholder — per-application identities' } }
        ]
      },
      links: [
        { label: { pt: 'Ver produto', en: 'View product' }, url: '__https://', type: 'product' }
      ],
      aiCard: {
        thumb: '__assets/cases/eos/cover.jpg',
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
      family: { pt: 'Produto próprio · B2B SaaS', en: 'Own product · B2B SaaS' },
      status: 'wip',
      accent: '#B18CFF',
      positioning: {
        pt: ['AI Product Design', 'B2B SaaS', 'Estratégia de produto', 'UX conversacional', 'Produto ponta a ponta'],
        en: ['AI Product Design', 'B2B SaaS', 'Product strategy', 'Conversational UX', 'End-to-end product']
      },
      question: {
        pt: 'Como desenhar um assistente de IA em que um pequeno negócio confie aquilo que ele mais valoriza — a relação com o cliente?',
        en: 'How do you design an AI assistant that a small business will trust with the thing it values most — its relationship with the client?'
      },
      oneLiner: {
        pt: 'Um assistente de IA para imobiliárias pequenas, desenhado para fortalecer o corretor em vez de substituí-lo.',
        en: 'An AI assistant for small real-estate agencies, designed to strengthen the broker instead of replacing them.'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context' }, body: {
          pt: 'Imob.IA é uma plataforma B2B SaaS para imobiliárias brasileiras de pequeno e médio porte que ainda operam sem CRM estruturado. Essas empresas normalmente gerenciam leads por WhatsApp pessoal e planilhas. O produto oferece um assistente de IA que responde sobre os imóveis da imobiliária, qualifica leads 24h e agenda visitas, além de um painel de gestão para o dono e para os corretores.',
          en: 'Imob.IA is a B2B SaaS platform for small and mid-sized Brazilian real-estate agencies still operating without a structured CRM. These companies typically manage leads through personal WhatsApp accounts and spreadsheets. The product offers an AI assistant that answers questions about the agency\'s properties, qualifies leads around the clock and schedules visits, together with a management panel for the owner and for the brokers.' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role' }, body: {
          pt: 'Criei o produto do zero: enquadramento do problema, definição do perfil de cliente ideal, estratégia de produto, estrutura de planos e preço, arquitetura de informação, UX/UI para os dois perfis de usuário, o site comercial e os protótipos funcionais construídos em código com apoio de IA. Decisões sobre arquitetura de IA, origem dos dados e custo de operação fizeram parte do trabalho de design.',
          en: 'I created the product from scratch: problem framing, definition of the ideal customer profile, product strategy, plan and pricing structure, information architecture, UX/UI for both user profiles, the commercial site, and functional prototypes built in code with AI assistance. Decisions about AI architecture, data sourcing and operating cost were part of the design work.' } },
        { key: 'problem', label: { pt: 'Problema', en: 'Problem' }, body: {
          pt: 'Leads qualificados chegam fora do horário comercial e se perdem antes que alguém responda. Agendar visitas é manual e depende de disponibilidades que ninguém consolidou. Donos não têm visibilidade do próprio funil. CRMs existentes são feitos para operações maiores: pesados, caros e lentos demais para uma imobiliária com poucos corretores e sem time de TI.',
          en: 'Qualified leads arrive outside business hours and are lost before anyone answers. Scheduling visits is manual and depends on individual availability nobody has consolidated. Owners have no visibility into their own funnel. Existing CRMs are built for larger operations: too heavy, too expensive and too slow to implement for an agency with a handful of brokers and no IT team.' } },
        { key: 'discovery', label: { pt: 'Descoberta', en: 'Discovery' }, body: {
          pt: 'Em vez de começar pela interface, comecei pelo que poderia matar o produto. Conduzi um pre-mortem estruturado nos eixos técnico, legal, de mercado, de produto e de negócio, e usei as conclusões para reformular o conceito antes de qualquer decisão de design. Dois achados mudaram o produto: o plano original de coletar dados de imóveis por scraping de portais era tecnicamente frágil e contrário aos termos de uso desses portais, e o perfil de cliente era amplo demais para ser bem atendido.',
          en: 'Instead of starting from the interface, I started from what could kill the product. I ran a structured pre-mortem across technical, legal, market, product and business risk, and used its conclusions to reshape the concept before any design decision. Two findings changed the product: the original plan to collect property data by scraping portals was both technically fragile and contrary to those portals\' terms of use, and the customer profile was too broad to be served well.' } },
        { key: 'constraints', label: { pt: 'Restrições', en: 'Constraints' }, body: {
          pt: 'Dados de leads são dados pessoais, então a conformidade com a LGPD precisava moldar a arquitetura em vez de ser adicionada depois. Dados de imóveis tinham que vir de fontes que a imobiliária tem direito de usar. O custo de tokens precisava permanecer uma fração controlada da receita do plano para o negócio sobreviver em escala. O cliente não tem time técnico, então o onboarding precisava ser self-service e curto. E corretores trabalham por comissão, o que torna impossível adotar qualquer sistema que pareça interceptar seus leads.',
          en: 'Lead data is personal data, so LGPD compliance had to shape the architecture rather than be added later. Property data had to come from sources the agency is entitled to use. Token cost had to remain a controlled fraction of plan revenue for the business to survive at volume. The customer has no technical team, so onboarding had to be self-service and short. And brokers work on commission, which makes any system that appears to intercept their leads impossible to adopt.' } },
        { key: 'decisions', label: { pt: 'Decisões-chave', en: 'Key decisions' }, list: {
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
        { key: 'solution', label: { pt: 'Solução', en: 'Solution' }, body: {
          pt: 'O gestor trabalha com dashboard, histórico de conversas, agenda compartilhada, base de imóveis, time e um assistente de criação de anúncios. O corretor recebe uma versão reduzida focada no seu dia. O onboarding importa a base de imóveis por CSV ou XML em menos de trinta minutos. O agendamento sincroniza com Google Calendar e Outlook, para que a imobiliária não precise de uma segunda ferramenta. O assistente de anúncios gera o texto da campanha e um link de rastreamento que carrega o identificador do corretor, preservando a atribuição do anúncio até o lead. Um site comercial apresenta os planos e conclui a compra.',
          en: 'The manager works with a dashboard, conversation history, a shared agenda, the property base, the team and an AI-assisted advertising wizard. The broker receives a reduced version focused on their own day. Onboarding imports the property base by CSV or XML in under thirty minutes. Scheduling synchronises with Google Calendar and Outlook so the agency does not need a second tool. The advertising wizard produces campaign copy and a tracking link carrying the broker\'s identifier, so attribution survives from the advertisement to the lead. A commercial site presents the plans and completes the purchase.' } },
        { key: 'validation', label: { pt: 'Validação', en: 'Validation' }, body: {
          pt: 'O pre-mortem foi usado como instrumento de design: riscos foram convertidos em requisitos antes da implementação. Os dois perfis foram construídos como protótipos funcionais em código, e não como telas estáticas, para que os fluxos pudessem ser operados e julgados em uso. O produto ainda não foi validado com imobiliárias reais; essa validação está planejada e não é reivindicada aqui.',
          en: 'The pre-mortem was used as a design instrument: risks were converted into requirements before implementation. Both profiles were built as functional prototypes in code rather than static screens, so the flows could be operated and judged in use. The product has not yet been validated with real agencies; that validation is planned and is not claimed here.' } },
        { key: 'outcome', label: { pt: 'Resultado', en: 'Outcome' }, body: {
          pt: 'O produto está em desenvolvimento ativo e ainda não tem resultados com clientes. Nenhuma métrica de performance ou comercial deve ser atribuída a ele. O que existe e pode ser mostrado: um perfil de cliente definido, uma arquitetura de produto moldada por restrições legais e de custo, protótipos funcionais dos dois perfis de usuário e uma estrutura comercial completa com planos e checkout.',
          en: 'The product is in active development and has no customer results yet. No performance or commercial metrics should be attributed to it. What exists and can be shown: a defined customer profile, a product architecture shaped by legal and cost constraints, functional prototypes of both user profiles, and a complete commercial structure with plans and checkout.' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates' }, body: {
          pt: 'A criação de um produto ponta a ponta: enquadrar o problema, escolher o cliente, definir a estratégia, desenhar a experiência para papéis distintos e construir protótipos funcionais. Demonstra também uma abordagem específica para produtos de IA, em que confiabilidade, conformidade legal e custo de operação são tratados como material de design — não como detalhes de engenharia descobertos depois.',
          en: 'Creating a product end to end: framing the problem, choosing the customer, defining the strategy, designing the experience for distinct roles and building functional prototypes. It also demonstrates a specific approach to AI products, in which reliability, legal compliance and operating cost are treated as design material rather than engineering details discovered later.' } }
      ],
      takeaway: {
        pt: 'Uma funcionalidade de IA conquista adoção quando protege o que seus usuários já valorizam. Desenhar o assistente para fortalecer a relação do corretor com o cliente, em vez de interceptá-la, foi uma decisão de produto — não uma gentileza.',
        en: 'An AI feature earns adoption when it protects what its users already value. Designing the assistant to strengthen the broker\'s relationship with the client, instead of intercepting it, was a product decision — not a courtesy.'
      },
      evidenceTodo: {
        pt: 'A adicionar: telas das experiências de gestor e corretor, walkthrough do protótipo, o artefato do pre-mortem, o fluxo do assistente de anúncios, o fluxo de importação no onboarding, sessões de validação com imobiliárias reais e resultados observáveis quando o produto chegar aos clientes.',
        en: 'To add: manager and broker screens, prototype walkthrough, the pre-mortem artifact, the advertising wizard flow, the onboarding import flow, validation sessions with real agencies, and observable results once the product reaches customers.'
      },
      media: {
        cover: '__assets/cases/imobia/cover.jpg',
        shots: [
          { src: '__assets/cases/imobia/01.jpg', caption: { pt: 'Placeholder — dashboard do gestor', en: 'Placeholder — manager dashboard' } },
          { src: '__assets/cases/imobia/02.jpg', caption: { pt: 'Placeholder — visão do corretor', en: 'Placeholder — broker view' } },
          { src: '__assets/cases/imobia/03.jpg', caption: { pt: 'Placeholder — assistente de anúncios', en: 'Placeholder — advertising wizard' } },
          { src: '__assets/cases/imobia/04.jpg', caption: { pt: 'Placeholder — site comercial e planos', en: 'Placeholder — commercial site and plans' } }
        ]
      },
      links: [
        { label: { pt: 'Protótipo funcional', en: 'Functional prototype' }, url: '__https://', type: 'prototype' },
        { label: { pt: 'Site comercial', en: 'Commercial site' }, url: '__https://', type: 'site' }
      ],
      aiCard: {
        thumb: '__assets/cases/imobia/cover.jpg',
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
    }
  ],

  /* ------------------------------------------------- CASES EM CONSTRUÇÃO */
  upcoming: [
    {
      id: 'mercs',
      name: 'Mercs',
      accent: '#FFB35C',
      oneLiner: {
        pt: 'Um agente de vendas com IA que comunica e persuade enquanto sistemas determinísticos mantêm o controle sobre preços, descontos, fatos do produto, compatibilidade e margem.',
        en: 'An AI sales agent that communicates and persuades while deterministic systems retain control over prices, discounts, product facts, compatibility and margin.'
      },
      focus: { pt: 'AI Product Design · UX conversacional · Regras comerciais seguras', en: 'AI Product Design · Conversational UX · Safe commercial rules' }
    },
    {
      id: 'mercs-mkt',
      name: 'Mercs MKT',
      accent: '#FF8C9A',
      oneLiner: {
        pt: 'Uma operação de marketing desenhada como produto multi-agente com humano no circuito: responsabilidades dos agentes, fluxos de planejamento e produção, aprovações e conhecimento de marca.',
        en: 'A marketing operation designed as a human-in-the-loop multi-agent product: agent responsibilities, planning and production workflows, approvals and brand knowledge.'
      },
      focus: { pt: 'Workflows multi-agente · Aprovações · Prototipagem funcional', en: 'Multi-agent workflows · Approvals · Functional prototyping' }
    },
    {
      id: 'portfolio-ai',
      name: { pt: 'Portfólio com IA', en: 'Portfolio AI' },
      accent: '#7FE0D6',
      oneLiner: {
        pt: 'Transformar um portfólio estático em uma experiência conversacional multilíngue capaz de explicar o trabalho do seu criador por voz e por texto.',
        en: 'Turning a static portfolio into a multilingual conversational experience that can explain its creator\'s work by voice and by chat.'
      },
      focus: { pt: 'Conhecimento estruturado · Comportamento multilíngue · Identidade da IA', en: 'Structured knowledge · Multilingual behaviour · AI identity' },
      isThisSite: true
    }
  ],

  /* ------------------------------------------------------------- CONTEXTO */
  context: [
    { k: { pt: 'Base', en: 'Based in' },        v: { pt: 'Curitiba, Brasil', en: 'Curitiba, Brazil' } },
    { k: { pt: 'Disponibilidade', en: 'Availability' }, v: { pt: 'Remoto ou presencial', en: 'Remote or on-site' } },
    { k: { pt: 'Idiomas', en: 'Languages' },    v: { pt: 'Português · Inglês profissional · Japonês básico', en: 'Portuguese · Professional English · Basic Japanese' } },
    { k: { pt: 'Japão', en: 'Japan' },          v: { pt: 'Vivi no Japão dos 9 aos 18 anos', en: 'Lived in Japan from age 9 to 18' } },
    { k: { pt: 'Experiência', en: 'Experience' }, v: { pt: '16 anos em produtos digitais', en: '16 years in digital products' } }
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
