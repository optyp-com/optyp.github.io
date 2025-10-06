import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ✅ Final Astro configuration for Netlify deployment
export default defineConfig({
  // 🌐 Your live production domain (non-www root domain)
  site: 'https://optyp.com',

  // Root path for the site (custom domain root)
  base: '/',

  // ✅ Output as a static site (Astro default, perfect for Netlify)
  output: 'static',

  // ✅ Integrate TailwindCSS
  integrations: [tailwind()],

  // ✅ Directory structure
  publicDir: 'public',
  outDir: 'dist',

  // ✅ Clean URLs like /about instead of /about.html
  build: {
    format: 'directory',
  },

  // ✅ Vite configuration for bundling, aliasing, and asset handling
  vite: {
    resolve: {
      alias: {
        '@': '/src', // allows @/components, @/data, @/layouts, etc.
      },
    },
    build: {
      cssCodeSplit: false, // Ensures all CSS inlined properly
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});
