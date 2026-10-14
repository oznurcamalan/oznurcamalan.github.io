import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oznurcamalan.com',
  integrations: [
    sitemap({
      filter: (sayfa) => !/\/404\/?$/.test(sayfa),
    }),
  ],
});
