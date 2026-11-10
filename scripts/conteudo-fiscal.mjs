// Páginas técnicas da área fiscal, no lugar de posts de blog (a ASR não terá blog).
// Buscas de origem: "tabelas/parâmetros reforma tributária protheus", "configurações mínimas",
// "implantação nfse protheus", "nfse protheus reforma tributária", "implantação reinf protheus".
import { lista } from './conteudo-util.mjs';

export const fiscal = [
// ───────────────────────── CONFIGURADOR DE TRIBUTOS
{
  slug: 'configurador-tributos-protheus', menu: 'Configurador de Tributos', servico: 'Configuração do Configurador de Tributos do Protheus para a reforma tributária',
  titulo: 'Configurador de Tributos do Protheus: tabelas, parâmetros e configurações mínimas da reforma | ASR Consult',
  descricao: 'Como preparar o Configurador de Tributos do Protheus para CBS e IBS: atualização, tabelas de classificação tributária, regras por operação, cadastros e testes. Checklist de configurações mínimas.',
  olho: 'Configurador de Tributos',
  h1: 'Configurador de Tributos do Protheus: <em>o que configurar para CBS e IBS.</em>',
  apoio: 'As configurações mínimas, as tabelas e os cadastros que o Protheus precisa ter em ordem para calcular CBS e IBS certo em cada fase da reforma.',
  fatos: [['Ferramenta', 'Configurador de Tributos'], ['Tributos', 'CBS e IBS'], ['Base legal', 'LC 214/2025'], ['Teste', 'Notas desde 2026']],
  blocos: [
    { tipo: 'texto', olho: 'O que é', titulo: 'Onde o Protheus guarda as regras da reforma.',
      html: `<p>O Configurador de Tributos é a parte do Protheus onde ficam as regras de cálculo dos tributos. Em vez de depender de parâmetros espalhados pelo sistema, cada tributo ganha regras próprias: em quais operações incide, qual a base de cálculo, qual a alíquota e como aparece no documento fiscal.</p>
<p>A TOTVS escolheu esse caminho para a reforma tributária. As regras de CBS e IBS chegam pelas atualizações do Protheus e são configuradas ali, operação por operação. Por isso a ordem importa: primeiro o sistema atualizado, depois as tabelas, depois as regras e os cadastros.</p>
${lista(['Regras de cálculo de CBS e IBS por tipo de operação', 'Vínculo das regras com as operações de entrada e saída', 'Classificação tributária de produtos e serviços', 'Reflexo nos documentos fiscais e na apuração'])}`,
      lado: `<h3>Antes de tudo, a release</h3><p>Sem as atualizações da TOTVS, o Configurador não tem as regras novas. Se o seu Protheus está defasado, comece pela <a href="atualizacao-protheus.html">atualização</a>.</p><a class="btn btn--ciano" href="#contato">Revisar meu Configurador</a>` },
    { tipo: 'passos', olho: 'Checklist', titulo: 'Configurações mínimas, na ordem.',
      itens: [
        ['Release e pacotes', 'Protheus numa release suportada, com os pacotes da reforma aplicados e o dicionário de dados atualizado.'],
        ['Tabelas da reforma', 'Carga das tabelas de classificação tributária (CST e código de classificação de CBS e IBS) publicadas pelos órgãos da reforma.'],
        ['Regras no Configurador', 'Uma regra de CBS e uma de IBS para cada grupo de operação: venda, compra, devolução, transferência, serviço.'],
        ['Cadastros', 'Produtos com NCM, serviços com NBS e classificação tributária preenchida; clientes e fornecedores com o enquadramento correto.'],
        ['Documentos', 'NF-e e NFS-e levando os grupos de CBS e IBS no XML, com os valores calculados pelo Configurador.'],
        ['Conferência', 'Notas emitidas em homologação conferidas campo a campo pelo fiscal antes de ir para produção.'],
      ] },
    { tipo: 'cards', escuro: true, olho: 'Erros comuns', titulo: 'O que costuma dar errado.', intro: 'Problemas que aparecem nos ambientes que a ASR revisa.',
      itens: [
        ['Pacote aplicado pela metade', 'O dicionário não acompanhou o pacote e as telas novas não aparecem.'],
        ['Cadastro sem classificação', 'Produto sem NCM ou serviço sem NBS gera nota sem CBS e IBS ou com rejeição.'],
        ['Regra genérica demais', 'Uma regra só para todas as operações calcula errado devoluções e transferências.'],
        ['Customização antiga', 'Ponto de entrada em ADVPL que mexe no cálculo fiscal e passa por cima do Configurador.'],
        ['Integração ignorada', 'Notas que entram por integração ou e-commerce sem passar pelas regras novas.'],
        ['Teste só na saída', 'Ninguém testou entrada, crédito e apuração, só a nota de venda.'],
      ] },
    { tipo: 'faq', itens: [
      ['Quais são as configurações mínimas da reforma tributária no Protheus?', 'Protheus atualizado com os pacotes da reforma, tabelas de classificação tributária carregadas, regras de CBS e IBS no Configurador de Tributos para cada tipo de operação, cadastros com NCM, NBS e classificação tributária, e notas testadas em homologação.'],
      ['Onde ficam as tabelas da reforma tributária no Protheus?', 'As tabelas de classificação tributária de CBS e IBS são carregadas no Protheus pelas atualizações da TOTVS e usadas pelo Configurador de Tributos. A documentação técnica de cada tabela fica no TDN, o portal de documentação da TOTVS.'],
      ['Preciso refazer as regras a cada fase da transição?', 'As alíquotas e algumas regras mudam a cada fase, de 2026 a 2033. As regras do Configurador precisam ser revistas antes de cada etapa, junto com as atualizações da TOTVS.'],
      ['Minhas customizações em ADVPL atrapalham?', 'Podem atrapalhar, quando mexem no cálculo fiscal por fora do Configurador. A revisão das customizações faz parte da preparação.'],
    ] },
  ],
  relacionados: ['reforma-tributaria-protheus', 'nfse-protheus', 'atualizacao-protheus'],
},

// ───────────────────────── NFS-e
{
  slug: 'nfse-protheus', menu: 'NFS-e no Protheus', servico: 'Implantação da NFS-e no TOTVS Protheus',
  titulo: 'NFS-e no Protheus: implantação, padrão nacional e reforma tributária | ASR Consult',
  descricao: 'Implantação da NFS-e no TOTVS Protheus: emissão integrada ao faturamento, padrão nacional, código NBS e campos de CBS e IBS da reforma tributária. Rejeições mais comuns.',
  olho: 'NFS-e no Protheus',
  h1: 'NFS-e emitida pelo Protheus, <em>pronta para o padrão nacional e para a reforma.</em>',
  apoio: 'Implantação e ajuste da nota fiscal de serviço no Protheus: emissão a partir do faturamento, transmissão, padrão nacional e os campos novos de CBS e IBS.',
  fatos: [['Documento', 'NFS-e'], ['Padrão', 'Nacional'], ['Novos campos', 'CBS, IBS e NBS'], ['Transmissão', 'Integrada ao Protheus']],
  blocos: [
    { tipo: 'texto', olho: 'Por que mexer agora', titulo: 'A nota de serviço mudou duas vezes.',
      html: `<p>Por muitos anos, cada prefeitura teve o próprio layout de NFS-e, e o Protheus precisava de um ajuste para cada município. O padrão nacional da NFS-e unifica esse modelo, e a reforma tributária tornou o padrão nacional o caminho para levar CBS e IBS nas notas de serviço.</p>
<p>Na prática, empresas que emitem nota de serviço pelo Protheus precisam revisar três coisas: a forma de transmissão, os cadastros dos serviços (com o código NBS) e o cálculo de CBS e IBS no Configurador de Tributos.</p>
${lista(['Emissão da NFS-e a partir do faturamento do Protheus', 'Transmissão pelo serviço da TOTVS que envia os documentos fiscais', 'Cadastro de serviços com código NBS e classificação tributária', 'Campos de CBS e IBS calculados pelo Configurador de Tributos', 'Tratamento de retenções (ISS, INSS, IR, PIS, Cofins e CSLL)'])}`,
      lado: `<h3>Prestadores de serviço</h3><p>Se a empresa emite muitas notas de serviço, a NFS-e é o primeiro documento a revisar na reforma. Um erro aqui aparece na nota de todos os clientes.</p><a class="btn btn--ciano" href="#contato">Revisar minha NFS-e</a>` },
    { tipo: 'passos', olho: 'Como implantamos', titulo: 'NFS-e no Protheus em cinco etapas.',
      itens: [
        ['Levantamento', 'Municípios de emissão, tipos de serviço, retenções e volume de notas.'],
        ['Configuração', 'Parâmetros de emissão, transmissão e certificado digital.'],
        ['Cadastros', 'Serviços com NBS, códigos de tributação e classificação de CBS e IBS.'],
        ['Testes', 'Emissão em homologação, conferência de valores e tratamento das rejeições.'],
        ['Produção', 'Virada acompanhada pela ASR nas primeiras emissões.'],
      ] },
    { tipo: 'faq', itens: [
      ['O Protheus emite NFS-e no padrão nacional?', 'Sim. O Protheus emite NFS-e integrada ao faturamento e recebe atualizações da TOTVS para o padrão nacional e para os campos da reforma tributária. A configuração depende da release e dos municípios em que a empresa emite.'],
      ['O que é o código NBS na NFS-e?', 'NBS é a Nomenclatura Brasileira de Serviços. Ela classifica o serviço prestado e passa a ser usada na NFS-e para identificar a tributação de CBS e IBS.'],
      ['Por que minha NFS-e é rejeitada?', 'As causas mais comuns são cadastro de serviço incompleto, código de tributação errado para o município, certificado digital vencido e release do Protheus sem a atualização do layout.'],
    ] },
  ],
  relacionados: ['configurador-tributos-protheus', 'reforma-tributaria-protheus', 'reinf-protheus'],
},

// ───────────────────────── EFD-REINF
{
  slug: 'reinf-protheus', menu: 'EFD-Reinf no Protheus', servico: 'Implantação da EFD-Reinf no TOTVS Protheus',
  titulo: 'EFD-Reinf no Protheus: implantação, eventos e retenções | ASR Consult',
  descricao: 'Implantação da EFD-Reinf no TOTVS Protheus: eventos de retenção, integração com o eSocial, substituição da DIRF e conferência antes do envio. Consultoria homologada TOTVS.',
  olho: 'EFD-Reinf no Protheus',
  h1: 'EFD-Reinf no Protheus <em>com as retenções conferidas antes do envio.</em>',
  apoio: 'Implantação e revisão da EFD-Reinf no Protheus: eventos de retenção, integração com o eSocial e conferência dos valores antes de transmitir.',
  fatos: [['Obrigação', 'EFD-Reinf'], ['Complementa', 'eSocial'], ['Substitui', 'DIRF'], ['Envio', 'Mensal']],
  blocos: [
    { tipo: 'texto', olho: 'O que é', titulo: 'A EFD-Reinf junta as retenções num lugar só.',
      html: `<p>A EFD-Reinf é a escrituração digital das retenções e de outras informações fiscais que não estão no eSocial: serviços tomados e prestados com retenção de INSS, retenções de IR, PIS, Cofins e CSLL, receitas de eventos esportivos, entre outras. Ela é enviada todo mês e, junto com o eSocial, substituiu a DIRF.</p>
<p>No Protheus, a Reinf nasce dos lançamentos do dia a dia: notas de entrada e de saída, títulos a pagar e retenções. Se esses dados estão errados na origem, o erro chega à Receita. Por isso a implantação começa pelos cadastros e pelas regras de retenção, e não pela transmissão.</p>
${lista(['Eventos de serviços tomados e prestados com retenção', 'Eventos de retenções de IR, PIS, Cofins e CSLL', 'Fechamento e reabertura do período', 'Conferência dos valores com o financeiro e o fiscal', 'Integração com o eSocial para fechar o ciclo das informações'])}`,
      lado: `<h3>Case Iguá e Procisa</h3><p>A ASR implantou o eSocial na Iguá e na Procisa. A Reinf usa a mesma base de cadastros e fecha o ciclo das obrigações.</p><a class="btn btn--ciano" href="#contato">Falar sobre a Reinf</a>` },
    { tipo: 'passos', olho: 'Como implantamos', titulo: 'Da retenção certa ao evento transmitido.',
      itens: [
        ['Diagnóstico', 'Leitura das retenções feitas hoje e dos cadastros de fornecedores, clientes e naturezas.'],
        ['Configuração', 'Parâmetros da Reinf, códigos de serviço e regras de retenção no Protheus.'],
        ['Conferência', 'Comparação dos eventos gerados com o financeiro e o fiscal antes do envio.'],
        ['Transmissão', 'Envio dos eventos e tratamento dos retornos com erro.'],
        ['Rotina mensal', 'Fechamento acompanhado nos primeiros meses e passagem para o suporte.'],
      ] },
    { tipo: 'faq', itens: [
      ['O que é a EFD-Reinf?', 'É a Escrituração Fiscal Digital de Retenções e Outras Informações Fiscais. Ela reúne as retenções e informações que não estão no eSocial e é enviada todo mês.'],
      ['A Reinf substituiu a DIRF?', 'Sim. As informações que iam na DIRF passaram a ser enviadas pela EFD-Reinf e pelo eSocial.'],
      ['O Protheus gera a EFD-Reinf?', 'Sim. O Protheus gera os eventos da Reinf a partir das notas, dos títulos e das retenções lançadas. A qualidade do envio depende dos cadastros e das regras de retenção configuradas.'],
    ] },
  ],
  relacionados: ['nfse-protheus', 'consultoria-totvs-protheus', 'suporte-protheus'],
},
];
