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
    role: { pt: 'Product Designer Sênior', en: 'Senior Product Designer' },
    years: 16,
    base: { pt: 'Curitiba, Brasil', en: 'Curitiba, Brazil' },
    availability: {
      pt: 'Aberto a oportunidades remotas ou presenciais',
      en: 'Open to remote or on-site opportunities'
    },
    headline: {
      pt: ['Transformo', 'ideias', 'em produtos', 'e sistemas'],
      en: ['I turn', 'ideas', 'into products', 'and systems']
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
      email: 'nunoakira@gmail.com',
      linkedin: 'https://linkedin.com/in/nunosugano-ux',
      github: 'https://github.com/nunoakira-bit',
      site: 'https://www.nunoakira.com.br',
      resume: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/resumes/324aef14-9878-45ca-ba96-a75e9e9a2462/Nuno_Akira_Sugano_CV_PT_2026.pdf'
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
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/enderecamento-escolha-de-localidade.png',
        shots: [
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/enderecamento-escolha-de-localidade.png', caption: { pt: 'Endereçamento — escolha da localidade, com capacidade de cada galpão à vista', en: 'Addressing — choosing the location, with each warehouse\'s capacity in view' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/criar-tipo-unidade-acondicionamento.png', caption: { pt: 'Criação de tipo de unidade de acondicionamento, com as medidas pré-visualizadas', en: 'Creating a storage unit type, with dimensions previewed as they are typed' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/ciclo-de-vida-do-documento.png', caption: { pt: 'Estudo do ciclo de vida do documento arquivístico, anterior a qualquer interface', en: 'Study of the archival document lifecycle, drawn before any interface' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/06df324d-5e2d-4dfd-b258-90fad0552c12/processo-de-enderecamento.png', caption: { pt: 'Processo de endereçamento em cinco passos até o endereço único da unidade', en: 'The five-step addressing process, ending in the unit\'s unique address' } }
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
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/design-system-index-mcp.png',
        shots: [
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/design-system-index-mcp.png', caption: { pt: 'Índice do design system compartilhado, escrito também para ser lido por um agente de IA', en: 'Index of the shared design system, written to be read by an AI agent as well' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/token-system-cores-css.png', caption: { pt: 'Sistema de tokens de cor, com paletas por produto e exportação para variáveis CSS', en: 'Colour token system, with per-product palettes exported as CSS variables' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/patterns-reutilizaveis.png', caption: { pt: 'Patterns reutilizáveis: tabelas, cadastros, estados vazios, modais e cabeçalhos', en: 'Reusable patterns: tables, forms, empty states, modals and headers' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/tokens-tipografia-e-radius.png', caption: { pt: 'Tokens de tipografia e raio, cada um declarando o uso a que se destina', en: 'Typography and radius tokens, each declaring what it is for' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/6528389f-ab02-44ca-8917-19651f1feb74/figma-estrutura-e-pesquisa-personas.png', caption: { pt: 'Pesquisa de sete papéis em prefeituras brasileiras, com metodologia e fontes declaradas', en: 'Research into seven roles in Brazilian city halls, with stated method and sources' } }
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
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/entrada-escolha-de-papel.png',
        shots: [
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/entrada-escolha-de-papel.png', caption: { pt: 'Painel do corretor: o que é meu e o que preciso fazer agora', en: 'Agent dashboard: what is mine and what I need to do now' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/gestor-dashboard.png', caption: { pt: 'Painel do gestor: a mesma operação lida de outro ângulo', en: 'Manager dashboard: the same operation read from another angle' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/corretor-meus-atendimentos.png', caption: { pt: 'A IA entrega o lead qualificado ao corretor com o contexto já pronto', en: 'The AI hands a qualified lead to the agent with the context already prepared' } },
        { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/42032f99-d0c5-4e2f-80db-8847e8788add/gestor-equipe.png', caption: { pt: 'Gestão de equipe, visível apenas para o gestor (números de demonstração)', en: 'Team management, visible only to the manager (demonstration figures)' } }
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
      family: { pt: 'Produto próprio', en: 'Independent product' },
      status: 'building',
      accent: '#8CE05A',
      positioning: {
        pt: ['AI Product Design', 'B2B SaaS', 'UX conversacional', 'Regras comerciais seguras'],
        en: ['AI Product Design', 'B2B SaaS', 'Conversational UX', 'Safe commercial rules']
      },
      question: {
        pt: 'Como deixar uma IA negociar uma venda real — com preços, descontos e compromissos — sem nunca deixá-la decidir quais são esses números?',
        en: 'How do you let an AI negotiate a real sale — with prices, discounts and commitments attached — without ever letting it decide what those numbers are?'
      },
      oneLiner: {
        pt: 'A IA argumenta. O sistema decide.',
        en: 'The AI argues. The system decides.'
      },
      story: [
        { key: 'context', label: { pt: 'Contexto', en: 'Context' }, body: {
          pt: 'Mercs é um SaaS B2B para pequenos e médios negócios brasileiros que já vendem por WhatsApp. Um agente de IA recebe as conversas, responde sobre os produtos que o lojista cadastrou, negocia dentro da margem que o dono definiu, fecha a venda e devolve a conversa para o humano. Esses comerciantes não perdem venda por falta de canal: perdem porque o lead chega a qualquer hora e a qualidade da negociação depende de quem estiver livre para responder.',
          en: 'Mercs is a B2B SaaS platform for small and mid-sized Brazilian businesses already selling through WhatsApp. An AI agent receives inbound conversations, answers questions about the products the merchant registered, negotiates within the margin the owner defined, closes the sale and hands the conversation back to a human. These merchants do not lose sales for lack of a channel: they lose them because leads arrive at all hours and the quality of a negotiation depends on whoever happens to be free.' } },
        { key: 'problem', label: { pt: 'O problema', en: 'The problem' }, body: {
          pt: 'Uma IA que fala sobre dinheiro é um produto diferente de uma IA que responde perguntas. Uma frase errada sobre prazo de entrega é uma experiência ruim; uma frase errada sobre desconto é um desconto que o lojista terá de honrar. Modelos de linguagem são fluentes, concordantes e — sob pressão de um cliente insistente — negociáveis. São exatamente as propriedades erradas para a parte da conversa que envolve preço e margem. O problema de adoção não era qualidade de interface: era se dava para confiar o comercial ao sistema.',
          en: 'An AI that talks about money is a different product from an AI that answers questions. A wrong sentence about delivery is a poor experience; a wrong sentence about a discount is a discount the merchant has to honour. Language models are fluent, agreeable and — under pressure from a persistent customer — negotiable. Those are precisely the wrong properties for the part of a conversation involving price and margin. The adoption problem was not interface quality: it was whether the commercial conversation could be trusted to the system at all.' } },
        { key: 'role', label: { pt: 'Meu papel', en: 'My role' }, body: {
          pt: 'Criei o produto do zero, sozinho: definição do problema, perfil de cliente ideal, estratégia de produto e comercial, arquitetura de informação, UX/UI do painel, design conversacional do agente — identidade, tom, formato de mensagem, comportamento de negociação e fechamento —, as regras comerciais que o sistema aplica, o site e o produto funcionando, construído em código com apoio de IA. Exposição jurídica, obrigações regulatórias e custo de operação foram tratados como material de design, não como detalhes de engenharia a resolver depois.',
          en: 'I created the product from scratch as sole founder: problem framing, ideal customer profile, product and commercial strategy, information architecture, panel UX/UI, conversational design for the agent — identity, tone, message format, negotiation and closing behaviour — the commercial rules the system enforces, the marketing site, and the working product built in code with AI assistance. Legal exposure, regulatory obligations and operating cost were treated as design material rather than engineering details to resolve later.' } },
        { key: 'discovery', label: { pt: 'Começar pelas falhas', en: 'Starting from the failures' }, body: {
          pt: 'Em vez de partir de telas, parti das formas como o agente poderia falhar. Construí dois comerciantes de teste completos — uma loja de hardware com vinte produtos e uma operadora de planos de saúde com seis planos — para exercitar o agente contra catálogos, regras de preço, variantes e perguntas reais, junto de um simulador público que tornava cada conversa observável. O modo como ele falhava moldou a arquitetura muito mais do que qualquer lista de funcionalidades moldaria.',
          en: 'Rather than starting from screens, I started from the ways the agent could fail. I built two complete test merchants — a computer-hardware retailer with a twenty-product catalogue and a health-plan provider with six plans — to exercise the agent against realistic catalogues, price rules, variants and customer questions, alongside a public simulator that made every conversation observable. How it failed shaped the architecture far more than any feature list would have.' } },
        { key: 'decisions', label: { pt: 'A decisão central', en: 'The central decision' }, body: {
          pt: 'O agente nunca escreve um número. Quando o cliente pede desconto, o modelo emite um marcador oculto informando apenas o que foi pedido. O backend calcula a oferta em centavos inteiros, aplica estratégia, faixas de quantidade, teto e piso, e escreve ele mesmo a frase comercial. Um guardrail determinístico depois lê o que o modelo escreveu, procurando percentuais e valores que rompam o teto ou fiquem abaixo do piso. Considerei substituir essa camada por um laço de tool calling em que o modelo pede o preço. Rejeitei: validação que roda depois da geração é uma fronteira, enquanto uma ferramenta que o modelo escolhe chamar é uma sugestão.',
          en: 'The agent never authors a number. When a customer asks for a discount, the model emits a hidden marker stating only what was requested. The backend calculates the offer in integer cents, applies the strategy, quantity bands, ceiling and floor, and writes the commercial sentence itself. A deterministic guardrail then reads what the model wrote, scanning for percentages and values that break the ceiling or fall below the floor. I considered replacing that layer with a tool-calling loop where the model requests a price. I rejected it: validation that runs after generation is a boundary, while a tool the model chooses to call is a suggestion.' } },
        { key: 'silence', label: { pt: 'Silêncio em vez de invenção', en: 'Silence over invention' }, body: {
          pt: 'A recuperação de conhecimento é restrita ao lojista e ao produto ativo, com limiar de similaridade. Quando nada passa do limiar, o prompt carrega um bloco explícito de "sem evidência no material cadastrado", e o agente diz que vai confirmar com a equipe em vez de completar a resposta com conhecimento pré-treinado. Ambiguidade também é estrutural, não instrução: quando a frase do cliente casa com duas variantes e não há nada que as distinga, o sistema não troca de produto, não faz oferta e não fecha — apresenta os candidatos e pergunta.',
          en: 'Retrieval is scoped to the merchant and the active product, with a similarity threshold. When nothing passes it, the prompt carries an explicit "no evidence in the registered material" block, and the agent says it will confirm with the team instead of completing the answer from pre-trained knowledge. Ambiguity is structural rather than instructional: when a customer\'s phrasing matches two variants and contains nothing to distinguish them, the system does not switch product, does not make an offer and does not close — it presents the candidates and asks.' } },
        { key: 'scope', label: { pt: 'Entregar menos em vez de prometer mais', en: 'Shipping less rather than promising more' }, body: {
          pt: 'A versão um sai sem pagamento integrado. Uma única chave suspende o caminho de cobrança: a seção de pagamentos aparece como "em breve" e desabilitada, e quando o agente fecha uma venda ele alerta o dono e envia ao cliente uma mensagem de espera. Nenhuma tela e nenhuma frase promete um link de pagamento que o produto ainda não consegue gerar.',
          en: 'Version one ships without integrated payment. A single flag suspends the charging path: the payments section is labelled as coming soon and disabled, and when the agent closes a sale it alerts the owner and sends the customer a holding message. No screen and no sentence promises a payment link the product cannot yet produce.' } },
        { key: 'validation', label: { pt: 'Validação', en: 'Validation' }, body: {
          pt: 'As regras comerciais vivem num único módulo compartilhado entre o sistema em execução e a suíte de testes, de modo que a regra que decide um preço em produção é a mesma que os testes exercitam — cerca de trinta casos cobrindo os cenários de negociação. Incidentes foram tratados como retorno de design, e produziram uma lição consistente: o sintoma relatado quase nunca é a causa. O produto ainda não foi validado com lojistas reais, e essa validação não é reivindicada aqui.',
          en: 'The commercial rules live in a single module shared by the running system and its test suite, so the rule that decides a price in production is the one the tests exercise — roughly thirty cases covering the required negotiation scenarios. Incidents were treated as design feedback, and produced a consistent lesson: the reported symptom is rarely the cause. The product has not yet been validated with real merchants, and that validation is not claimed here.' } },
        { key: 'demonstrates', label: { pt: 'O que este case demonstra', en: 'What this case demonstrates' }, body: {
          pt: 'O design de um produto de IA em que a confiabilidade é propriedade do sistema, e não esperança sobre o modelo: separar o que a IA pode dizer do que só o código pode decidir, projetar para os modos de falha de um modelo de linguagem num contexto comercial, tratar regulação, privacidade e custo como restrições de design, e escolher entregar um produto menor e honesto em vez de um maior e prometido.',
          en: 'The design of an AI product where reliability is a property of the system rather than a hope about the model: separating what the AI may say from what only code may decide, designing for the failure modes of a language model in a commercial setting, treating regulation, privacy and cost as design constraints, and choosing to ship a smaller honest product instead of a larger promised one.' } }
      ],
      takeaway: {
        pt: 'Confiança em um produto de IA não se constrói fazendo o modelo soar mais seguro. Constrói-se decidindo, de antemão, quais frases o modelo não tem permissão para escrever.',
        en: 'Trust in an AI product is not built by making the model sound more confident. It is built by deciding, in advance, which sentences the model is not allowed to write.'
      },
      evidenceTodo: {
        pt: 'A adicionar: diagrama do caminho da negociação, da mensagem ao guardrail e ao fechamento; fluxo de conexão do WhatsApp; exemplos de conversa com tentativa de desconto bloqueada; fluxo de alerta e transferência; sessões de validação com lojistas reais e custo observado por conversa.',
        en: 'To add: a diagram of the negotiation path from message to guardrail to closing; the WhatsApp connection flow; conversation examples including a blocked discount attempt; the alert and handover flow; validation sessions with real merchants and observed cost per conversation.'
      },
      media: {
        cover: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/landing-demonstracao-ao-vivo.png',
        shots: [
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/cadastro-produto-limite-de-desconto.png', caption: { pt: 'Cadastro de produto: é aqui que mora a autoridade comercial — preço, teto de desconto e piso calculado', en: 'Product registration: where commercial authority lives — price, discount ceiling and calculated floor' } },
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/conversa-whatsapp-planos.png', caption: { pt: 'Conversa real: o agente compara planos e admite não ter um detalhe em vez de preenchê-lo', en: 'A real conversation: the agent compares plans and admits a missing detail instead of filling it in' } },
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/demo-interativa-como-negocia.png', caption: { pt: 'Demonstração ao vivo no site: quem calcula o preço é o sistema, a IA apenas argumenta', en: 'Live demo on the site: the system calculates the price, the AI only argues' } },
          { src: 'https://oupeamarlnmnvezejwpz.supabase.co/storage/v1/object/public/case-media/d8089de7-e259-4304-9a74-3a267f72ebbd/painel-dashboard-do-gestor.png', caption: { pt: 'Painel do lojista, com o interruptor que devolve o atendimento ao humano (números de demonstração)', en: 'Merchant panel, with the switch that returns the conversation to a human (demonstration figures)' } }
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
