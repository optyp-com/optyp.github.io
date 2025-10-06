import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://optyp.com',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
  publicDir: 'public',
  outDir: 'dist',
  build: {
    format: 'directory',
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      cssCodeSplit: true, // ✅ allow Tailwind to generate main CSS file
      assetsInlineLimit: 0, // ✅ ensures styles and assets are externalized
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  },
});
