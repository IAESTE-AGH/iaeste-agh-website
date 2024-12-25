import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const opinions = defineCollection({
    schema: z.object({
        companyName: z.string(),
        companyLogo: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        rating: z.number().int().min(1).max(5),
    }),
});

const events = defineCollection({
    schema: z.object({
        eventName: z.string(),
    }),
});

export const collections = { opinions, events };
