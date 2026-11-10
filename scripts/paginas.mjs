// Gera as páginas internas a partir do index.html (CSS, cabeçalho, contato, rodapé e script)
// e do conteúdo em scripts/conteudo.mjs. Também reescreve sitemap.xml, robots.txt e llms.txt.
// Depois de editar a home ou o conteúdo, rode: node scripts/paginas.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { paginas, hub } from './conteudo.mjs';

// Enquanto o cliente não aprovar e o domínio não apontar, tudo sai com noindex.
const PUBLICAR = false;
const BASE = 'https://www.asrconsult.com.br/';
const ORG_ID = BASE + '#organizacao';

const home = readFileSync('index.html', 'utf8');
const pega = (ini, fim, inclui = true) => {
  const a = home.indexOf(ini), b = home.indexOf(fim, a);
  if (a < 0 || b < 0) throw new Error('não achei ' + ini);
  return home.slice(a, inclui ? b + fim.length : b);
};
const css = pega('<style>', '</style>').replace(/^<style>|<\/style>$/g, '');
const cabecalho = pega('<div class="progresso"', '</header>').replace('<a class="marca" href="#"', '<a class="marca" href="index.html"');
const contato = pega('<section class="secao claro" id="contato"', '</section>');
const rodape = pega('<footer class="rodape">', '</footer>');
const flutuantes = pega('<div class="modelo-tag', '<script>', false);
const script = pega('<script>\n(function', '</script>');

const seta = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const semTag = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const porSlug = Object.fromEntries([...paginas, hub].map(p => [p.slug, p]));

const cssInterno = `
/* ---- Páginas internas ---- */
.hero--int .wrap { padding-top: 36px; padding-bottom: 56px; }
.hero--int h1 { margin-top: 18px; font-size: clamp(2rem, 6vw, 3.5rem); }
.trilha { display: flex; flex-wrap: wrap; gap: 8px; color: var(--texto-e2); margin: 0 0 22px; }
.trilha a { text-decoration: none; } .trilha a:hover { color: var(--branco); }
.trilha [aria-current] { color: var(--texto-e); }
.fatos dl { margin: 0; }
.fatos dl div { display: grid; gap: 4px; padding: 15px 18px; border-bottom: 1px solid var(--linha-e); }
.fatos dl div:last-child { border-bottom: 0; }
.fatos dt { color: var(--texto-e2); }
.fatos dd { margin: 0; font-weight: 600; color: var(--branco); }
.numeros--int { padding-top: 8px; padding-bottom: 72px; }
.corpo { display: grid; gap: 40px; }
.corpo > * { min-width: 0; }
.texto h2 { margin: 14px 0 22px; font-size: clamp(1.7rem, 3.8vw, 2.5rem); }
.texto p { margin: 0 0 16px; max-width: 66ch; color: var(--tinta-2); font-size: 1.04rem; }
.texto a { color: var(--roxo-escuro); font-weight: 600; }
.lista-ok { list-style: none; margin: 22px 0; padding: 0; display: grid; gap: 12px; }
.lista-ok li { display: grid; grid-template-columns: 24px 1fr; gap: 12px; }
.lista-ok svg { width: 20px; height: 20px; margin-top: 3px; color: var(--roxo-escuro); }
.caixa { position: relative; overflow: hidden; border-radius: 16px; padding: 30px 26px; background: radial-gradient(420px 260px at 100% 0%, rgba(164,77,255,.35), transparent 70%), var(--n900); color: var(--texto-e); border: 1px solid var(--linha-e2); }
.caixa h3 { margin-bottom: 12px; font-size: 1.25rem; }
.caixa p { margin: 0 0 14px; color: var(--texto-e2); }
.caixa b { color: var(--branco); }
.caixa a:not(.btn) { color: var(--ciano); }
.caixa .btn { margin-top: 8px; }
.caixa .lista-ok li { color: var(--texto-e); font-size: .95rem; }
.caixa .lista-ok svg { color: var(--ciano); }
.fatos-lista { margin: 0 0 12px; display: grid; }
.fatos-lista div { display: flex; flex-direction: column-reverse; padding: 12px 0; border-bottom: 1px solid var(--linha-e); }
.fatos-lista dt { color: var(--texto-e2); font-size: .88rem; }
.fatos-lista dd { margin: 0; font-size: 2rem; font-weight: 800; letter-spacing: -.03em; color: var(--branco); }
.cartoes { display: grid; gap: 14px; }
.cartao { border-radius: 14px; padding: 26px 24px; background: var(--branco); border: 1px solid var(--linha-c); }
.escuro .cartao { background: rgba(16,40,92,.35); border-color: var(--linha-e); }
.cartao__n { display: inline-grid; place-items: center; width: 40px; height: 40px; border-radius: 10px; background: var(--grad-roxo); color: var(--branco); }
.cartao h3 { margin: 16px 0 8px; font-size: 1.15rem; }
.cartao p { margin: 0; color: var(--tinta-2); font-size: .95rem; }
.escuro .cartao p { color: var(--texto-e2); }
.passos { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; counter-reset: p; }
.passos li { counter-increment: p; padding: 26px 24px; border-radius: 14px; background: var(--branco); border: 1px solid var(--linha-c); }
.passos li::before { content: counter(p, decimal-leading-zero); display: block; margin-bottom: 14px; font-family: "Plex Mono", monospace; font-size: .8rem; color: var(--roxo-escuro); }
.passos b { display: block; margin-bottom: 6px; font-size: 1.1rem; }
.passos span { color: var(--tinta-2); font-size: .95rem; }
.faq { display: grid; gap: 10px; max-width: 920px; }
.faq details { background: var(--branco); border: 1px solid var(--linha-c); border-radius: 12px; }
.faq summary { position: relative; cursor: pointer; list-style: none; padding: 20px 56px 20px 22px; font-weight: 600; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::after { content: "+"; position: absolute; right: 22px; top: 50%; transform: translateY(-50%); font-size: 1.5rem; line-height: 1; color: var(--roxo-escuro); transition: transform .3s var(--ease); }
.faq details[open] summary::after { transform: translateY(-50%) rotate(45deg); }
.faq details p { margin: 0; padding: 0 22px 22px; color: var(--tinta-2); }
.confirmar { background: rgba(255,196,107,.2); color: inherit; border: 1px dashed #E0A23B; border-radius: 4px; padding: 0 4px; }
.pessoa { display: grid; gap: 40px; align-items: center; }
.pessoa__foto { position: relative; margin: 0; display: grid; place-items: center; width: 100%; max-width: 420px; aspect-ratio: 4 / 5; border-radius: 18px; overflow: hidden; background: radial-gradient(circle at 30% 20%, rgba(0,219,255,.45), transparent 55%), var(--grad-roxo); border: 1px solid var(--linha-e2); }
.pessoa__iniciais { font-size: clamp(4rem, 14vw, 7rem); font-weight: 800; letter-spacing: -.05em; color: rgba(255,255,255,.92); }
.pessoa__foto img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.pessoa__foto figcaption { z-index: 1; padding: 6px 10px; border-radius: 6px; background: rgba(4,11,34,.72);  position: absolute; left: 14px; bottom: 14px; color: var(--branco); }
.pessoa p { max-width: 62ch; color: var(--texto-e2); }
.pessoa .pessoa__cargo { margin: 12px 0 20px; color: var(--ciano); }
.trajetoria { list-style: none; margin: 26px 0; padding: 0; }
.trajetoria li { display: grid; grid-template-columns: 96px 1fr; gap: 14px; padding: 12px 0; border-top: 1px solid var(--linha-e); }
.trajetoria b { color: var(--ciano); }
.pessoa__contato { display: flex; flex-wrap: wrap; gap: 12px; }
.cases { display: grid; gap: 12px; }
.case { padding: 24px 22px; border-radius: 14px; background: var(--branco); border: 1px solid var(--linha-c); }
.case h3 { font-size: 1.15rem; }
.case__num { display: block; margin-top: 14px; font-size: 2rem; font-weight: 800; letter-spacing: -.03em; line-height: 1.1; color: var(--roxo-escuro); }
.case__num small { font-size: .8rem; font-weight: 600; letter-spacing: 0; color: var(--tinta-2); }
.case p { margin: 10px 0 0; color: var(--tinta-2); font-size: .93rem; }
.clientes__titulo { margin: 56px 0 18px; font-size: 1.2rem; }
.clientes { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.clientes--escuro { margin: 22px 0 6px; }
.clientes.clientes--escuro li { background: rgba(16,40,92,.5); border-color: var(--linha-e2); color: var(--texto-e); }
.clientes li { padding: 8px 14px; border-radius: 999px; background: var(--branco); border: 1px solid var(--linha-c); font-size: .9rem; font-weight: 500; }
.book { display: grid; gap: 40px; align-items: center; }
.book p { max-width: 54ch; color: var(--texto-e2); }
.book__quadro { margin: 0; overflow-x: auto; border-radius: 14px; background: var(--branco); color: var(--tinta); box-shadow: 0 40px 80px -40px rgba(0,0,0,.8); }
.book__topo { display: flex; justify-content: space-between; padding: 14px 18px; background: var(--grad-roxo); color: var(--branco); }
.book__quadro table { width: 100%; min-width: 520px; border-collapse: collapse; font-size: .86rem; }
.book__quadro th, .book__quadro td { padding: 12px 14px; text-align: left; border-bottom: 1px solid var(--linha-c); }
.book__quadro th { font-size: .7rem; text-transform: uppercase; letter-spacing: .05em; color: var(--tinta-2); }
.book__quadro td i { display: inline-block; width: 9px; height: 9px; margin-right: 8px; border-radius: 50%; background: #2DBE6C; }
.book__quadro figcaption { padding: 12px 18px; color: var(--tinta-2); }
.calendario { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.calendario li { padding: 26px 22px; border-radius: 14px; border: 1px solid var(--linha-e); background: rgba(16,40,92,.35); }
.calendario b { display: block; margin-bottom: 10px; font-family: "Plex Mono", monospace; font-weight: 500; font-size: 1.3rem; color: var(--ciano); }
.calendario span { color: var(--texto-e2); }
.tabela-caixa { overflow-x: auto; border: 1px solid var(--linha-c); border-radius: 14px; background: var(--branco); }
.tabela { width: 100%; min-width: 760px; border-collapse: collapse; }
.tabela th, .tabela td { padding: 16px 18px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--linha-c); font-size: .95rem; }
.tabela thead th { background: var(--n900); color: var(--branco); font-weight: 600; }
.tabela tbody th { font-family: "Plex Mono", monospace; font-weight: 500; font-size: .72rem; text-transform: uppercase; letter-spacing: .06em; color: var(--roxo-escuro); }
.tabela td { color: var(--tinta-2); }
@media (min-width: 640px) {
  .cartoes, .passos, .cases { grid-template-columns: 1fr 1fr; }
  .calendario { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1000px) {
  .hero--int .wrap { grid-template-columns: minmax(0, 1.3fr) minmax(0, .7fr); padding-top: 56px; padding-bottom: 88px; }
  .corpo { grid-template-columns: minmax(0, 1.45fr) minmax(0, .75fr); gap: 72px; align-items: start; }
  .caixa { position: sticky; top: 96px; }
  .cartoes, .passos { grid-template-columns: repeat(3, 1fr); }
  .cases { grid-template-columns: repeat(4, 1fr); }
  .calendario { grid-template-columns: repeat(4, 1fr); }
  .pessoa { grid-template-columns: .7fr 1.3fr; gap: 72px; }
  .book { grid-template-columns: .9fr 1.1fr; gap: 64px; }
}`;

// ---------- blocos ----------
let nSec = 0;
const cabeca = (olho, titulo, intro) => {
  const id = 't-b' + (++nSec);
  return [id, `<div class="secao__cabeca">
      <div><span class="olho mono">${olho}</span><h2 id="${id}" class="palavras" style="margin-top:14px">${titulo}</h2></div>
      ${intro ? `<p>${intro}</p>` : '<p></p>'}
    </div>`];
};
const numeros = b => `<div class="numeros numeros--int"><div class="wrap"><dl>
${b.itens.map(([v, pre, rot]) => `      <div><dt class="mono">${rot}</dt><dd>${pre ? `<small>${pre}</small>` : ''}<span data-conta="${v}">${(+v).toLocaleString('pt-BR')}</span></dd></div>`).join('\n')}
    </dl></div></div>`;
const blocos = {
  numeros: b => `<section class="escuro" aria-label="Números da ASR">${numeros(b)}</section>`,
  texto: b => { const id = 't-b' + (++nSec); return `<section class="secao claro" aria-labelledby="${id}">
  <div class="wrap corpo">
    <div class="texto"><span class="olho mono">${b.olho}</span><h2 id="${id}" class="palavras">${b.titulo}</h2>
${b.html}
    </div>
    <aside class="caixa sobe">${b.lado}</aside>
  </div>
</section>`; },
  cards: b => { const [id, c] = cabeca(b.olho, b.titulo, b.intro); return `<section class="secao ${b.escuro ? 'escuro' : 'claro'}" aria-labelledby="${id}">
  <div class="wrap">
    ${c}
    <div class="cartoes">
${b.itens.map(([t, p], i) => `      <article class="cartao sobe" style="--i:${i % 3}"><span class="cartao__n mono">${String(i + 1).padStart(2, '0')}</span><h3>${t}</h3><p>${p}</p></article>`).join('\n')}
    </div>
  </div>
</section>`; },
  passos: b => { const [id, c] = cabeca(b.olho, b.titulo, b.intro); return `<section class="secao claro" aria-labelledby="${id}" style="background:#EAF0F7">
  <div class="wrap">
    ${c}
    <ol class="passos">
${b.itens.map(([t, p], i) => `      <li class="sobe" style="--i:${i % 3}"><b>${t}</b><span>${p}</span></li>`).join('\n')}
    </ol>
  </div>
</section>`; },
  faq: b => { const [id, c] = cabeca('Perguntas frequentes', 'Dúvidas comuns.', ''); return `<section class="secao claro" id="faq" aria-labelledby="${id}">
  <div class="wrap">
    ${c}
    <div class="faq">
${b.itens.map(([q, r]) => `      <details><summary>${q}</summary><p>${r}</p></details>`).join('\n')}
    </div>
  </div>
</section>`; },
  html: b => b.html,
};

const relacionados = p => !p.relacionados ? '' : `<section class="secao escuro" aria-labelledby="t-rel">
  <div class="wrap">
    <div class="secao__cabeca"><div><span class="olho mono">Veja também</span><h2 id="t-rel" class="palavras" style="margin-top:14px">Serviços relacionados.</h2></div><p><a href="servicos.html" style="color:var(--ciano)">Ver todos os serviços</a></p></div>
    <div class="solucoes">
${p.relacionados.map((s, i) => { const r = porSlug[s]; return `      <a class="solucao sobe" style="--i:${i}" href="${s}.html"><span class="mono">${String(i + 1).padStart(2, '0')}</span><b>${r.menu}</b><span>${semTag(r.apoio).split('. ')[0]}.</span></a>`; }).join('\n')}
    </div>
  </div>
</section>`;

// ---------- schema ----------
const org = { '@type': 'Organization', '@id': ORG_ID, name: 'ASR Consult', url: BASE };
const schema = p => {
  const url = BASE + p.slug + '.html';
  const g = [
    { '@type': 'WebPage', '@id': url, url, name: p.titulo, description: p.descricao, inLanguage: 'pt-BR', isPartOf: { '@type': 'WebSite', name: 'ASR Consult', url: BASE }, about: { '@id': ORG_ID } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE },
      ...(p.slug !== 'servicos' && p.slug !== 'quem-somos' ? [{ '@type': 'ListItem', position: 2, name: 'Serviços', item: BASE + 'servicos.html' }] : []),
      { '@type': 'ListItem', position: p.slug !== 'servicos' && p.slug !== 'quem-somos' ? 3 : 2, name: p.menu, item: url } ] },
  ];
  if (p.servico) g.push({ '@type': 'Service', name: p.servico, serviceType: p.servico, description: p.descricao, provider: org, areaServed: { '@type': 'Country', name: 'Brasil' }, url });
  if (p.slug === 'quem-somos') {
    g[0]['@type'] = 'AboutPage';
    g.push({ ...org, foundingDate: '2008', telephone: '+55-11-97996-7825', address: { '@type': 'PostalAddress', streetAddress: 'Rua da Mooca, 4415', addressLocality: 'São Paulo', addressRegion: 'SP', postalCode: '03165-003', addressCountry: 'BR' }, numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 40 }, founder: [{ '@type': 'Person', name: 'Rodrigo Miranda Silvestre', jobTitle: 'Diretor executivo', image: BASE + 'assets/img/rodrigo-silvestre-720.webp', email: 'rodrigo.silvestre@asrconsult.com.br', sameAs: 'https://www.linkedin.com/in/rodrigo-miranda-silvestre/' }, { '@type': 'Person', name: 'Andreia' }] });
  }
  const faq = (p.blocos || []).find(b => b.tipo === 'faq');
  if (faq) g.push({ '@type': 'FAQPage', mainEntity: faq.itens.map(([q, r]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: r } })) });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': g });
};

// ---------- página ----------
const pagina = (p, corpo) => {
  nSec = 0;
  const url = BASE + p.slug + '.html';
  const meio = p.slug === 'servicos' || p.slug === 'quem-somos' ? '' : '<a href="servicos.html">Serviços</a><span aria-hidden="true">/</span>';
  const fatos = p.fatos ? `<aside class="painel fatos" aria-label="Em resumo">
      <div class="painel__topo"><span class="mono">Em resumo</span><span class="painel__luzes" aria-hidden="true"><i></i><i></i><i></i></span></div>
      <dl>${p.fatos.map(([k, v]) => `<div><dt class="mono">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    </aside>` : '';
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="${PUBLICAR ? 'index, follow, max-image-preview:large' : 'noindex, nofollow'}">
<title>${p.titulo}</title>
<meta name="description" content="${esc(p.descricao)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="ASR Consult">
<meta property="og:title" content="${esc(p.titulo)}">
<meta property="og:description" content="${esc(p.descricao)}">
<meta property="og:url" content="${url}">
<meta name="theme-color" content="#040B22">
<link rel="preload" href="assets/jakarta.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/plexmono.woff2" as="font" type="font/woff2" crossorigin>
<script type="application/ld+json">${schema(p)}</script>
<style>${css}${cssInterno}
</style>
</head>
<body>

${cabecalho}

<main>
<section class="hero hero--int" aria-labelledby="titulo">
  <div class="wrap">
    <div>
      <nav class="trilha mono" aria-label="Você está em"><a href="index.html">Início</a><span aria-hidden="true">/</span>${meio}<span aria-current="page">${p.menu}</span></nav>
      <span class="olho mono">${p.olho}</span>
      <h1 id="titulo">${p.h1}</h1>
      <p class="hero__apoio">${p.apoio}</p>
      <div class="hero__acoes">
        <a class="btn btn--ciano" href="#contato">Falar com um especialista ${seta}</a>
        <a class="btn btn--linha" href="https://wa.me/5511979967825" target="_blank" rel="noopener">Chamar no WhatsApp</a>
      </div>
    </div>
    ${fatos}
  </div>
</section>

${corpo}

${contato}
</main>

${rodape}

${flutuantes}${script}
</body>
</html>
`;
};

for (const p of paginas) {
  const corpo = p.blocos.map(b => blocos[b.tipo](b)).join('\n\n') + '\n\n' + relacionados(p);
  writeFileSync(p.slug + '.html', pagina(p, corpo));
}

// Índice de serviços
const cardsHub = paginas.filter(p => p.servico).map((p, i) => `      <a class="servico sobe" style="--i:${i % 3}" href="${p.slug}.html"><span class="mono">${String(i + 1).padStart(2, '0')}</span><h3>${p.menu}</h3><p>${p.apoio}</p><span class="servico__mais">Saiba mais ${seta}</span></a>`).join('\n');
writeFileSync('servicos.html', pagina(hub, `<section class="secao claro" aria-labelledby="t-lista">
  <div class="wrap">
    <div class="secao__cabeca"><div><span class="olho mono">Frentes de atuação</span><h2 id="t-lista" class="palavras" style="margin-top:14px">Integramos tecnologia, processos e estratégia.</h2></div><p>Cada serviço pode ser contratado como projeto de horas fechadas, banco de horas (AMS) ou sustentação com SLA em contrato. <a href="projeto-horas-fechadas.html" style="color:var(--roxo-escuro);font-weight:600">Compare os modelos</a>.</p></div>
    <div class="servicos">
${cardsHub}
    </div>
  </div>
</section>`));

// sitemap, robots e llms.txt
const hoje = new Date().toISOString().slice(0, 10);
const urls = ['', 'servicos.html', ...paginas.map(p => p.slug + '.html')];
writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${BASE}${u}</loc><lastmod>${hoje}</lastmod></url>`).join('\n')}
</urlset>
`);
writeFileSync('robots.txt', PUBLICAR ? `User-agent: *
Allow: /

# Buscadores de IA liberados
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${BASE}sitemap.xml
` : `# Modelo em aprovação: não indexar até o lançamento.
User-agent: *
Disallow: /
`);
writeFileSync('llms.txt', `# ASR Consult

> Consultoria homologada TOTVS desde 2008, com sede em São Paulo (Rua da Mooca, 4415). Implantação, suporte e sustentação com SLA mínimo de 85% em contrato, atualização de release, reforma tributária, desenvolvimento ADVPL, integrações, Power BI e treinamento em TOTVS Protheus e RM. Mais de 480 projetos entregues, mais de 35 mil atendimentos por ano, mais de 40 consultores sêniores e clientes em 11 estados.

Contato comercial: (11) 97996-7825 · Suporte: (11) 2659-5360 · rodrigo.silvestre@asrconsult.com.br

## Páginas

- [Início](${BASE}): visão geral da ASR e dos serviços
- [Quem somos](${BASE}quem-somos.html): história, Rodrigo Silvestre, modelo de trabalho e cases
- [Serviços](${BASE}servicos.html): índice de todos os serviços
${paginas.filter(p => p.servico).map(p => `- [${p.menu}](${BASE}${p.slug}.html): ${p.descricao}`).join('\n')}
`);

console.log('Geradas', paginas.length + 1, 'páginas + sitemap, robots e llms.txt');
