# israelfsilva.com

Site pessoal em [Astro](https://astro.build) + MDX.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Estrutura

- `src/data/site.ts` — experiência, formação, projetos e contato (PT/EN)
- `src/i18n.ts` — textos da interface e formatação de datas
- `src/content/blog/<pt|en>/<slug>.mdx` — posts. A tradução usa o mesmo `<slug>` na pasta do outro idioma; o toggle PT/EN leva direto a ela.
- `src/components/TabularDemo.astro` — exemplo de demo interativa embutida num post

Rotas: `/`, `/en`, `/blog/<slug>`, `/en/blog/<slug>`. Tema e idioma ficam em `localStorage` (`is-theme`, `is-lang`).

### Novo post

```mdx
---
title: Título
description: Uma linha.
date: 2026-10-01
draft: true   # opcional: aparece só no `npm run dev`
---

Texto. Cada `## Seção` entra no índice lateral.
```
