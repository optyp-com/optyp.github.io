import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://optyp.github.io/optyp.github.io',
  base: '/optyp.github.io/',
  integrations: [tailwind()],
  build: {
    assetsPrefix: './',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});
