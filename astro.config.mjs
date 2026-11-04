// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from 'vite';
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'PUBLIC_');
export default defineConfig({
  site: env.PUBLIC_SITE_URL || undefined,
  integrations: env.PUBLIC_SITE_URL ? [sitemap({ filter: (page) => !page.endsWith('/404/') })] : [],
  adapter: cloudflare({ platformProxy: { enabled: true } }),
});