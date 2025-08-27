import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const poems = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/poems" }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
    }),
});

export const collections = { papers, poems };
