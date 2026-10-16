import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://asmithdigital.github.io',
  base: '/portfolio',
  // Retired pages send visitors to the home page. The old site lives on at /portfolio/backup/.
  // Astro does not add `base` to redirect targets, so they include /portfolio/ in full.
  redirects: {
    '/about': '/portfolio/',
    '/resume': '/portfolio/',
    '/work': '/portfolio/',
    '/guide': '/portfolio/',
    '/work/nextpoint': '/portfolio/',
    '/work/freelance': '/portfolio/',
    '/work/strategic-practice': '/portfolio/',
    '/work/research-testing': '/portfolio/',
    '/work/product-management': '/portfolio/',
    '/work/designing-product-interaction': '/portfolio/',
  },
  // Only the home page and the seven case studies go in the sitemap.
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return (
          path === '/portfolio' ||
          /^\/portfolio\/work\/(ux-process|workshops|journey-mapping|design-systems|research-benchmarking|ai-tooling|ui-design)$/.test(path)
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
});
