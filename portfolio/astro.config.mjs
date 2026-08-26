import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://asmithdigital.github.io',
  base: '/portfolio',
  integrations: [sitemap()],
  image: {
    domains: [],
  },
});
