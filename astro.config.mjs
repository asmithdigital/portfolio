import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://asmithdigital.github.io',
  base: '/portfolio',
  // Retired pages send visitors to the closest new page. The old site lives on at /portfolio/backup/.
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
    '/work/ux-process': '/portfolio/process/',
    '/work/workshops': '/portfolio/blog/design-sprints/',
    '/work/journey-mapping': '/portfolio/blog/making-the-experience-visible/',
    '/work/design-systems': '/portfolio/blog/making-the-experience-visible/',
    '/work/research-benchmarking': '/portfolio/blog/measuring-experience-quality/',
    '/work/ai-tooling': '/portfolio/blog/ai-in-the-design-process/',
    '/work/ui-design': '/portfolio/',
  },
  // Only the home page, the process page, the case studies and the blog posts go in the sitemap.
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return (
          path === '/portfolio' ||
          path === '/portfolio/process' ||
          /^\/portfolio\/case-studies\/(travel|quote-to-buy|university-website)$/.test(path) ||
          /^\/portfolio\/blog\/(making-the-experience-visible|ai-in-the-design-process|measuring-experience-quality|design-sprints)$/.test(path)
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
