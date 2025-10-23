import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import preact from "@astrojs/preact";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export default defineConfig({
  site: "https://optyp.com",
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), preact()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
