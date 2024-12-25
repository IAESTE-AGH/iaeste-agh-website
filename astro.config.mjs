import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';

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
});
