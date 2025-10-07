import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// ✅ Final Astro configuration for Vercel deployment
export default defineConfig({
  // 🌐 Your live production domain
  site: 'https://optyp.com',

  // ✅ Output set to 'server' for API routes (SSR)
  output: 'server',

  // ✅ Integrate Vercel adapter and TailwindCSS
  adapter: vercel(),
  integrations: [tailwind()],

  // ✅ Directory structure
  publicDir: 'public',

  // ✅ Vite configuration
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});