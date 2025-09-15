import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://optyp.github.io',
  integrations: [tailwind()],
  base: '/',
  build: { assetsPrefix: './' },
  vite: { build: { rollupOptions: { output: { assetFileNames: 'assets/[name].[hash][extname]' }}}}
});
