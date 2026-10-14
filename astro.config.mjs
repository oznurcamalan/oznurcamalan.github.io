import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oznurcamalan.com',
  integrations: [
    sitemap({
      // 404 sayfası site haritasına girmesin
      filter: (sayfa) => !/\/404\/?$/.test(sayfa),
    }),
  ],
});
