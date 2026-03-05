// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://alquilersonidoaxel.netlify.app", // Dominio de producción
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
