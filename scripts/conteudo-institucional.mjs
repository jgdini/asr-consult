// Páginas institucionais: Trabalhe conosco e Privacidade e LGPD (política, cookies e formulário do titular).
// Os formulários ainda não enviam: falta definir o destino (e-mail do RH e do encarregado de dados).

const conf = t => `<mark class="confirmar" title="Dado a confirmar com a ASR">${t}</mark>`;
const consentimento = id => `<label class="consent" for="${id}"><input id="${id}" type="checkbox" required><span>Li a <a href="politica-de-privacidade.html">política de privacidade</a> e autorizo a ASR a usar estes dados para esta finalidade.</span></label>`;
const enviar = (txt, ok) => `<button class="btn btn--ciano" type="submit">${txt} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg></button>
      <p class="form__ok" role="status">${ok}</p>`;

export const institucional = [
// ───────────────────────── TRABALHE CONOSCO
{
  slug: 'trabalhe-conosco', menu: 'Trabalhe conosco', semContato: true,
  titulo: 'Trabalhe conosco | Vagas para consultor TOTVS Protheus | ASR Consult',
  descricao: 'Trabalhe na ASR Consult, consultoria homologada TOTVS desde 2008. Envie seu currículo para vagas de consultor funcional Protheus, desenvolvedor ADVPL, suporte e áreas administrativas.',
  olho: 'Trabalhe conosco',
  h1: 'Venha trabalhar com <em>Protheus de verdade.</em>',
  apoio: 'A ASR atende mais de 35 mil chamados por ano em empresas de 11 estados, com uma equipe só de profissionais sêniores. Se você conhece TOTVS, queremos conversar.',
  fatos: [['Equipe', '+40 consultores sêniores'], ['Sistemas', 'Protheus, RM e Fluig'], ['Sede', 'Mooca, São Paulo'], ['Clientes', '11 estados']],
  blocos: [
    { tipo: 'html', html: `<section class="secao claro" aria-labelledby="t-vagas">
  <div class="wrap corpo">
    <div class="texto">
      <span class="olho mono">Quem procuramos</span>
      <h2 id="t-vagas" class="palavras">Áreas em que a ASR contrata.</h2>
      <p>A ASR trabalha com projetos de implantação, sustentação com SLA em contrato e desenvolvimento em ADVPL. Quem entra no time atende clientes como Habib's, Würth e Bauminas e trabalha com consultores que estão no Protheus há muitos anos.</p>
      <ul class="lista-ok">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span><b>Consultoria funcional:</b> fiscal, financeiro, RH e folha, estoque, compras e PCP.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span><b>Desenvolvimento:</b> ADVPL, integrações e Power BI.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span><b>Suporte N1 e N2</b> para os contratos de sustentação.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span><b>Comercial e administrativo.</b></span></li>
      </ul>
      <p>Mesmo sem vaga aberta na sua área, o cadastro fica guardado e a ASR entra em contato quando surgir uma oportunidade com o seu perfil.</p>
    </div>
    <form class="form-pagina" data-modelo novalidate aria-label="Cadastro de currículo">
      <h3>Envie seu cadastro</h3>
      <div class="campos campos--2">
        <div><label for="tc-nome">Nome completo</label><input id="tc-nome" autocomplete="name" required></div>
        <div><label for="tc-email">E-mail</label><input id="tc-email" type="email" autocomplete="email" required></div>
        <div><label for="tc-tel">Telefone</label><input id="tc-tel" type="tel" autocomplete="tel"></div>
        <div><label for="tc-cidade">Cidade e estado</label><input id="tc-cidade" autocomplete="address-level2"></div>
      </div>
      <div><label for="tc-area">Área de interesse</label><select id="tc-area" required><option value="">Escolha uma área</option><option>Consultoria funcional</option><option>Desenvolvimento ADVPL</option><option>Suporte N1 e N2</option><option>Power BI e dados</option><option>Comercial</option><option>Administrativo</option></select></div>
      <fieldset><legend>Nível de experiência</legend><div class="opcoes">
        <label><input type="radio" name="tc-nivel" value="junior"><span>Júnior</span></label>
        <label><input type="radio" name="tc-nivel" value="pleno"><span>Pleno</span></label>
        <label><input type="radio" name="tc-nivel" value="senior"><span>Sênior</span></label>
      </div></fieldset>
      <fieldset><legend>Módulos que você domina</legend><div class="opcoes">
        ${['Fiscal', 'Financeiro', 'Contabilidade', 'RH e folha', 'Estoque e custos', 'Compras', 'PCP', 'Fluig', 'RM'].map(m => `<label><input type="checkbox" name="tc-mod" value="${m}"><span>${m}</span></label>`).join('')}
      </div></fieldset>
      <div><label for="tc-link">Link do currículo ou do LinkedIn</label><input id="tc-link" type="url" inputmode="url" placeholder="https://"></div>
      <div><label for="tc-msg">Conte um pouco da sua experiência</label><textarea id="tc-msg" placeholder="Empresas, projetos e versões do Protheus em que você trabalhou"></textarea></div>
      ${consentimento('tc-ok')}
      ${enviar('Enviar cadastro', 'Este é um modelo: o formulário ainda não envia. No site final, o cadastro chega ao RH da ASR.')}
    </form>
  </div>
</section>` },
  ],
},

// ───────────────────────── PRIVACIDADE E LGPD
{
  slug: 'politica-de-privacidade', menu: 'Privacidade e LGPD', semContato: true,
  titulo: 'Política de privacidade e LGPD | ASR Consult',
  descricao: 'Como a ASR Consult trata dados pessoais conforme a LGPD (Lei 13.709/2018): dados coletados, finalidades, cookies, direitos do titular e formulário para solicitações.',
  olho: 'Privacidade e LGPD',
  h1: 'Como a ASR cuida <em>dos seus dados pessoais.</em>',
  apoio: 'Esta política explica quais dados o site coleta, para que eles servem, como usamos cookies e como você pode exercer os seus direitos previstos na Lei Geral de Proteção de Dados.',
  fatos: [['Lei', 'LGPD · Lei 13.709/2018'], ['Controlador', 'ASR Consult'], ['CNPJ', '13.250.313/0001-40'], ['Resposta', 'Até 15 dias']],
  blocos: [
    { tipo: 'html', html: `<section class="secao claro" aria-labelledby="t-politica">
  <div class="wrap politica texto">
    <span class="olho mono">Política de privacidade</span>
    <h2 id="t-politica">Política de privacidade da ASR Consult</h2>
    <p class="politica__data mono">Última atualização: novembro de 2026</p>

    <h3>1. Quem é o controlador</h3>
    <p>A ASR Consult, inscrita no CNPJ 13.250.313/0001-40, com sede na Rua da Mooca, 4415, São Paulo (SP), CEP 03165-003, é a controladora dos dados pessoais coletados neste site.</p>

    <h3>2. Quais dados coletamos</h3>
    <p>Coletamos apenas os dados que você informa nos formulários:</p>
    <ul>
      <li><b>Contato comercial:</b> nome, empresa, e-mail, telefone, sistema que a empresa usa e a mensagem enviada.</li>
      <li><b>Trabalhe conosco:</b> nome, e-mail, telefone, cidade, área de interesse, experiência e o link do currículo ou do LinkedIn.</li>
      <li><b>Solicitações de titular:</b> nome, e-mail, telefone e a descrição do pedido.</li>
    </ul>
    <p>O site não pede documentos, dados bancários nem dados sensíveis.</p>

    <h3>3. Para que usamos</h3>
    <ul>
      <li>Responder ao seu contato e preparar propostas comerciais.</li>
      <li>Avaliar candidaturas para vagas na ASR.</li>
      <li>Atender pedidos sobre os seus dados pessoais.</li>
      <li>Cumprir obrigações legais e regulatórias.</li>
    </ul>
    <p>As bases legais são o seu consentimento, a execução de procedimentos preliminares a um contrato, o legítimo interesse da ASR em responder a quem a procura e o cumprimento de obrigação legal, conforme o artigo 7º da LGPD.</p>

    <h3>4. Com quem compartilhamos</h3>
    <p>A ASR não vende dados pessoais. Os dados podem ser tratados por fornecedores que prestam serviços à ASR, como hospedagem do site e envio de e-mail, sempre limitados à finalidade do serviço. Também podem ser compartilhados com autoridades quando houver obrigação legal.</p>

    <h3>5. Por quanto tempo guardamos</h3>
    <p>Os dados de contato comercial ficam guardados enquanto houver relação comercial ou interesse em retomá-la. Os cadastros de candidatos ficam guardados por até 2 anos. Depois desses prazos, os dados são eliminados ou anonimizados, salvo quando a lei exigir a guarda por mais tempo.</p>

    <h3 id="politica-cookies">6. Cookies</h3>
    <p>Cookies são pequenos arquivos gravados no seu navegador. Este site pode usar cookies de medição de audiência, que mostram quantas pessoas visitam cada página e de onde elas vêm, sem identificar você pelo nome. Esses cookies só são ativados se você clicar em "Aceitar" no aviso de cookies.</p>
    <p>A sua escolha fica guardada no próprio navegador. Você pode mudar de ideia a qualquer momento em <button type="button" class="link-cookies" data-cookies-abrir>preferências de cookies</button> ou apagar os cookies nas configurações do navegador.</p>

    <h3>7. Seus direitos</h3>
    <p>Pelo artigo 18 da LGPD, você pode pedir à ASR, a qualquer momento:</p>
    <ul>
      <li>a confirmação de que tratamos os seus dados e o acesso a eles;</li>
      <li>a correção de dados incompletos, inexatos ou desatualizados;</li>
      <li>a anonimização, o bloqueio ou a eliminação de dados desnecessários;</li>
      <li>a portabilidade dos dados a outro fornecedor;</li>
      <li>a eliminação dos dados tratados com o seu consentimento;</li>
      <li>a informação sobre com quem compartilhamos os seus dados;</li>
      <li>a revogação do consentimento.</li>
    </ul>
    <p>Use o formulário abaixo. A ASR responde em até 15 dias.</p>

    <h3>8. Encarregado de dados</h3>
    <p>O encarregado pelo tratamento de dados pessoais da ASR é ${conf('nome do encarregado')}, que pode ser contatado pelo e-mail ${conf('e-mail do encarregado')}.</p>

    <h3>9. Segurança</h3>
    <p>A ASR adota medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda ou vazamento, como conexão criptografada no site e acesso restrito às informações.</p>

    <h3>10. Mudanças nesta política</h3>
    <p>Esta política pode ser atualizada. A data da última atualização fica no topo desta página.</p>
  </div>
</section>

<section class="secao claro" id="solicitacao" aria-labelledby="t-titular" style="background:#EAF0F7">
  <div class="wrap corpo">
    <div class="texto">
      <span class="olho mono">Formulário LGPD</span>
      <h2 id="t-titular" class="palavras">Solicitação do titular dos dados.</h2>
      <p>Use este formulário para pedir acesso, correção, eliminação ou qualquer outro direito previsto na LGPD. Para confirmar que o pedido é seu, a ASR pode pedir uma confirmação pelo e-mail informado.</p>
      <p>O prazo de resposta é de até 15 dias a partir do recebimento.</p>
    </div>
    <form class="form-pagina" data-modelo novalidate aria-label="Solicitação do titular de dados">
      <div class="campos campos--2">
        <div><label for="lg-nome">Nome completo</label><input id="lg-nome" autocomplete="name" required></div>
        <div><label for="lg-email">E-mail</label><input id="lg-email" type="email" autocomplete="email" required></div>
        <div><label for="lg-tel">Telefone</label><input id="lg-tel" type="tel" autocomplete="tel"></div>
        <div><label for="lg-rel">Sua relação com a ASR</label><select id="lg-rel"><option value="">Escolha</option><option>Cliente</option><option>Ex-cliente</option><option>Candidato a vaga</option><option>Fornecedor ou parceiro</option><option>Visitante do site</option><option>Outro</option></select></div>
      </div>
      <div><label for="lg-tipo">O que você quer pedir?</label><select id="lg-tipo" required><option value="">Escolha um pedido</option><option>Confirmar se a ASR trata meus dados</option><option>Acessar meus dados</option><option>Corrigir meus dados</option><option>Anonimizar, bloquear ou eliminar dados</option><option>Portabilidade dos dados</option><option>Saber com quem meus dados foram compartilhados</option><option>Revogar meu consentimento</option><option>Outro pedido</option></select></div>
      <div><label for="lg-msg">Descreva o pedido</label><textarea id="lg-msg" required></textarea></div>
      <label class="consent" for="lg-ok"><input id="lg-ok" type="checkbox" required><span>Declaro que sou o titular dos dados ou o representante legal dele.</span></label>
      ${enviar('Enviar solicitação', 'Este é um modelo: o formulário ainda não envia. No site final, o pedido chega ao encarregado de dados da ASR.')}
    </form>
  </div>
</section>` },
  ],
},
];
