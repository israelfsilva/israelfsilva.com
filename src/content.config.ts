import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts em src/content/blog/<lang>/<slug>.mdx.
// A tradução de um post usa o mesmo <slug> na pasta do outro idioma.
const blog = defineCollection({
  loader: glob({ pattern: '*/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
