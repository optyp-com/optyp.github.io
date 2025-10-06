import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ✅ Final Astro configuration for Netlify deployment (no experimental flags)
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

  // ✅ Build settings for clean URLs
  build: {
    format: 'directory', // /about → /about/index.html
  },

  // ✅ Vite configuration for bundling, aliasing, and asset handling
  vite: {
    resolve: {
      alias: {
        '@': '/src', // allows @/components, @/data, @/layouts, etc.
      },
    },
    build: {
      cssCodeSplit: false, // Ensures all CSS is bundled together
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});
