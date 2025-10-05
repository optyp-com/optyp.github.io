import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 🌐 Your production domain
  site: 'https://optyp.com',

  // Root path for the site
  base: '/',

  // Output mode: fully static build (perfect for GitHub Pages)
  output: 'static',

  // Integrations
  integrations: [tailwind()],

  // ⚙️ Ensure Astro knows where to find and copy public assets
  publicDir: 'public',
  outDir: 'dist',

  vite: {
    resolve: {
      alias: {
        '@': '/src', // allows imports like @/components, @/data, etc.
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
