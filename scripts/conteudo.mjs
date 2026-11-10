// Conteúdo das páginas internas. Fonte: apresentação da ASR (Arquivos/ASR Consult _Apresentação_V1.pptx)
// e a pesquisa de buscas do Halo Intelligence Snapshot (trama/analise/asrconsult/mercado.json).
// Trechos marcados com <mark class="confirmar"> esperam dados do Rodrigo.

import { lista } from './conteudo-util.mjs';
import { novas } from './conteudo-novas.mjs';
export { lista };
const conf = t => `<mark class="confirmar" title="Dado a confirmar com o Rodrigo">${t}</mark>`;

export const paginas = [
// ───────────────────────── QUEM SOMOS
{
  slug: 'quem-somos', menu: 'Quem somos',
  titulo: 'Quem somos | ASR Consult, consultoria homologada TOTVS desde 2008',
  descricao: 'A ASR Consult é canal homologado TOTVS desde 2008: +480 projetos, +40 consultores sêniores e clientes em 11 estados. Conheça a história e quem lidera a consultoria.',
  olho: 'Quem somos',
  h1: 'Desde 2008 cuidando do <em>Protheus de empresas em 11 estados.</em>',
  apoio: 'A ASR Consult é uma consultoria homologada TOTVS com sede na Mooca, em São Paulo. São mais de 480 projetos entregues e 35 mil atendimentos por ano, feitos por uma equipe só de consultores sêniores.',
  fatos: [['Fundação', '2008'], ['Sede', 'Mooca, São Paulo'], ['Equipe', '+40 consultores sêniores'], ['Presença', '11 estados']],
  blocos: [
    { tipo: 'numeros', itens: [['480', '+', 'Projetos entregues desde 2008'], ['35000', '+', 'Atendimentos por ano'], ['40', '+', 'Consultores sêniores'], ['11', '', 'Estados atendidos']] },
    { tipo: 'texto', olho: 'Nossa história', titulo: 'Uma consultoria criada para cuidar do ERP depois que ele entra no ar.',
      html: `<p>Fundada por Rodrigo Silvestre e pela sócia Andreia, a ASR começou em 2008 implantando TOTVS Protheus e, com os anos, passou a cuidar do que vem depois da implantação: o suporte do dia a dia, as atualizações de release, as mudanças da legislação e o desenvolvimento do que o sistema padrão não cobre.</p>
<p>Hoje a ASR atende indústrias, distribuidores, redes de varejo e empresas de serviço em 11 estados. A equipe tem mais de 40 consultores, todos sêniores, com especialistas em cada módulo do Protheus e do RM.</p>
<p>O modelo de trabalho tem três compromissos que o cliente consegue conferir: o SLA de sustentação escrito em contrato, com mínimo de 85% todo mês; o Book de Atendimento, um relatório mensal com as causas dos chamados e os planos de ação; e a documentação no padrão TOTVS em toda entrega.</p>`,
      lado: `<h3>Cases em números</h3><dl class="fatos-lista"><div><dt>Projetos para a Bauminas em 2024</dt><dd>+108</dd></div><div><dt>Lojas do Habib's migradas</dt><dd>+270</dd></div><div><dt>Anos de parceria com a Procisa</dt><dd>8</dd></div></dl><a class="btn btn--ciano" href="#cases">Ver os cases</a>` },
    { tipo: 'html', html: `<section class="secao escuro" id="rodrigo" aria-labelledby="t-rodrigo">
  <div class="wrap pessoa">
    <figure class="pessoa__foto">
      <div class="pessoa__iniciais" aria-hidden="true">RS</div>
      <figcaption class="mono">${conf('Foto do Rodrigo')}</figcaption>
    </figure>
    <div>
      <span class="olho mono">Quem lidera</span>
      <h2 id="t-rodrigo" class="palavras" style="margin-top:14px">Rodrigo Silvestre</h2>
      <p class="pessoa__cargo mono">Diretor executivo e sócio-fundador · ASR Consult</p>
      <p>Rodrigo Miranda Silvestre fundou a ASR Consult com a sócia Andreia e tem mais de 20 anos de carreira em tecnologia. Antes da ASR, foi líder de equipe, coordenador de TI e líder de suporte VIP em operações de grande porte, sempre com SLA de cliente para cumprir.</p>
      <p>Na carreira, trabalhou com empresas como Itaú Unibanco, Pernambucanas, Sodexo, TOTVS e Mr. Kitch. Na coordenação de TI da Sonda, atendendo a Pernambucanas em todo o país, recuperou o SLA em 42% no primeiro mês com a nova equipe de campo e manteve 99% de atingimento mensal.</p>
      <p>Hoje, como diretor executivo, cuida da estratégia comercial, da relação direta com os clientes e da gestão das equipes de suporte e projetos. O SLA no contrato e o Book de Atendimento da ASR vêm dessa experiência: ele passou anos sendo cobrado por indicador.</p>
      <ul class="clientes clientes--escuro" aria-label="Empresas na carreira do Rodrigo"><li>Itaú Unibanco</li><li>Pernambucanas</li><li>Sodexo</li><li>TOTVS</li><li>Mr. Kitch</li></ul>
      <ul class="trajetoria">
        <li><b class="mono">2010</b><span>Líder de equipe de suporte a campo na Spread Tecnologia, atendendo o Itaú Unibanco.</span></li>
        <li><b class="mono">2011</b><span>Analista de suporte na Itautec, no cliente Itaú Unibanco.</span></li>
        <li><b class="mono">2012</b><span>Coordenador de TI na Spread Tecnologia: field services e service desk para Itaú Unibanco e CVC.</span></li>
        <li><b class="mono">2015</b><span>Líder de suporte VIP na Globalweb, atendendo a diretoria da Suzano Papel e Celulose.</span></li>
        <li><b class="mono">2016</b><span>Coordenador de TI na Sonda, responsável pela operação da Pernambucanas em nível nacional.</span></li>
        <li><b class="mono">Hoje</b><span>Diretor executivo da ASR Consult, à frente da estratégia comercial, das finanças e das equipes de suporte e projetos.</span></li>
      </ul>
      <p class="pessoa__contato"><a class="btn btn--linha" href="https://www.linkedin.com/in/rodrigo-miranda-silvestre/" target="_blank" rel="noopener">LinkedIn do Rodrigo</a> <a class="btn btn--ciano" href="#contato">Falar com o Rodrigo</a></p>
    </div>
  </div>
</section>` },
    { tipo: 'cards', olho: 'Como trabalhamos', titulo: 'O que o cliente da ASR recebe por escrito.', intro: 'São os pontos que aparecem no contrato e nos relatórios, e que o cliente pode cobrar.',
      itens: [
        ['SLA de sustentação', 'Nível mínimo de 85% garantido em contrato, mantido em todos os meses do ano, independentemente do volume de chamados.'],
        ['Book de Atendimento', 'Relatório mensal com métricas, causas dos chamados e planos de ação para corrigir o que se repete.'],
        ['Equipe 100% sênior', 'Mais de 40 consultores sêniores, com especialistas em todos os módulos TOTVS.'],
        ['Transparência total', 'Planos de ação para melhoria contínua montados junto com o cliente.'],
        ['Documentação padrão TOTVS', 'Rastreabilidade e qualidade em todas as entregas, o que facilita as atualizações futuras.'],
        ['Canal homologado TOTVS', 'Parceiro oficial da TOTVS, com treinamentos da Universidade TOTVS e acesso aos canais técnicos da fabricante.'],
      ] },
    { tipo: 'html', html: `<section class="secao claro" id="cases" aria-labelledby="t-cases" style="padding-top:0">
  <div class="wrap">
    <div class="secao__cabeca">
      <div><span class="olho mono">Cases</span><h2 id="t-cases" class="palavras" style="margin-top:14px">Projetos que estão no ar hoje.</h2></div>
      <p>Alguns clientes que mantêm o Protheus com a ASR e o que foi feito em cada um.</p>
    </div>
    <div class="cases">
      <article class="case sobe" style="--i:0"><h3>Habib's</h3><b class="case__num">+270 <small>lojas migradas</small></b><p>Migração da rede e suporte completo ao RH.</p></article>
      <article class="case sobe" style="--i:1"><h3>Bauminas</h3><b class="case__num">+108 <small>projetos em 2024</small></b><p>Mais de 5 mil chamados atendidos.</p></article>
      <article class="case sobe" style="--i:2"><h3>Iguá</h3><b class="case__num">+3 mil <small>chamados atendidos</small></b><p>Implantação do eSocial, projeto de estoque com ACD e integração com o sistema Sênior.</p></article>
      <article class="case sobe" style="--i:3"><h3>Procisa</h3><b class="case__num">8 anos <small>de parceria</small></b><p>Implantação do eSocial e recuperação do ambiente depois de um ataque cibernético.</p></article>
      <article class="case sobe" style="--i:4"><h3>Würth</h3><p>Automação de processos de RH com soluções TOTVS, reestruturação de estoque, ACD, eSocial e projeto de release.</p></article>
      <article class="case sobe" style="--i:5"><h3>Emplas</h3><p>Ganho de desempenho com os projetos de release, SQL, estoque e financeiro.</p></article>
      <article class="case sobe" style="--i:6"><h3>Avacy</h3><p>Automação e implantação do App Meu RH.</p></article>
    </div>
    <h3 class="clientes__titulo">Empresas que confiam o Protheus à ASR</h3>
    <ul class="clientes">${['Würth', 'FedEx', "Habib's", 'Ragazzo', 'Hexagon', 'SMC', 'Banco RCI Brasil', 'Colorobbia', 'Bunzl', 'Dimep', 'Tintas Killing', 'Bauminas', 'Iguá', 'Procisa', 'Emplas', 'Valoriza', 'Unagro', 'Hi-Lex', 'Injex', 'Alispec', 'Pensabio', 'Tubarão Saneamento', 'Alphaville Tênis Clube', 'Editora Santuário', 'Ormazabal', 'Hudson Store'].map(n => `<li>${n}</li>`).join('')}</ul>
  </div>
</section>` },
    { tipo: 'faq', itens: [
      ['Quem fundou a ASR Consult?', 'A ASR foi fundada por Rodrigo Miranda Silvestre, hoje diretor executivo, e pela sócia Andreia. Rodrigo tem mais de 20 anos de carreira em tecnologia, com passagens pela coordenação de TI em operações de clientes como Itaú Unibanco e Pernambucanas.'],
      ['A ASR Consult é parceira oficial da TOTVS?', 'Sim. A ASR é canal homologado TOTVS desde 2008, o que permite implantar, dar suporte e treinar equipes nos sistemas da TOTVS com a metodologia e os treinamentos oficiais da fabricante.'],
      ['Onde fica a ASR e quais regiões ela atende?', 'A sede fica na Rua da Mooca, 4415, em São Paulo (SP). A ASR atende clientes em 11 estados, com atendimento remoto e visitas quando o projeto pede.'],
      ['Quais sistemas TOTVS a ASR atende?', 'Protheus e RM, em todos os módulos: recursos humanos, fiscal e financeiro, contabilidade, compras, estoque e custos, qualidade, exportação e importação, GFE, WMS e TMS.'],
    ] },
  ],
  relacionados: ['consultoria-homologada-totvs', 'suporte-protheus', 'consultoria-totvs-protheus'],
},

// ───────────────────────── CONSULTORIA PROTHEUS
{
  slug: 'consultoria-totvs-protheus', menu: 'Consultoria TOTVS Protheus', servico: 'Consultoria TOTVS Protheus e RM',
  titulo: 'Consultoria TOTVS Protheus e RM em São Paulo | ASR Consult',
  descricao: 'Consultoria ERP TOTVS Protheus e RM com especialistas por módulo: fiscal, financeiro, RH, estoque, compras e logística. Canal homologado TOTVS desde 2008.',
  olho: 'Consultoria TOTVS Protheus',
  h1: 'Consultoria TOTVS Protheus com <em>um especialista para cada módulo.</em>',
  apoio: 'Fiscal, financeiro, RH, estoque, compras e logística no Protheus e no RM, atendidos por consultores sêniores que conhecem a regra do negócio e o sistema.',
  fatos: [['Sistemas', 'Protheus e RM'], ['Equipe', '+40 consultores sêniores'], ['Desde', '2008'], ['Atendimento', 'São Paulo e mais 10 estados']],
  blocos: [
    { tipo: 'texto', olho: 'Para quem é', titulo: 'Quando a empresa precisa de consultoria no Protheus.',
      html: `<p>A maior parte das empresas que procura consultoria Protheus já tem o sistema rodando. O problema aparece de outro jeito: o fechamento do mês leva dias, o fiscal ajusta nota na mão, o estoque do sistema não bate com o físico, ou cada área usa o ERP de um jeito.</p>
<p>A consultoria da ASR começa olhando o processo e só depois o sistema. O consultor do módulo senta com a área, entende como o trabalho é feito, compara com o que o Protheus já oferece e propõe o ajuste: um parâmetro, um cadastro corrigido, um treinamento ou, quando o padrão não atende, um desenvolvimento em ADVPL.</p>
${lista(['Revisão de processos por área, com o usuário-chave junto', 'Ajuste de parâmetros e cadastros que geram retrabalho', 'Plano de ação priorizado, com prazo e responsável', 'Documentação no padrão TOTVS do que foi alterado'])}`,
      lado: `<h3>Também atendemos RM</h3><p>Além do Protheus, a ASR atende o TOTVS RM, muito usado em RH, folha de pagamento e educação.</p><a class="btn btn--ciano" href="#contato">Falar com um consultor</a>` },
    { tipo: 'cards', escuro: true, olho: 'Módulos', titulo: 'Gestão integrada de ponta a ponta.', intro: 'Consultores especialistas em cada área do Protheus e do RM.',
      itens: [
        ['Recursos humanos', 'Folha, ponto, eSocial, benefícios e App Meu RH.'],
        ['Fiscal e financeiro', 'Livros fiscais, apuração, contas a pagar e receber, DDA e PIX.'],
        ['Contabilidade', 'Plano de contas, lançamentos automáticos e fechamento.'],
        ['Compras', 'Solicitação, cotação, pedido e aprovação.'],
        ['Estoque e custos', 'Inventário, custo médio, ACD e coletores.'],
        ['Qualidade', 'Inspeção de entrada, processos e não conformidades.'],
        ['Exportação e importação', 'Processos de comércio exterior integrados ao fiscal e ao financeiro.'],
        ['GFE, WMS e TMS', 'Gestão de frete, armazém e transporte.'],
        ['Controladoria', 'Indicadores e painéis com Power BI.'],
      ] },
    { tipo: 'passos', olho: 'Como funciona', titulo: 'Do diagnóstico ao ajuste no ar.',
      itens: [
        ['Diagnóstico', 'Entrevista com as áreas e leitura do ambiente: release, customizações, cadastros e chamados recentes.'],
        ['Plano de ação', 'Lista do que mudar, em ordem de impacto, com esforço estimado em horas.'],
        ['Execução', 'Ajustes testados em ambiente de homologação antes de ir para produção.'],
        ['Acompanhamento', 'Treinamento de quem usa e revisão dos resultados com a área.'],
      ] },
    { tipo: 'faq', itens: [
      ['Quanto custa uma consultoria Protheus?', 'Depende do escopo. A ASR trabalha com projeto de horas fechadas, quando o escopo está definido, ou com banco de horas (AMS), quando a demanda é contínua. O diagnóstico inicial define qual modelo faz mais sentido.'],
      ['A ASR atende empresas fora de São Paulo?', 'Sim. A sede é em São Paulo, e a ASR tem clientes em 11 estados. A maior parte do trabalho é remota, com visitas nas etapas que pedem presença.'],
      ['Protheus e Microsiga são o mesmo sistema?', 'Sim. Microsiga era o nome da empresa que criou o Protheus e deu origem à TOTVS. Muita gente ainda chama o Protheus de Microsiga.'],
    ] },
  ],
  relacionados: ['implantacao-protheus', 'suporte-protheus', 'desenvolvimento-advpl'],
},

// ───────────────────────── IMPLANTAÇÃO
{
  slug: 'implantacao-protheus', menu: 'Implantação', servico: 'Implantação do TOTVS Protheus',
  titulo: 'Implantação do TOTVS Protheus com treinamento | ASR Consult',
  descricao: 'Implantação do TOTVS Protheus com planejamento, cronograma e treinamento via Universidade TOTVS. Consultoria homologada com +480 projetos entregues desde 2008.',
  olho: 'Implantação Protheus',
  h1: 'Implantação do Protheus com <em>cronograma e equipe treinada.</em>',
  apoio: 'Planejamento detalhado, cronograma rigoroso e treinamento direcionado, pela Universidade TOTVS ou no formato da sua empresa, para o ERP entrar no ar e ser usado.',
  fatos: [['Projetos entregues', '+480'], ['Treinamento', 'Universidade TOTVS'], ['Modelo', 'Horas fechadas'], ['Documentação', 'Padrão TOTVS']],
  blocos: [
    { tipo: 'texto', olho: 'O que entregamos', titulo: 'Uma implantação termina quando a equipe usa o sistema sozinha.',
      html: `<p>O Protheus entra no ar no dia da virada, mas a implantação só dá certo quando as pessoas usam o sistema sem voltar para a planilha. Por isso a ASR trata o treinamento como parte do projeto, com a mesma importância da configuração.</p>
<p>Cada implantação tem cronograma por fase, escopo fechado e um consultor sênior responsável por módulo. As decisões de configuração ficam documentadas no padrão TOTVS, o que facilita o suporte e as atualizações de release nos anos seguintes.</p>
${lista(['Levantamento dos processos de cada área antes de configurar', 'Cronograma por fase, com marcos e responsáveis dos dois lados', 'Migração e saneamento de cadastros', 'Testes integrados com os usuários-chave', 'Treinamento via Universidade TOTVS ou customizado', 'Acompanhamento da operação depois da virada'])}`,
      lado: `<h3>Implantação por módulo</h3><p>Também implantamos módulos em quem já usa o Protheus: eSocial, App Meu RH, ACD no estoque, NFS-e, REINF, ativo fixo e WMS.</p><a class="btn btn--ciano" href="#contato">Planejar minha implantação</a>` },
    { tipo: 'passos', olho: 'Passo a passo', titulo: 'Como é uma implantação de ERP com a ASR.',
      itens: [
        ['Levantamento', 'Mapeamento dos processos e definição do escopo, módulo por módulo.'],
        ['Planejamento', 'Cronograma, equipe dos dois lados e horas de cada fase.'],
        ['Configuração', 'Parâmetros, cadastros, regras fiscais e integrações.'],
        ['Testes e treinamento', 'Simulação da operação real e capacitação dos usuários.'],
        ['Virada', 'Entrada em produção em data combinada, com a equipe da ASR de plantão.'],
        ['Pós-implantação', 'Acompanhamento dos primeiros fechamentos e passagem para o suporte.'],
      ] },
    { tipo: 'faq', itens: [
      ['Quanto tempo leva a implantação do Protheus?', 'Depende dos módulos e do porte da empresa. Uma implantação de módulo isolado costuma levar semanas; um ERP completo, alguns meses. O prazo sai do levantamento e entra no cronograma do projeto.'],
      ['Quanto custa implantar um ERP?', 'O custo vem das horas de consultoria de cada fase. A ASR fecha as horas antes de começar, para a empresa saber o valor total do projeto.'],
      ['O treinamento está incluído?', 'Sim. O treinamento faz parte da implantação, pela Universidade TOTVS ou em turmas montadas com os processos da sua empresa.'],
    ] },
  ],
  relacionados: ['treinamento-protheus', 'projeto-horas-fechadas', 'suporte-protheus'],
},

// ───────────────────────── SUPORTE
{
  slug: 'suporte-protheus', menu: 'Suporte e sustentação', servico: 'Suporte e sustentação TOTVS Protheus (AMS)',
  titulo: 'Suporte Protheus e sustentação AMS com SLA em contrato | ASR Consult',
  descricao: 'Suporte TOTVS Protheus com SLA mínimo de 85% garantido em contrato, banco de horas AMS e Book de Atendimento mensal. +35 mil atendimentos por ano.',
  olho: 'Suporte e sustentação',
  h1: 'Suporte Protheus com <em>SLA de 85% no contrato.</em>',
  apoio: 'Sustentação com nível de serviço garantido, banco de horas AMS e um relatório mensal que mostra por que os chamados acontecem e o que foi feito para não voltarem.',
  fatos: [['SLA mínimo', '85% em contrato'], ['Atendimentos', '+35 mil por ano'], ['Relatório', 'Book de Atendimento mensal'], ['Plantão', '24/7 em fins de semana e feriados']],
  blocos: [
    { tipo: 'numeros', itens: [['85', '', 'SLA mínimo garantido (%)'], ['35000', '+', 'Atendimentos por ano'], ['40', '+', 'Consultores sêniores'], ['12', '', 'Books de Atendimento por ano']] },
    { tipo: 'texto', olho: 'SLA de sustentação', titulo: 'O nível de serviço fica escrito no contrato.',
      html: `<p>Na sustentação da ASR, o SLA mínimo de 85% está no contrato. Em qualquer volume de chamados, a ASR mantém o índice acima desse patamar em todos os meses do ano.</p>
<p>O cliente ganha previsibilidade: menos retrabalho, menos custo com correção e operação estável. O atendimento é feito por consultores sêniores que conhecem o ambiente, em horário comercial, com plantão 24/7 em fins de semana e feriados.</p>
${lista(['Suporte N1 e N2 em todos os módulos TOTVS', 'Atendimento por consultores sêniores', 'Indicadores de SLA acompanhados mês a mês', 'Plantão em fins de semana e feriados'])}`,
      lado: `<h3>Dois modelos</h3><p><b>Sustentação:</b> suporte contínuo com SLA em contrato.</p><p><b>Banco de horas (AMS):</b> um pacote de horas para chamados, melhorias e pequenos projetos, usado conforme a demanda.</p><a class="btn btn--ciano" href="#contato">Comparar os modelos</a>` },
    { tipo: 'html', html: `<section class="secao escuro" id="book" aria-labelledby="t-book">
  <div class="wrap book">
    <div>
      <span class="olho mono">Book de Atendimento</span>
      <h2 id="t-book" class="palavras" style="margin-top:14px">Uma visão gerencial que transforma suporte em estratégia.</h2>
      <p>O Book de Atendimento é a metodologia de atendimento da ASR. Todo mês, o cliente recebe um diagnóstico com métricas, causas dos chamados e planos de ação.</p>
      <p>O resultado aparece na operação: recorrências corrigidas, usuários capacitados e uso do sistema melhorando a cada mês.</p>
    </div>
    <figure class="book__quadro" aria-label="Exemplo de plano de ação do Book de Atendimento">
      <div class="book__topo mono"><span>Status report · plano de ação</span><span>ASR</span></div>
      <table>
        <thead><tr><th>Plano de ação</th><th>Estratégia</th><th>Identificado</th><th>Concluído</th></tr></thead>
        <tbody>
          <tr><td><i></i>22 chamados de erro na liberação de pedido. Causa: erro operacional do usuário</td><td>Eliminar</td><td>09/2024</td><td>01/2025</td></tr>
          <tr><td><i></i>17 chamados de erro no App Meu RH. Causa: erro operacional do usuário</td><td>Eliminar</td><td>06/2025</td><td>06/2025</td></tr>
          <tr><td><i></i>5 erros no pedido de compra. Causa: erro operacional do usuário</td><td>Eliminar</td><td>07/2025</td><td>07/2025</td></tr>
          <tr><td><i></i>4 chamados de erro na emissão de NF. Causa: erro operacional do usuário</td><td>Eliminar</td><td>07/2025</td><td>07/2025</td></tr>
        </tbody>
      </table>
      <figcaption class="mono">Exemplo da apresentação da ASR</figcaption>
    </figure>
  </div>
</section>` },
    { tipo: 'faq', itens: [
      ['O que é AMS no Protheus?', 'AMS (Application Management Services) é a gestão contínua da aplicação: suporte, correções, pequenas melhorias e manutenção. Na ASR, o AMS funciona como banco de horas usado conforme a demanda.'],
      ['O que o SLA de 85% garante?', 'Que pelo menos 85% dos chamados sejam atendidos dentro dos prazos combinados, todos os meses. O índice está no contrato e aparece no Book de Atendimento.'],
      ['A ASR atende fora do horário comercial?', 'Sim. Além do horário comercial de segunda a sexta, há plantão 24/7 em fins de semana e feriados.'],
      ['Qual o telefone do suporte?', 'O suporte da ASR atende no (11) 2659-5360. Para novos contratos, fale com o comercial no (11) 97996-7825.'],
    ] },
  ],
  relacionados: ['atualizacao-protheus', 'projeto-horas-fechadas', 'consultoria-totvs-protheus'],
},

// ───────────────────────── ATUALIZAÇÃO
{
  slug: 'atualizacao-protheus', menu: 'Atualização do Protheus', servico: 'Atualização de release do TOTVS Protheus',
  titulo: 'Atualização do Protheus: troca de release sem parar a operação | ASR Consult',
  descricao: 'Atualização de release e de ambiente do TOTVS Protheus com inventário de customizações, testes em homologação e virada em janela combinada. Projetos de release na Würth e na Emplas.',
  olho: 'Atualização do Protheus',
  h1: 'Atualização do Protheus <em>testada antes da virada.</em>',
  apoio: 'Troca de release e atualização de ambiente com inventário das customizações, testes em homologação e virada em data combinada, para a operação não parar.',
  fatos: [['Projetos de release', 'Würth e Emplas'], ['Ambiente de teste', 'Homologação antes da produção'], ['Virada', 'Janela combinada'], ['Depois', 'Acompanhamento da operação']],
  blocos: [
    { tipo: 'texto', olho: 'Por que atualizar', titulo: 'Release antiga fica sem as mudanças da lei.',
      html: `<p>A TOTVS publica novas releases do Protheus com correções, melhorias e, principalmente, as mudanças da legislação. Quando a empresa fica numa release antiga, essas atualizações deixam de chegar, e cada exigência nova vira um ajuste manual ou um desenvolvimento à parte.</p>
<p>A reforma tributária deixa isso mais urgente: as regras de CBS e IBS, o Configurador de Tributos e os novos campos das notas fiscais chegam pelas atualizações do sistema. Empresas desatualizadas precisam primeiro trocar de release para depois se adequar.</p>
${lista(['Atualizações legais: reforma tributária, eSocial, REINF e layouts de NF-e e NFS-e', 'Correções de segurança e de erros conhecidos', 'Ganho de desempenho, como no projeto de release e SQL da Emplas', 'Acesso às funções novas do Protheus'])}`,
      lado: `<h3>O risco das customizações</h3><p>Rotinas em ADVPL feitas fora do padrão costumam quebrar na troca de release. Por isso o inventário das customizações é o primeiro passo do projeto.</p><a class="btn btn--ciano" href="#contato">Avaliar meu ambiente</a>` },
    { tipo: 'passos', olho: 'Como fazemos', titulo: 'Atualização em cinco etapas.',
      itens: [
        ['Inventário', 'Levantamento da release atual, das customizações em ADVPL, das integrações e do banco de dados.'],
        ['Ambiente de homologação', 'Cópia do ambiente de produção já na release nova, para testar sem risco.'],
        ['Ajuste das customizações', 'Correção do que quebrou, seguindo o padrão TOTVS para não quebrar de novo na próxima versão.'],
        ['Testes com as áreas', 'Usuários-chave rodam os processos do dia a dia: faturamento, folha, fechamento, estoque.'],
        ['Virada e acompanhamento', 'Atualização da produção em janela combinada, normalmente fora do expediente, com a equipe de plantão nos primeiros dias.'],
      ] },
    { tipo: 'faq', itens: [
      ['De quanto em quanto tempo devo atualizar o Protheus?', 'O ideal é acompanhar as releases suportadas pela TOTVS, para receber as atualizações legais sem atraso. A ASR avalia a release atual e indica o melhor momento para a troca.'],
      ['A atualização para a operação da empresa?', 'Não deveria. Os testes acontecem num ambiente separado e a virada é feita em janela combinada, normalmente à noite ou no fim de semana.'],
      ['Preciso atualizar o Protheus para a reforma tributária?', 'Sim. As regras de CBS e IBS e o Configurador de Tributos chegam pelas atualizações do Protheus. Quem está em release antiga precisa atualizar antes de configurar a reforma.'],
    ] },
  ],
  relacionados: ['reforma-tributaria-protheus', 'desenvolvimento-advpl', 'suporte-protheus'],
},

// ───────────────────────── REFORMA
{
  slug: 'reforma-tributaria-protheus', menu: 'Reforma tributária', servico: 'Adequação do Protheus à reforma tributária',
  titulo: 'Reforma tributária no Protheus: Configurador de Tributos, CBS e IBS | ASR Consult',
  descricao: 'Adequação do TOTVS Protheus à reforma tributária: atualização, Configurador de Tributos, cadastros, NF-e e NFS-e com CBS e IBS. Calendário da transição de 2026 a 2033.',
  olho: 'Reforma tributária',
  h1: 'Reforma tributária no Protheus, <em>fase por fase até 2033.</em>',
  apoio: 'A ASR atualiza o ambiente, configura o Configurador de Tributos, revisa cadastros e testa as notas com CBS e IBS antes de cada etapa da transição.',
  fatos: [['Lei', 'LC 214/2025'], ['Novos tributos', 'CBS, IBS e Imposto Seletivo'], ['2026', 'Ano de teste'], ['2033', 'Novo sistema por inteiro']],
  blocos: [
    { tipo: 'texto', olho: 'O que muda', titulo: 'A reforma passa por cadastro, nota, preço e apuração.',
      html: `<p>A reforma tributária, regulamentada pela Lei Complementar 214/2025, troca PIS, Cofins, IPI, ICMS e ISS pela CBS (federal), pelo IBS (estadual e municipal) e pelo Imposto Seletivo. A transição dura de 2026 a 2033, e durante esse tempo os dois sistemas convivem.</p>
<p>No Protheus, a mudança aparece em várias frentes ao mesmo tempo:</p>
${lista(['<b>Atualização do sistema</b>, para receber as regras novas da TOTVS', '<b>Configurador de Tributos</b>, onde ficam as regras de cálculo de CBS e IBS', '<b>Cadastros</b> de produtos, clientes e fornecedores com a classificação tributária correta', '<b>NF-e e NFS-e</b> com os novos grupos de CBS e IBS', '<b>Formação de preço</b> e contratos longos, que atravessam as fases da transição', '<b>Apuração</b> e conferência dos créditos'])}
<p>A ASR revisa o ambiente, acompanha cada atualização da TOTVS e testa os documentos fiscais antes que a fase entre em vigor.</p>`,
      lado: `<h3>Comece pela release</h3><p>As regras da reforma chegam pelas atualizações do Protheus. Se a sua release está defasada, o primeiro passo é a <a href="atualizacao-protheus.html">atualização do Protheus</a>.</p><a class="btn btn--ciano" href="#contato">Avaliar meu ambiente</a>` },
    { tipo: 'html', html: `<section class="secao escuro" aria-labelledby="t-calendario">
  <div class="wrap">
    <div class="secao__cabeca">
      <div><span class="olho mono">Calendário</span><h2 id="t-calendario" class="palavras" style="margin-top:14px">As fases da transição.</h2></div>
      <p>Cada fase muda alíquota, campo de nota ou regra de crédito. O ERP precisa estar pronto antes da data.</p>
    </div>
    <ol class="calendario">
      <li class="sobe" style="--i:0"><b>2026</b><span>Ano de teste. CBS de 0,9% e IBS de 0,1% destacados nos documentos fiscais, compensáveis com PIS e Cofins.</span></li>
      <li class="sobe" style="--i:1"><b>2027</b><span>A CBS entra em vigor por inteiro e PIS e Cofins deixam de existir. Começa o Imposto Seletivo.</span></li>
      <li class="sobe" style="--i:2"><b>2029 a 2032</b><span>ICMS e ISS caem aos poucos enquanto o IBS sobe na mesma proporção.</span></li>
      <li class="sobe" style="--i:3"><b>2033</b><span>Fim do ICMS e do ISS. O novo sistema vale por inteiro.</span></li>
    </ol>
  </div>
</section>` },
    { tipo: 'passos', olho: 'Como a ASR prepara o Protheus', titulo: 'Configurações mínimas, na ordem certa.',
      itens: [
        ['Diagnóstico', 'Release, módulos fiscais, customizações e integrações que geram documento fiscal.'],
        ['Atualização', 'Troca de release ou aplicação dos pacotes da TOTVS com as regras da reforma.'],
        ['Configurador de Tributos', 'Regras de CBS e IBS por operação, com os parâmetros mínimos exigidos.'],
        ['Cadastros', 'Revisão da classificação tributária de produtos, serviços, clientes e fornecedores.'],
        ['Testes', 'Emissão de NF-e e NFS-e em homologação e conferência dos valores calculados.'],
        ['Treinamento', 'Capacitação do time fiscal no Configurador de Tributos.'],
      ] },
    { tipo: 'faq', itens: [
      ['O que é o Configurador de Tributos do Protheus?', 'É a ferramenta do Protheus onde ficam as regras de cálculo dos tributos. Na reforma tributária, é nele que se configuram as regras de CBS e IBS para cada tipo de operação.'],
      ['O que preciso fazer no Protheus em 2026?', 'Em 2026 as notas já destacam CBS e IBS em caráter de teste. O Protheus precisa estar atualizado, com o Configurador de Tributos ajustado e os cadastros com a classificação tributária correta.'],
      ['A NFS-e também muda?', 'Sim. A nota fiscal de serviço passa a levar os campos de CBS e IBS, e o Protheus precisa estar preparado para o novo layout.'],
      ['A ASR treina a equipe fiscal?', 'Sim. O treinamento no Configurador de Tributos faz parte do projeto, para o time fiscal conseguir manter as regras nas próximas fases.'],
    ] },
  ],
  relacionados: ['atualizacao-protheus', 'consultoria-totvs-protheus', 'treinamento-protheus'],
},

// ───────────────────────── HOMOLOGADA
{
  slug: 'consultoria-homologada-totvs', menu: 'Canal homologado TOTVS', servico: 'Consultoria homologada TOTVS',
  titulo: 'Consultoria homologada TOTVS: por que contratar um canal oficial | ASR Consult',
  descricao: 'O que é um canal homologado TOTVS, o que muda ao contratar uma consultoria homologada e por que isso protege o seu Protheus. A ASR Consult é parceira homologada desde 2008.',
  olho: 'Canal homologado TOTVS',
  h1: 'Por que contratar uma <em>consultoria homologada TOTVS.</em>',
  apoio: 'Uma consultoria homologada trabalha com a metodologia, os treinamentos e os canais técnicos da própria TOTVS. Para o cliente, isso significa um ERP que continua atualizável e um caminho oficial quando o problema é da fabricante.',
  fatos: [['ASR', 'Canal homologado desde 2008'], ['Treinamento', 'Universidade TOTVS'], ['Entregas', 'Documentação padrão TOTVS'], ['Sistemas', 'Protheus e RM']],
  blocos: [
    { tipo: 'texto', olho: 'Sobre a TOTVS', titulo: 'A maior fabricante brasileira de software de gestão.',
      html: `<p>A TOTVS nasceu em 1983 como Microsiga e hoje é a maior fabricante brasileira de software de gestão. Entre os sistemas dela estão o Protheus, usado por indústrias, distribuidores e empresas de serviço, o RM, forte em RH e educação, e plataformas como o Fluig.</p>
<p>Boa parte da implantação e do suporte desses sistemas é feita por parceiros. Parte deles passa pela homologação da TOTVS e se torna canal oficial; outros trabalham por conta própria, sem vínculo com a fabricante.</p>`,
      lado: `<h3>ASR Consult</h3><p>Canal homologado TOTVS desde 2008, com +480 projetos entregues e +40 consultores sêniores.</p><a class="btn btn--ciano" href="quem-somos.html">Conhecer a ASR</a>` },
    { tipo: 'cards', escuro: true, olho: 'O que muda', titulo: 'O que o cliente ganha com um canal homologado.', intro: 'Pontos práticos, que aparecem no dia a dia do ERP.',
      itens: [
        ['Metodologia TOTVS', 'Implantação e suporte seguem as boas práticas da fabricante, e não um jeito próprio de cada consultor.'],
        ['Customização dentro do padrão', 'Desenvolvimentos em ADVPL seguem as regras da TOTVS e atravessam as trocas de release sem quebrar.'],
        ['Caminho oficial de escalonamento', 'Quando o problema é do produto, o canal homologado abre o caso pelos canais técnicos da TOTVS.'],
        ['Treinamento oficial', 'Cursos da Universidade TOTVS entregues pelo parceiro.'],
        ['Atualizações em dia', 'O parceiro acompanha as releases e os pacotes legais, como os da reforma tributária.'],
        ['Documentação padrão', 'Entregas documentadas no padrão TOTVS, o que facilita o trabalho de quem vier depois.'],
      ] },
    { tipo: 'texto', olho: 'O risco', titulo: 'O que acontece quando o parceiro não segue o padrão.',
      html: `<p>Os problemas costumam aparecer só depois. Customizações feitas fora do padrão impedem ou encarecem a troca de release. Sem documentação, cada novo consultor precisa redescobrir o ambiente. E sem um canal com a TOTVS, um erro do produto fica sem dono.</p>
<p>A ASR recebe com frequência ambientes nessa situação. O caso da Procisa, cliente há 8 anos, inclui a recuperação completa do ambiente depois de um ataque cibernético.</p>`,
      lado: `<h3>Antes de contratar, pergunte</h3>${lista(['A consultoria é canal homologado TOTVS?', 'O SLA está no contrato?', 'Quem atende tem experiência no meu módulo?', 'As entregas vêm documentadas?'])}` },
    { tipo: 'faq', itens: [
      ['O que é um canal homologado TOTVS?', 'É um parceiro aprovado pela TOTVS para vender serviços sobre os sistemas dela, como implantação, suporte e treinamento, seguindo a metodologia da fabricante.'],
      ['Como saber se uma consultoria é homologada pela TOTVS?', 'Peça a comprovação à consultoria e confira com a TOTVS. A ASR Consult exibe o selo de Canal Homologado TOTVS e é parceira desde 2008.'],
      ['Consultoria homologada é mais cara?', 'Não necessariamente. O custo depende do escopo e do modelo de contratação. Customizações fora do padrão costumam sair mais caras depois, na hora de atualizar o sistema.'],
    ] },
  ],
  relacionados: ['quem-somos', 'atualizacao-protheus', 'treinamento-protheus'],
},

// ───────────────────────── ADVPL
{
  slug: 'desenvolvimento-advpl', menu: 'Desenvolvimento ADVPL', servico: 'Desenvolvimento ADVPL e fábrica de software Protheus',
  titulo: 'Desenvolvimento ADVPL e fábrica de software Protheus | ASR Consult',
  descricao: 'Fábrica de software para TOTVS Protheus: rotinas, relatórios e integrações em ADVPL alinhados às regras da sua empresa, documentados e no padrão TOTVS.',
  olho: 'Desenvolvimento ADVPL',
  h1: 'Desenvolvimento ADVPL para <em>processos que o padrão não cobre.</em>',
  apoio: 'Rotinas, relatórios e integrações em ADVPL feitos para as regras da sua empresa, com desempenho, estabilidade e documentação no padrão TOTVS.',
  fatos: [['Linguagem', 'ADVPL'], ['Entregas', 'Rotinas, relatórios e integrações'], ['Padrão', 'Documentação TOTVS'], ['Equipe', 'Desenvolvedores sêniores']],
  blocos: [
    { tipo: 'texto', olho: 'Fábrica de software', titulo: 'Desenvolvimento para processos únicos.',
      html: `<p>Todo Protheus tem pontos em que o padrão não atende: uma regra comercial própria, um relatório que a diretoria pede, uma integração com um sistema que só a sua empresa usa. É aí que entra o desenvolvimento em ADVPL, a linguagem do Protheus.</p>
<p>O time técnico da ASR desenvolve dentro das regras da TOTVS, usando pontos de entrada e as estruturas previstas pelo sistema. Assim a customização continua funcionando quando o Protheus é atualizado.</p>
${lista(['Rotinas e telas novas no Protheus', 'Relatórios e consultas sob medida', 'Integrações com outros sistemas', 'Automação de processos repetitivos', 'Revisão e correção de customizações antigas', 'Entregas rápidas e documentadas'])}`,
      lado: `<h3>Cases</h3><p>Automação de processos de RH na Würth e automação do App Meu RH na Avacy.</p><a class="btn btn--ciano" href="#contato">Pedir uma estimativa</a>` },
    { tipo: 'passos', olho: 'Como funciona', titulo: 'Da especificação à entrega documentada.',
      itens: [
        ['Especificação', 'O consultor funcional descreve a regra com a área e confirma se o padrão já resolve.'],
        ['Estimativa', 'Horas e prazo fechados antes de começar.'],
        ['Desenvolvimento', 'Código em ADVPL no padrão TOTVS, em ambiente de teste.'],
        ['Homologação', 'A área testa com dados reais e aprova.'],
        ['Entrega', 'Publicação em produção com documentação técnica e funcional.'],
      ] },
    { tipo: 'faq', itens: [
      ['O que é ADVPL?', 'ADVPL (Advanced Protheus Language) é a linguagem de programação do TOTVS Protheus. Com ela se criam rotinas, relatórios, telas e integrações dentro do sistema.'],
      ['Customização atrapalha a atualização do Protheus?', 'Só quando é feita fora do padrão. Desenvolvimentos que usam os pontos de entrada e as regras da TOTVS seguem funcionando depois da troca de release.'],
      ['A ASR corrige customizações feitas por outra empresa?', 'Sim. A ASR revisa, documenta e corrige customizações existentes, o que costuma ser o primeiro passo antes de uma atualização.'],
    ] },
  ],
  relacionados: ['integracao-protheus', 'atualizacao-protheus', 'projeto-horas-fechadas'],
},

// ───────────────────────── INTEGRAÇÃO
{
  slug: 'integracao-protheus', menu: 'Integração de sistemas', servico: 'Integração do TOTVS Protheus com outros sistemas',
  titulo: 'Integração do Protheus com outros sistemas | ASR Consult',
  descricao: 'Integração do TOTVS Protheus com bancos (DDA e PIX), ponto eletrônico, saúde ocupacional (SOC), coletores ACD, Power BI e outros ERPs. Canal homologado TOTVS.',
  olho: 'Integração de sistemas',
  h1: 'O Protheus integrado <em>ao resto da empresa.</em>',
  apoio: 'Bancos, ponto eletrônico, saúde ocupacional, coletores no estoque e outros sistemas trocando dados com o Protheus, sem digitação dupla.',
  fatos: [['Financeiro', 'DDA e PIX'], ['RH', 'e-Ponto e SOC'], ['Estoque', 'ACD Indústria 4.0'], ['Case', 'Integração Sênior na Iguá']],
  blocos: [
    { tipo: 'texto', olho: 'Por que integrar', titulo: 'Cada digitação dupla é um erro esperando para acontecer.',
      html: `<p>Quando o boleto do fornecedor é digitado de novo no financeiro, quando a batida de ponto é exportada em planilha para a folha ou quando o estoque é contado no papel, o erro aparece no fechamento. A integração tira essas passagens manuais do caminho.</p>
<p>A ASR integra o Protheus usando as ferramentas previstas pela TOTVS, como APIs e rotinas em ADVPL, e documenta cada integração para que ela continue funcionando nas próximas atualizações.</p>`,
      lado: `<h3>Case Iguá</h3><p>Implantação do eSocial, projeto de estoque com ACD e integração do Protheus com o sistema Sênior. Mais de 3 mil chamados atendidos.</p><a class="btn btn--ciano" href="#contato">Falar sobre integração</a>` },
    { tipo: 'cards', escuro: true, olho: 'Integrações', titulo: 'O que já conectamos ao Protheus.', intro: 'Integrações que a ASR implanta e mantém.',
      itens: [
        ['DDA entre bancos', 'Boletos de fornecedores entrando direto no contas a pagar.'],
        ['PIX', 'Recebimentos por PIX conciliados no financeiro.'],
        ['Protheus e e-Ponto', 'Ponto eletrônico ligado à folha de pagamento.'],
        ['Protheus e SOC', 'Saúde ocupacional e segurança do trabalho integradas ao RH.'],
        ['ACD Indústria 4.0', 'Coletores de dados no chão de fábrica e no estoque.'],
        ['Power BI', 'Painéis de gestão lendo os dados do ERP.'],
        ['Outros ERPs e sistemas', 'Troca de dados com sistemas de RH, logística e vendas, como a integração com o Sênior na Iguá.'],
        ['GFE, WMS e TMS', 'Frete, armazém e transporte conectados ao faturamento.'],
        ['App Meu RH', 'Portal do colaborador ligado ao RH do Protheus.'],
      ] },
    { tipo: 'faq', itens: [
      ['O Protheus tem API para integração?', 'Sim. O Protheus oferece APIs REST e permite criar integrações em ADVPL. A escolha depende do sistema do outro lado e do volume de dados.'],
      ['Integração quebra quando o Protheus é atualizado?', 'Integrações feitas com as ferramentas previstas pela TOTVS e documentadas atravessam as atualizações. A ASR testa as integrações em todo projeto de release.'],
      ['Quanto tempo leva uma integração?', 'Depende do sistema e da quantidade de dados. As horas e o prazo são fechados antes do início, no modelo de projeto de horas fechadas.'],
    ] },
  ],
  relacionados: ['desenvolvimento-advpl', 'power-bi-protheus', 'consultoria-totvs-protheus'],
},

// ───────────────────────── POWER BI
{
  slug: 'power-bi-protheus', menu: 'Power BI', servico: 'Power BI com TOTVS Protheus',
  titulo: 'Power BI com Protheus: painéis de gestão com os dados do ERP | ASR Consult',
  descricao: 'Integração do Power BI com o TOTVS Protheus: dashboards personalizados de vendas, financeiro, estoque e RH, análises self-service e menos risco com planilhas soltas.',
  olho: 'Power BI e Protheus',
  h1: 'Power BI com os dados do Protheus, <em>sem planilha no meio.</em>',
  apoio: 'Dashboards personalizados que leem o ERP, para a diretoria e os gestores decidirem com o número de hoje.',
  fatos: [['Fonte', 'Base do Protheus'], ['Painéis', 'Vendas, financeiro, estoque e RH'], ['Uso', 'Self-service por área'], ['Segurança', 'Acesso por perfil']],
  blocos: [
    { tipo: 'texto', olho: 'O que muda', titulo: 'Dados do ERP viram decisão.',
      html: `<p>Em muitas empresas, o relatório de gestão nasce de uma exportação do Protheus para o Excel, passa por várias mãos e chega à diretoria dias depois, com números que ninguém sabe de onde vieram. O Power BI conectado ao ERP acaba com essa etapa.</p>
<p>A ASR conecta o Power BI à base do Protheus, organiza os dados em modelos por área e monta os painéis com os gestores. Cada área consulta o próprio painel, com acesso controlado por perfil.</p>
${lista(['Transforma dados em vantagem competitiva', 'Reduz custos e riscos de segurança com planilhas soltas', 'Análises self-service em escala corporativa', 'Dashboards personalizados para encontrar novas oportunidades'])}`,
      lado: `<h3>Painéis comuns</h3><p>Faturamento e margem, contas a pagar e receber, giro de estoque, indicadores de RH e produtividade do suporte.</p><a class="btn btn--ciano" href="#contato">Montar meu painel</a>` },
    { tipo: 'passos', olho: 'Como funciona', titulo: 'Do dado no ERP ao painel na reunião.',
      itens: [
        ['Indicadores', 'Definição com os gestores do que cada painel precisa mostrar.'],
        ['Conexão', 'Leitura da base do Protheus com consultas otimizadas, sem pesar o ERP.'],
        ['Modelagem', 'Organização dos dados por área, com as regras de negócio da empresa.'],
        ['Painéis', 'Dashboards publicados com atualização automática e acesso por perfil.'],
      ] },
    { tipo: 'faq', itens: [
      ['Dá para ligar o Power BI direto no Protheus?', 'Sim. O Power BI lê a base de dados do Protheus. A ASR monta consultas otimizadas para não deixar o ERP lento.'],
      ['Os painéis atualizam sozinhos?', 'Sim. A atualização é agendada no Power BI, sem exportar planilhas.'],
      ['Cada gestor vê só a sua área?', 'Pode ver. O acesso é configurado por perfil, para cada pessoa ver só os dados que lhe cabem.'],
    ] },
  ],
  relacionados: ['integracao-protheus', 'consultoria-totvs-protheus', 'suporte-protheus'],
},

// ───────────────────────── TREINAMENTO
{
  slug: 'treinamento-protheus', menu: 'Treinamento', servico: 'Treinamento TOTVS Protheus',
  titulo: 'Treinamento Protheus e Universidade TOTVS | ASR Consult',
  descricao: 'Treinamento TOTVS Protheus por módulo, pela Universidade TOTVS ou customizado para os processos da sua empresa: financeiro, RH, PCP, fiscal, Configurador de Tributos e mais.',
  olho: 'Treinamento Protheus',
  h1: 'Treinamento Protheus para <em>a equipe usar o sistema sem depender do suporte.</em>',
  apoio: 'Cursos da Universidade TOTVS e turmas montadas com os processos da sua empresa, por módulo e por perfil de usuário.',
  fatos: [['Formato', 'Universidade TOTVS ou customizado'], ['Módulos', 'Todos os módulos TOTVS'], ['Instrutores', 'Consultores sêniores'], ['Base', 'Os processos da sua empresa']],
  blocos: [
    { tipo: 'texto', olho: 'Equipes preparadas', titulo: 'Usuário treinado abre menos chamado.',
      html: `<p>No Book de Atendimento da ASR, muitos chamados recorrentes têm a mesma causa: erro operacional do usuário. Liberação de pedido, emissão de nota, pedido de compra. O plano de ação para esses casos é treinamento.</p>
<p>A ASR oferece dois formatos. Os cursos da Universidade TOTVS seguem o conteúdo oficial da fabricante. As turmas customizadas usam os processos, cadastros e telas da própria empresa, o que encurta o caminho entre a aula e o trabalho.</p>`,
      lado: `<h3>Treinamentos mais pedidos</h3><p>Financeiro, RH e folha, PCP, fiscal, Configurador de Tributos, ativo fixo e SmartView.</p><a class="btn btn--ciano" href="#contato">Montar uma turma</a>` },
    { tipo: 'cards', escuro: true, olho: 'Módulos', titulo: 'Treinamento por área.', intro: 'Turmas por módulo e por perfil: usuário, usuário-chave e gestor.',
      itens: [
        ['Financeiro', 'Contas a pagar e receber, fluxo de caixa, DDA e conciliação.'],
        ['RH e folha', 'Folha de pagamento, ponto, eSocial e App Meu RH.'],
        ['Fiscal', 'Livros fiscais, apuração e Configurador de Tributos para a reforma.'],
        ['PCP e estoque', 'Ordens de produção, estoque, custos e ACD.'],
        ['Compras', 'Solicitação, cotação, pedido e aprovação.'],
        ['Relatórios', 'SmartView e consultas para o dia a dia.'],
      ] },
    { tipo: 'faq', itens: [
      ['A ASR dá cursos da Universidade TOTVS?', 'Sim. Como canal homologado, a ASR oferece treinamento pela Universidade TOTVS, além de turmas customizadas.'],
      ['O treinamento pode usar os dados da minha empresa?', 'Sim. Nas turmas customizadas, os exercícios usam os processos e cadastros da própria empresa, em ambiente de teste.'],
      ['Tem treinamento no Configurador de Tributos?', 'Sim. É um dos treinamentos mais procurados por causa da reforma tributária.'],
    ] },
  ],
  relacionados: ['implantacao-protheus', 'reforma-tributaria-protheus', 'consultoria-homologada-totvs'],
},

// ───────────────────────── HORAS FECHADAS
{
  slug: 'projeto-horas-fechadas', menu: 'Projetos com horas fechadas', servico: 'Projetos TOTVS Protheus com horas fechadas',
  titulo: 'Projetos Protheus com horas fechadas: escopo, prazo e valor definidos | ASR Consult',
  descricao: 'Projetos TOTVS Protheus com horas fechadas: escopo definido, cronograma e valor total antes de começar. Implantação de módulo, eSocial, ACD, release e integrações.',
  olho: 'Projetos com horas fechadas',
  h1: 'Projetos Protheus com <em>escopo, prazo e valor fechados.</em>',
  apoio: 'Para quem precisa de uma entrega específica: o escopo é definido, as horas são fechadas e o valor total é conhecido antes do início.',
  fatos: [['Escopo', 'Definido antes'], ['Valor', 'Total conhecido'], ['Prazo', 'Cronograma por fase'], ['Entrega', 'Documentada']],
  blocos: [
    { tipo: 'texto', olho: 'Quando usar', titulo: 'Para entregas com começo, meio e fim.',
      html: `<p>O projeto de horas fechadas funciona para demandas com escopo claro: implantar um módulo, trocar a release, integrar um sistema, adequar o Protheus a uma obrigação legal. A ASR levanta o que precisa ser feito, estima as horas e fecha o valor antes de começar.</p>
${lista(['Implantação de módulos: eSocial, App Meu RH, ACD, NFS-e, REINF, WMS', 'Projetos de release e atualização de ambiente', 'Adequação à reforma tributária', 'Integrações com outros sistemas', 'Desenvolvimentos em ADVPL'])}`,
      lado: `<h3>Exemplos reais</h3><p>Reestruturação de estoque, ACD e eSocial na Würth. Projetos de release, SQL, estoque e financeiro na Emplas.</p><a class="btn btn--ciano" href="#contato">Pedir uma proposta</a>` },
    { tipo: 'html', html: `<section class="secao claro" aria-labelledby="t-modelos" style="padding-top:0">
  <div class="wrap">
    <div class="secao__cabeca">
      <div><span class="olho mono">Comparação</span><h2 id="t-modelos" class="palavras" style="margin-top:14px">Os quatro jeitos de contratar a ASR.</h2></div>
      <p>Horas fechadas, banco de horas, sustentação e <a href="suporte-sob-demanda.html" style="color:var(--roxo-escuro);font-weight:600">sob demanda</a>, lado a lado.</p>
    </div>
    <div class="tabela-caixa">
      <table class="tabela">
        <thead><tr><th scope="col"></th><th scope="col">Horas fechadas</th><th scope="col">Banco de horas (AMS)</th><th scope="col">Sustentação</th><th scope="col">Sob demanda</th></tr></thead>
        <tbody>
          <tr><th scope="row">Para quê</th><td>Uma entrega específica</td><td>Demandas variadas ao longo do mês</td><td>Suporte contínuo da operação</td><td>Chamados avulsos</td></tr>
          <tr><th scope="row">Valor</th><td>Fechado antes do início</td><td>Pacote de horas</td><td>Mensal</td><td>Pelas horas usadas</td></tr>
          <tr><th scope="row">Prazo</th><td>Cronograma do projeto</td><td>Conforme a demanda</td><td>SLA mínimo de 85% em contrato</td><td>Sem contrato longo</td></tr>
          <tr><th scope="row">Relatório</th><td>Documentação da entrega</td><td>Consumo de horas</td><td>Book de Atendimento mensal</td><td>Registro de cada atendimento</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>` },
    { tipo: 'faq', itens: [
      ['E se o escopo mudar no meio do projeto?', 'A mudança é estimada à parte e só entra no projeto depois de aprovada. Assim o valor fechado no início continua valendo para o escopo original.'],
      ['Qual a diferença entre horas fechadas e banco de horas?', 'Nas horas fechadas, o valor é definido para uma entrega específica. No banco de horas (AMS), a empresa compra um pacote de horas e usa conforme as demandas aparecem.'],
    ] },
  ],
  relacionados: ['implantacao-protheus', 'suporte-protheus', 'desenvolvimento-advpl'],
},
...novas,
];

// Página-índice de serviços
export const hub = {
  slug: 'servicos', menu: 'Serviços',
  titulo: 'Serviços TOTVS Protheus: implantação, suporte, atualização e reforma | ASR Consult',
  descricao: 'Todos os serviços da ASR Consult para TOTVS Protheus e RM: consultoria, implantação, suporte com SLA, atualização, reforma tributária, ADVPL, integrações, Power BI e treinamento.',
  olho: 'Serviços',
  h1: 'Tudo o que o seu Protheus precisa, <em>com uma consultoria só.</em>',
  apoio: 'Da implantação ao suporte do dia a dia, passando por atualização, reforma tributária e desenvolvimento. Escolha o serviço para ver como funciona.',
};
