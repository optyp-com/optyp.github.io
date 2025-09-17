Astro.config.mjs


import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://optyp.com', // Use your custom domain
  integrations: [tailwind()],
  output: 'static',
  base: '/', // Root base path for your site
  vite: {
    build: {
      cssCodeSplit: false, // Disable CSS code splitting to avoid missing css files
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
});
