import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// URL de producción. Cambiar aquí si el dominio cambia.
const SITE = 'https://elpaywall.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    // genera /blog/post.html en vez de /blog/post/index.html
    // para que Cloudflare Pages sirva URLs sin barra final sin redirigir
    format: 'file',
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: undefined,
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
