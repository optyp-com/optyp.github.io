import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 🌐 Your live domain
  site: 'https://optyp.com',

  // Root path for the site (since you’re using a custom domain)
  base: '/',

  // ✅ Output mode for static hosting (GitHub Pages / Netlify)
  output: 'static',

  // ✅ Use TailwindCSS integration
  integrations: [tailwind()],

  // ✅ Public asset and build directories
  publicDir: 'public',
  outDir: 'dist',

  // ✅ Critical: ensures /about/, /services/, /contact/ work properly
  build: {
    format: 'directory', // generates about/index.html instead of about.html
  },

  // ✅ Vite configuration for asset bundling
  vite: {
    resolve: {
      alias: {
        '@': '/src', // allows imports like @/components or @/data
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
