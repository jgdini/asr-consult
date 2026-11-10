// Pedaços de HTML usados nos textos.
const ok = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
export const lista = itens => `<ul class="lista-ok">${itens.map(i => `<li>${ok}<span>${i}</span></li>`).join('')}</ul>`;
