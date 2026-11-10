# ASR Consult

Modelo de site de página única para a ASR Consult (canal homologado TOTVS: implantação, suporte e consultoria Protheus). HTML e CSS estáticos, sem dependências em produção.

Veio do modelo usado na apresentação comercial (`trama/modelos/asrconsult/` no repositório da Halo Company). A seção de proposta e o questionário ficam só lá; este repositório tem apenas o site.

## Rodar no computador

```bash
node scripts/serve.mjs 5620
```

## Situação

- A página ainda tem `noindex, nofollow` e a etiqueta "Modelo · sugestão Halo Company". Tirar as duas quando o cliente aprovar e o domínio for apontado.
- O formulário de contato ainda não envia: falta definir o destino (e-mail ou planilha do comercial da ASR).
- Os números da seção de resultados são ilustrativos até a ASR mandar dados reais de clientes.
