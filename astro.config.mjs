import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon({
            include: {
                solar: ['*'],
                mdi: ['*'],
            },
        }),
        react(),
    ],

    i18n: {
        locales: ['en', 'pl'],
        defaultLocale: 'pl',
        routing: {
            prefixDefaultLocale: false,
        },
    },

    adapter: vercel(),
    output: 'server',
});
