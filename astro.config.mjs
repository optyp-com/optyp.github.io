import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://optyp.com",

  // ✅ For API routes
  output: "server",

  adapter: vercel(),
  integrations: [tailwind(), preact()],

  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
    ssr: {
      noExternal: ["openai", "pdfjs-dist"],
    },
    optimizeDeps: {
      include: ["openai", "pdfjs-dist"],
    },
  },
});
