import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    period: z.string(),
    role: z.string(),
    company: z.string(),
    body: z.string(),
    stack: z.array(z.string()),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    order: z.number(),
    period: z.string(),
    title: z.string(),
    company: z.string(),
    current: z.boolean().default(false),
  }),
});

export const collections = { work, experience };
