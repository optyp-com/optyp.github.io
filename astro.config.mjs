import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ✅ Final Astro configuration for Netlify deployment
export default defineConfig({
  // 🌐 Your live production domain
  site: 'https://optyp.com',

  // Root path for the site (custom domain root)
  base: '/',

  // ✅ Output as a static site (Astro default, perfect for Netlify)
  output: 'static',

  // ✅ Integrate TailwindCSS
  integrations: [tailwind()],

  // ✅ Public & output directories
  publicDir: 'public',
  outDir: 'dist',

  // ✅ Ensures clean routes like /about, /services, /contact
  build: {
    format: 'directory', // creates /about/index.html instead of /about.html
  },

  // ✅ Vite configuration for bundling, asset handling, and aliasing
  vite: {
    resolve: {
      alias: {
        '@': '/src', // allows @/components, @/data, etc.
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
