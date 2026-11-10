# ASR Consult

Site da ASR Consult (canal homologado TOTVS: implantação, suporte e consultoria Protheus). HTML e CSS estáticos, sem dependências em produção.

Veio do modelo usado na apresentação comercial (`trama/modelos/asrconsult/` no repositório da Halo Company). A seção de proposta e o questionário ficam só lá; este repositório tem apenas o site.

## Rodar no computador

```bash
node scripts/serve.mjs 5620
```

## Páginas

A home (`index.html`) é a fonte do CSS, do cabeçalho, do contato, do rodapé e do script. As páginas internas são geradas:

- `scripts/conteudo.mjs`: textos de cada página (quem somos, serviços, FAQ). `conteudo-novas.mjs` tem IA, BPO, alocação, sob demanda e Fluig; `conteudo-fiscal.mjs` tem Configurador de Tributos, NFS-e e EFD-Reinf (a ASR não terá blog: temas técnicos viram páginas).
- `scripts/paginas.mjs`: monta as páginas, o schema (serviço, trilha e FAQ), `sitemap.xml`, `robots.txt` e `llms.txt`.

Depois de editar a home ou o conteúdo:

```bash
node scripts/paginas.mjs
```

Fontes do conteúdo: a apresentação da ASR (`Arquivos/`, fora do Git por causa do tamanho) e a pesquisa de buscas em `trama/analise/asrconsult/mercado.json`.

## Antes de lançar

- Trocar `PUBLICAR = false` para `true` em `scripts/paginas.mjs` e tirar o `noindex` e a etiqueta "Modelo" da home.
- A foto do Rodrigo vem de `Arquivos/Foto Rodrigo.jpeg`, cortada em 4:5 para `assets/img/rodrigo-silvestre-*.webp`.
- Confirmar com a ASR o uso do nome dos clientes nos cases e na lista de empresas.
- Definir o destino do formulário de contato.
- Os gráficos da seção "Resultados" da home e os números da central de suporte são ilustrativos.
