// Páginas técnicas de RH. Buscas de origem: "protheus e-social", "implantação meu rh protheus",
// "consultoria protheus rh", "treinamento protheus rh".
import { lista } from './conteudo-util.mjs';

export const rh = [
// ───────────────────────── eSocial
{
  slug: 'esocial-protheus', menu: 'eSocial no Protheus', servico: 'Implantação e sustentação do eSocial no TOTVS Protheus',
  titulo: 'eSocial no Protheus: implantação, eventos e SST | ASR Consult',
  descricao: 'Implantação e revisão do eSocial no TOTVS Protheus: eventos de tabela, admissão, folha, desligamento e SST, com integração ao SOC. Cases Iguá, Procisa e Würth.',
  olho: 'eSocial no Protheus',
  h1: 'eSocial no Protheus <em>sem evento rejeitado no fechamento.</em>',
  apoio: 'Implantação, revisão e sustentação do eSocial no Protheus: cadastros, eventos de folha, saúde e segurança do trabalho, e a conferência antes de cada envio.',
  fatos: [['Cases', 'Iguá, Procisa e Würth'], ['Eventos', 'Tabela, folha e SST'], ['Integração', 'Protheus e SOC'], ['Alimenta', 'FGTS Digital e DCTFWeb']],
  blocos: [
    { tipo: 'texto', olho: 'Por que dá trabalho', titulo: 'O eSocial começa no cadastro do funcionário.',
      html: `<p>O eSocial reúne num sistema do governo as informações trabalhistas, previdenciárias e fiscais da empresa. Admissão, afastamento, folha, pagamento, desligamento, exames e riscos do trabalho viram eventos enviados dentro de prazos. Esses dados também alimentam o FGTS Digital e a DCTFWeb, então um erro no eSocial vira guia errada.</p>
<p>No Protheus, os eventos nascem dos módulos de RH, folha e ponto e são organizados para transmissão pela TOTVS. Quase sempre, a rejeição vem de cadastro incompleto, rubrica com incidência errada ou evento enviado fora de ordem. Por isso a ASR começa pelos cadastros.</p>
${lista(['Eventos de tabela: empresa, rubricas, lotações e cargos', 'Eventos não periódicos: admissão, alteração, afastamento e desligamento', 'Eventos periódicos: folha, pagamentos e fechamento do mês', 'Saúde e segurança do trabalho (SST): CAT, exames e condições ambientais', 'Conferência de incidências de INSS, FGTS e IR nas rubricas'])}`,
      lado: `<h3>Cases de eSocial</h3><p><b>Iguá:</b> implantação do eSocial, com projeto de estoque e integração com o Sênior.</p><p><b>Procisa:</b> implantação do eSocial e recuperação do ambiente após ataque cibernético.</p><p><b>Würth:</b> eSocial dentro de um projeto maior de RH.</p><a class="btn btn--ciano" href="#contato">Revisar meu eSocial</a>` },
    { tipo: 'cards', escuro: true, olho: 'SST', titulo: 'Saúde e segurança do trabalho integradas ao RH.', intro: 'Os eventos de SST costumam vir de outro sistema. A ASR integra o Protheus ao SOC para eles chegarem certos à folha e ao eSocial.',
      itens: [
        ['CAT', 'Comunicação de acidente de trabalho enviada no prazo.'],
        ['Monitoramento da saúde', 'Exames ocupacionais registrados e enviados.'],
        ['Condições ambientais', 'Riscos e agentes nocivos por cargo e ambiente.'],
      ] },
    { tipo: 'passos', olho: 'Como fazemos', titulo: 'Da base limpa ao fechamento sem rejeição.',
      itens: [
        ['Diagnóstico', 'Leitura dos eventos rejeitados e pendentes, dos cadastros e das rubricas.'],
        ['Saneamento', 'Correção de cadastros de funcionários, cargos, lotações e incidências.'],
        ['Configuração', 'Parâmetros do eSocial no Protheus, ambiente de transmissão e integrações.'],
        ['Conferência', 'Comparação dos totais da folha com os eventos antes do envio.'],
        ['Rotina mensal', 'Fechamento acompanhado e passagem para a sustentação.'],
      ] },
    { tipo: 'faq', itens: [
      ['O Protheus transmite o eSocial?', 'Sim. O Protheus gera os eventos do eSocial a partir dos módulos de RH, folha e ponto e transmite pelo ambiente da TOTVS. A qualidade do envio depende dos cadastros e das rubricas.'],
      ['Por que meus eventos do eSocial são rejeitados?', 'As causas mais comuns são cadastro incompleto do funcionário, rubrica com incidência errada, evento enviado fora de ordem e tabela da empresa desatualizada.'],
      ['O eSocial afeta o FGTS Digital?', 'Sim. O FGTS Digital e a DCTFWeb usam as informações enviadas ao eSocial. Erro no eSocial vira valor errado na guia.'],
      ['A ASR integra o Protheus ao SOC?', 'Sim. A integração Protheus e SOC leva os dados de saúde ocupacional para o RH e para os eventos de SST do eSocial.'],
    ] },
  ],
  relacionados: ['app-meu-rh-protheus', 'reinf-protheus', 'integracao-protheus'],
},

// ───────────────────────── App Meu RH
{
  slug: 'app-meu-rh-protheus', menu: 'App Meu RH', servico: 'Implantação do App Meu RH no TOTVS Protheus',
  titulo: 'App Meu RH no Protheus: implantação e suporte | ASR Consult',
  descricao: 'Implantação do App Meu RH da TOTVS integrado ao Protheus: holerite, férias, espelho de ponto, informe de rendimentos e aprovações do gestor no celular. Case Avacy.',
  olho: 'App Meu RH',
  h1: 'App Meu RH: o RH do Protheus <em>no celular do colaborador.</em>',
  apoio: 'Implantação do aplicativo Meu RH da TOTVS integrado ao Protheus, para o colaborador resolver no celular o que hoje vira pedido ao RH.',
  fatos: [['Aplicativo', 'Meu RH da TOTVS'], ['Integração', 'TOTVS Protheus'], ['Case', 'Avacy'], ['Para', 'Colaboradores e gestores']],
  blocos: [
    { tipo: 'texto', olho: 'O que muda', titulo: 'Menos pedidos ao RH, menos papel.',
      html: `<p>Boa parte do dia do RH vai em pedidos repetidos: segunda via de holerite, informe de rendimentos, saldo de férias, espelho de ponto. O App Meu RH, da TOTVS, coloca essas informações no celular do colaborador, lendo os dados direto do Protheus.</p>
<p>O gestor aprova férias e outras solicitações da equipe pelo aplicativo, sem formulário em papel nem troca de e-mail.</p>
${lista(['Holerite e informe de rendimentos no celular', 'Solicitação e acompanhamento de férias', 'Espelho de ponto e justificativas', 'Atualização de dados cadastrais', 'Aprovações do gestor pelo aplicativo'])}`,
      lado: `<h3>Case Avacy</h3><p>A ASR fez a automação e a implantação do App Meu RH na Avacy.</p><a class="btn btn--ciano" href="#contato">Implantar o Meu RH</a>` },
    { tipo: 'passos', olho: 'Como implantamos', titulo: 'Do Protheus ao aplicativo no celular.',
      itens: [
        ['Pré-requisitos', 'Release do Protheus, serviços de integração e ambiente de publicação.'],
        ['Configuração', 'Funcionalidades liberadas, perfis de acesso e regras de aprovação.'],
        ['Testes', 'Grupo piloto usando o app com dados reais.'],
        ['Lançamento', 'Comunicação aos colaboradores e orientação de primeiro acesso.'],
        ['Suporte', 'Atendimento das dúvidas e dos erros de acesso depois da virada.'],
      ] },
    { tipo: 'faq', itens: [
      ['O que é o App Meu RH?', 'É o aplicativo da TOTVS para colaboradores e gestores. Integrado ao Protheus, mostra holerite, férias, ponto e informe de rendimentos e permite fazer solicitações e aprovações pelo celular.'],
      ['O Meu RH funciona com qualquer versão do Protheus?', 'Depende da release e dos serviços de integração configurados. O diagnóstico inicial da ASR confere os pré-requisitos antes da implantação.'],
      ['Os colaboradores precisam de treinamento?', 'Um guia de primeiro acesso costuma bastar. Os gestores e o RH recebem orientação sobre aprovações e administração.'],
    ] },
  ],
  relacionados: ['esocial-protheus', 'treinamento-protheus', 'suporte-protheus'],
},
];
