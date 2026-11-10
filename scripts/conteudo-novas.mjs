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
        ['Expansão', 'Os casos que deram resultado ganham escala.'],
      ] },
    { tipo: 'faq', itens: [
      ['Dá para usar inteligência artificial com o Protheus?', 'Sim. A IA pode ler os dados do Protheus por integrações e consultas, automatizar tarefas ligadas ao ERP e apoiar decisões com o histórico da empresa.'],
      ['Os dados da empresa ficam seguros?', 'O projeto define quais dados a IA pode acessar e quem pode consultar cada informação, com as mesmas regras de perfil usadas no ERP.'],
      ['Por onde começar?', 'Pelo diagnóstico. Ele mostra onde a IA traz ganho real na sua operação e qual caso de uso vale fazer primeiro.'],
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
  apoio: 'Terceirização de processos de negócio executada por quem conhece o ERP, para a sua equipe cuidar do que é estratégico.',
  fatos: [['Modelo', 'Business Process Outsourcing'], ['Onde', 'No Protheus da sua empresa'], ['Acompanhamento', 'Indicadores mensais'], ['Equipe', 'Consultores sêniores']],
  blocos: [
    { tipo: 'texto', olho: 'O que é BPO', titulo: 'Processos de rotina com quem conhece o sistema.',
      html: `<p>BPO (Business Process Outsourcing) é a terceirização de um processo de negócio inteiro: a empresa define o que precisa ser entregue, e o parceiro executa a rotina com equipe, prazo e indicadores próprios.</p>
<p>No BPO da ASR, o trabalho é feito no Protheus da sua empresa. A informação continua no seu ERP, a operação segue os seus parâmetros e o resultado aparece nos seus relatórios. Quem executa conhece o sistema, o que reduz erro de lançamento e retrabalho no fechamento.</p>
${lista(['Processos executados no próprio Protheus da empresa', 'Escopo, prazos e indicadores combinados antes de começar', 'Acompanhamento periódico com o que foi feito e o que precisa de atenção', 'Redução de custos com equipe interna e retrabalho', 'Foco do time interno no que é estratégico'])}`,
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
    { tipo: 'texto', olho: 'Para quem é', titulo: 'Um especialista Protheus a um telefonema de distância.',
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
];
