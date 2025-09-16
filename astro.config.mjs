import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Correct deployed site
  site: 'https://optyp-com.github.io/optyp.github.io',
  // Base path for subfolder hosting
  base: '/optyp.github.io/',
  integrations: [tailwind()],
});
