import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://optyp.com',
  base: '/', // Root site
  integrations: [tailwind()],
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': '/src', // allow imports like @/components, @/data
      },
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});
