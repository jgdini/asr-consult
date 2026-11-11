// Páginas que cobrem as frentes que o concorrente (EthosX) anuncia: IA, BPO, alocação e suporte sob demanda.
// Importado por conteudo.mjs.
import { lista } from './conteudo-util.mjs';

export const novas = [
// ───────────────────────── IA
{
  slug: 'consultoria-ia-protheus', menu: 'Consultoria de IA', servico: 'Consultoria de inteligência artificial para empresas com TOTVS Protheus',
  titulo: 'Consultoria de IA para empresas com TOTVS Protheus | ASR Consult',
  descricao: 'Consultoria de inteligência artificial para quem usa TOTVS Protheus: diagnóstico, automação de processos, análise de dados e IA generativa aplicada ao ERP.',
  olho: 'Consultoria de IA',
  h1: 'Inteligência artificial usando <em>os dados que já estão no seu Protheus.</em>',
  apoio: 'Diagnóstico de onde a IA economiza tempo na sua operação, automação de processos, análise de dados e IA generativa ligada ao ERP.',
  fatos: [['Ponto de partida', 'Diagnóstico da operação'], ['Fonte dos dados', 'TOTVS Protheus'], ['Frentes', 'Automação, análise e IA generativa'], ['Entrega', 'Projeto de horas fechadas']],
  blocos: [
    { tipo: 'texto', olho: 'Onde a IA ajuda', titulo: 'IA que trabalha em cima do ERP.',
      html: `<p>Uma empresa que usa o Protheus há anos tem um histórico enorme de pedidos, notas, estoque, chamados e lançamentos. A IA faz sentido quando usa esse histórico para tirar trabalho repetitivo das pessoas ou para mostrar algo que a planilha não mostra.</p>
<p>A consultoria da ASR começa pelo diagnóstico: quais tarefas consomem mais horas, quais decisões dependem de dados que já existem no ERP e quais processos podem ser automatizados com segurança. Só depois entra a escolha da ferramenta.</p>
${lista(['Diagnóstico das tarefas que mais consomem tempo', 'Automação de processos repetitivos ligados ao Protheus', 'Análise avançada dos dados do ERP, com painéis no Power BI', 'IA generativa para consultar informações e redigir documentos', 'Regras de acesso para a IA ver só o que cada área pode ver'])}`,
      lado: `<h3>Por que com quem conhece o Protheus</h3><p>A IA só acerta se os dados estiverem certos. Cadastros sujos e integrações quebradas viram resposta errada. A ASR conhece o ERP por dentro e arruma a base antes.</p><a class="btn btn--ciano" href="#contato">Pedir um diagnóstico</a>` },
    { tipo: 'cards', escuro: true, olho: 'Exemplos', titulo: 'Aplicações comuns em empresas que usam Protheus.', intro: 'Pontos de partida que costumam aparecer no diagnóstico.',
      itens: [
        ['Triagem de chamados', 'Classificar e encaminhar chamados de suporte pela descrição do problema.'],
        ['Leitura de documentos', 'Extrair dados de notas, boletos e pedidos para conferência no ERP.'],
        ['Previsão de demanda', 'Usar o histórico de vendas e estoque para apoiar compras e produção.'],
        ['Consulta em linguagem natural', 'Perguntar sobre vendas, estoque ou financeiro sem montar relatório.'],
        ['Conferência fiscal', 'Apontar notas com tributação fora do padrão, útil na transição da reforma tributária.'],
        ['Rascunho de documentos', 'Gerar propostas, respostas e procedimentos a partir de modelos da empresa.'],
      ] },
    { tipo: 'passos', olho: 'Como funciona', titulo: 'Do diagnóstico ao piloto.',
      itens: [
        ['Diagnóstico', 'Entrevistas com as áreas e leitura dos dados disponíveis no Protheus.'],
        ['Priorização', 'Lista de casos de uso com esforço, ganho esperado e risco.'],
        ['Preparação dos dados', 'Ajuste de cadastros e integrações que a IA vai usar.'],
        ['Piloto', 'Um caso de uso em produção controlada, medido antes e depois.'],
        ['Expansão', 'Os casos que deram resultado são levados para outras áreas.'],
      ] },
    { tipo: 'faq', itens: [
      ['Dá para usar inteligência artificial com o Protheus?', 'Sim. A IA pode ler os dados do Protheus por integrações e consultas, automatizar tarefas ligadas ao ERP e apoiar decisões com o histórico da empresa.'],
      ['Os dados da empresa ficam seguros?', 'O projeto define quais dados a IA pode acessar e quem pode consultar cada informação, com as mesmas regras de perfil usadas no ERP.'],
      ['Por onde começar?', 'Pelo diagnóstico. Ele mostra onde a IA traz ganho na sua operação e qual caso de uso vale fazer primeiro.'],
    ] },
  ],
  relacionados: ['power-bi-protheus', 'integracao-protheus', 'desenvolvimento-advpl'],
},

// ───────────────────────── BPO
{
  slug: 'bpo-protheus', menu: 'BPO', servico: 'BPO: terceirização de processos de negócio no TOTVS Protheus',
  titulo: 'BPO no Protheus: terceirização de processos financeiros, fiscais e de RH | ASR Consult',
  descricao: 'BPO (Business Process Outsourcing) para empresas que usam TOTVS Protheus: a ASR opera processos de rotina no próprio ERP, com indicadores e relatório mensal.',
  olho: 'BPO',
  h1: 'BPO: a ASR opera a rotina <em>dentro do seu Protheus.</em>',
  apoio: 'Terceirização de rotinas de negócio executada por quem conhece o ERP, para a sua equipe parar de gastar o mês com lançamento e conferência.',
  fatos: [['Modelo', 'Business Process Outsourcing'], ['Onde', 'No Protheus da sua empresa'], ['Acompanhamento', 'Indicadores mensais'], ['Equipe', 'Consultores sêniores']],
  blocos: [
    { tipo: 'texto', olho: 'O que é BPO', titulo: 'Processos de rotina com quem conhece o sistema.',
      html: `<p>BPO (Business Process Outsourcing) é a terceirização de um processo de negócio inteiro: a empresa define o que precisa ser entregue, e o parceiro executa a rotina com equipe, prazo e indicadores próprios.</p>
<p>No BPO da ASR, o trabalho é feito no Protheus da sua empresa. A informação continua no seu ERP, a operação segue os seus parâmetros e o resultado aparece nos seus relatórios. Quem executa conhece o sistema, o que reduz erro de lançamento e retrabalho no fechamento.</p>
${lista(['Processos executados no próprio Protheus da empresa', 'Escopo, prazos e indicadores combinados antes de começar', 'Acompanhamento periódico com o que foi feito e o que precisa de atenção', 'Redução de custos com equipe interna e retrabalho', 'Equipe interna com tempo para analisar os números em vez de lançá-los'])}`,
      lado: `<h3>Como na sustentação</h3><p>O BPO segue a mesma lógica do suporte da ASR: prazos combinados, indicadores e acompanhamento para a gestão.</p><a class="btn btn--ciano" href="#contato">Avaliar um processo</a>` },
    { tipo: 'cards', escuro: true, olho: 'Processos', titulo: 'Rotinas que costumam ir para o BPO.', intro: 'A lista final sai do diagnóstico de cada empresa.',
      itens: [
        ['Rotinas financeiras', 'Contas a pagar e receber, conciliação bancária e cobrança no Protheus.'],
        ['Rotinas fiscais', 'Escrituração, conferência de notas e apoio às obrigações acessórias.'],
        ['Rotinas de RH', 'Apoio à folha, ao ponto e aos eventos do eSocial.'],
        ['Cadastros', 'Manutenção de cadastros de produtos, clientes e fornecedores.'],
        ['Fechamento', 'Conferências e lançamentos de fechamento do mês.'],
        ['Relatórios gerenciais', 'Montagem e envio dos relatórios para a diretoria.'],
      ] },
    { tipo: 'faq', itens: [
      ['O que é BPO?', 'BPO (Business Process Outsourcing) é a terceirização de processos de negócio. A empresa contrata a execução de uma rotina, como contas a pagar ou cadastros, com prazos e indicadores definidos.'],
      ['Os dados saem do meu ERP?', 'Não. No BPO da ASR, o trabalho é feito no Protheus da sua empresa, com acesso controlado por perfil.'],
      ['Qual a diferença entre BPO e suporte?', 'O suporte resolve problemas no sistema. O BPO executa a rotina do dia a dia no lugar da equipe interna.'],
    ] },
  ],
  relacionados: ['suporte-protheus', 'alocacao-profissionais-totvs', 'consultoria-totvs-protheus'],
},

// ───────────────────────── ALOCAÇÃO
{
  slug: 'alocacao-profissionais-totvs', menu: 'Alocação de profissionais', servico: 'Alocação de consultores e desenvolvedores TOTVS Protheus',
  titulo: 'Alocação de consultores e desenvolvedores TOTVS Protheus | ASR Consult',
  descricao: 'Alocação de consultores funcionais e desenvolvedores ADVPL TOTVS Protheus para o seu time ou projeto: profissionais sêniores, contratação flexível e suporte da ASR.',
  olho: 'Alocação de profissionais',
  h1: 'Consultores Protheus <em>dentro do seu time.</em>',
  apoio: 'Consultores funcionais e desenvolvedores ADVPL sêniores alocados no seu projeto ou na sua equipe de TI, pelo tempo que a demanda pedir.',
  fatos: [['Perfis', 'Funcionais e ADVPL'], ['Senioridade', 'Equipe 100% sênior'], ['Contratação', 'Flexível'], ['Retaguarda', '+40 consultores da ASR']],
  blocos: [
    { tipo: 'texto', olho: 'Quando faz sentido', titulo: 'Gente que já conhece o Protheus, sem processo seletivo.',
      html: `<p>Contratar um consultor Protheus experiente leva tempo, e muitas demandas têm prazo: um projeto de implantação, a adequação à reforma tributária, a cobertura de férias ou uma fase de muito volume. A alocação resolve isso com um profissional da ASR trabalhando no seu time.</p>
<p>O profissional alocado segue a rotina da sua empresa e tem por trás a equipe da ASR: se surgir uma dúvida em outro módulo, ele consulta um especialista da casa.</p>
${lista(['Consultores funcionais por módulo: fiscal, financeiro, RH, estoque, compras', 'Desenvolvedores ADVPL', 'Profissionais sêniores, com experiência em projetos TOTVS', 'Contratação flexível, por período ou por projeto'])}`,
      lado: `<h3>Retaguarda da ASR</h3><p>Quem está alocado no seu time conta com os mais de 40 consultores sêniores da ASR para tirar dúvidas de outros módulos.</p><a class="btn btn--ciano" href="#contato">Pedir um perfil</a>` },
    { tipo: 'passos', olho: 'Como funciona', titulo: 'Do perfil ao profissional trabalhando.',
      itens: [
        ['Perfil', 'Definição do módulo, da senioridade, do período e do formato de trabalho.'],
        ['Indicação', 'A ASR apresenta o profissional com a experiência pedida.'],
        ['Início', 'Integração ao time, acessos e alinhamento das prioridades.'],
        ['Acompanhamento', 'A ASR acompanha a alocação e ajusta o que for preciso.'],
      ] },
    { tipo: 'faq', itens: [
      ['Que perfis a ASR aloca?', 'Consultores funcionais dos módulos do Protheus e do RM e desenvolvedores ADVPL, todos sêniores.'],
      ['Qual o prazo mínimo de alocação?', 'Depende do perfil e do projeto. O período é combinado na proposta.'],
    ] },
  ],
  relacionados: ['desenvolvimento-advpl', 'consultoria-totvs-protheus', 'bpo-protheus'],
},

// ───────────────────────── SOB DEMANDA
{
  slug: 'suporte-sob-demanda', menu: 'Suporte sob demanda', servico: 'Suporte TOTVS Protheus sob demanda',
  titulo: 'Suporte Protheus sob demanda, sem contrato longo | ASR Consult',
  descricao: 'Suporte técnico TOTVS Protheus sob demanda: consultores sêniores quando você precisar, sem contrato de longo prazo. Resposta rápida em todos os módulos.',
  olho: 'Suporte sob demanda',
  h1: 'Suporte Protheus quando você precisar, <em>sem contrato longo.</em>',
  apoio: 'Para empresas que têm equipe interna e só precisam de um especialista de vez em quando: um erro que ninguém resolve, uma configuração nova, uma dúvida de legislação.',
  fatos: [['Contrato', 'Sem prazo longo'], ['Equipe', 'Consultores sêniores'], ['Módulos', 'Todos os módulos TOTVS'], ['Telefone', '(11) 2659-5360']],
  blocos: [
    { tipo: 'texto', olho: 'Para quem é', titulo: 'Para quando o problema foge do dia a dia da sua equipe.',
      html: `<p>Nem toda empresa precisa de sustentação contínua. Muitas têm analistas internos que cuidam do dia a dia e só precisam de ajuda quando aparece algo fora do comum: uma rejeição de nota que ninguém entende, um cálculo de folha que não fecha, uma rotina que parou depois de um pacote.</p>
<p>No suporte sob demanda, a empresa chama a ASR quando precisa e paga pelas horas usadas. O atendimento é feito pelos mesmos consultores sêniores que atendem os contratos de sustentação.</p>
${lista(['Sem contrato de longo prazo', 'Consultores sêniores em todos os módulos TOTVS', 'Resposta rápida para problemas que travam a operação', 'Horas cobradas pelo que foi usado'])}`,
      lado: `<h3>Quando migrar para a sustentação</h3><p>Se os chamados ficam frequentes, a <a href="suporte-protheus.html">sustentação com SLA em contrato</a> ou o banco de horas (AMS) saem mais baratos e trazem o Book de Atendimento.</p><a class="btn btn--ciano" href="#contato">Abrir um atendimento</a>` },
    { tipo: 'faq', itens: [
      ['Preciso de contrato para usar o suporte sob demanda?', 'Não há contrato de longo prazo. A empresa aciona a ASR quando precisa e paga pelas horas usadas.'],
      ['Qual a diferença para a sustentação?', 'A sustentação tem SLA mínimo de 85% em contrato e relatório mensal. O sob demanda atende chamados avulsos, sem compromisso mensal.'],
      ['Como pedir atendimento?', 'Pelo telefone de suporte (11) 2659-5360, pelo WhatsApp ou pelo formulário desta página.'],
    ] },
  ],
  relacionados: ['suporte-protheus', 'projeto-horas-fechadas', 'alocacao-profissionais-totvs'],
},
// ───────────────────────── FLUIG
{
  slug: 'consultoria-fluig-totvs', menu: 'Fluig', servico: 'Implantação e consultoria TOTVS Fluig',
  titulo: 'Fluig TOTVS: para que serve, como funciona e implantação | ASR Consult',
  descricao: 'O que é o TOTVS Fluig, para que serve e como funciona: processos (BPM), aprovações, formulários e documentos (GED) integrados ao Protheus. Implantação e treinamento com canal homologado.',
  olho: 'TOTVS Fluig',
  h1: 'Fluig: aprovações e documentos <em>fora do e-mail e da planilha.</em>',
  apoio: 'Implantação do TOTVS Fluig para digitalizar processos, aprovações e documentos, integrados ao Protheus e entregues por um canal homologado TOTVS.',
  fatos: [['Plataforma', 'TOTVS Fluig'], ['Processos', 'BPM e workflows'], ['Documentos', 'GED'], ['Integração', 'TOTVS Protheus']],
  blocos: [
    { tipo: 'texto', olho: 'Para que serve', titulo: 'O que é o Fluig e para que ele serve.',
      html: `<p>O TOTVS Fluig é a plataforma da TOTVS para processos, documentos e colaboração. Ele tira do e-mail e da planilha as rotinas que dependem de várias pessoas: uma solicitação de compra que precisa de três aprovações, a admissão de um funcionário que passa pelo RH, pelo gestor e pela TI, um contrato que circula até ser assinado.</p>
<p>No Fluig, cada uma dessas rotinas vira um fluxo com etapas, responsáveis, prazos e histórico. O gestor vê onde a solicitação está parada, o auditor encontra quem aprovou e quando, e os documentos ficam guardados num lugar só.</p>
${lista(['<b>Processos (BPM):</b> fluxos de aprovação com etapas, prazos e alertas', '<b>Formulários digitais</b> no lugar de papel e planilha', '<b>Gestão de documentos (GED):</b> versões, permissões e busca', '<b>Portal do colaborador</b> e comunicação interna', '<b>Integração com o Protheus:</b> o que é aprovado no Fluig entra no ERP'])}`,
      lado: `<h3>Quem já usa Protheus</h3><p>O Fluig conversa com o Protheus: um pedido de compra aprovado no Fluig vira pedido no ERP, sem digitar de novo.</p><a class="btn btn--ciano" href="#contato">Falar sobre Fluig</a>` },
    { tipo: 'cards', escuro: true, olho: 'Exemplos', titulo: 'Processos que costumam ir para o Fluig.', intro: 'Rotinas com várias aprovações e muito vai e volta de e-mail.',
      itens: [
        ['Compras', 'Solicitação, cotação e aprovação por alçada antes do pedido no Protheus.'],
        ['RH', 'Admissão, férias, desligamento e solicitações do colaborador.'],
        ['Financeiro', 'Aprovação de pagamentos, reembolsos e adiantamentos.'],
        ['Contratos', 'Elaboração, revisão, aprovação e guarda de contratos.'],
        ['Qualidade', 'Não conformidades, auditorias e documentos controlados.'],
        ['TI', 'Pedidos de acesso, equipamentos e mudanças.'],
      ] },
    { tipo: 'passos', olho: 'Como funciona a implantação', titulo: 'Do processo desenhado ao fluxo no ar.',
      itens: [
        ['Mapeamento', 'Desenho do processo atual com as áreas: etapas, aprovadores, prazos e exceções.'],
        ['Modelagem', 'O processo vira fluxo no Fluig, com formulários e regras de alçada.'],
        ['Integração', 'Ligação com o Protheus para o resultado entrar no ERP.'],
        ['Testes', 'Usuários-chave rodam o fluxo com casos reais.'],
        ['Treinamento e virada', 'Capacitação de quem solicita, aprova e administra, e entrada em produção.'],
        ['Sustentação', 'Ajustes, novos fluxos e suporte depois que o Fluig está em uso.'],
      ] },
    { tipo: 'faq', itens: [
      ['Para que serve o Fluig?', 'O TOTVS Fluig serve para digitalizar processos que dependem de várias pessoas, como aprovações de compras, admissões e contratos, e para guardar e controlar documentos num lugar só.'],
      ['Como funciona o Fluig?', 'Cada processo vira um fluxo com etapas, responsáveis e prazos. A pessoa abre uma solicitação num formulário digital, ela passa pelas aprovações definidas e o histórico fica registrado. Os documentos ficam na gestão de documentos (GED) da plataforma.'],
      ['O Fluig integra com o Protheus?', 'Sim. O que é aprovado no Fluig pode gerar registros no Protheus, como pedidos de compra, sem digitação dupla.'],
      ['A ASR faz treinamento de Fluig?', 'Sim. O treinamento faz parte da implantação e cobre quem solicita, quem aprova e quem administra a plataforma.'],
      ['Não consigo acessar o Fluig da minha empresa. A ASR ajuda?', 'O acesso ao Fluig é liberado pela TI da sua empresa. Se a sua empresa é cliente da ASR, o suporte pode ajudar a TI a resolver.'],
    ] },
  ],
  relacionados: ['integracao-protheus', 'consultoria-ia-protheus', 'suporte-protheus'],
},
];
