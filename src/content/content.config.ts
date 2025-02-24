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

const tweets = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/tweets" }),
    schema: z.object({
        date: z.string(),
    }),
});

export const collections = { papers, tweets };
