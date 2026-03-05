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

  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Prioridad máxima para la página de inicio
        if (item.url === "https://alquilersonidoaxel.netlify.app/") {
          // @ts-ignore
          item.changefreq = "daily";
          item.priority = 1.0;
        } 
        // Alta prioridad para productos dinámicos y catálogo
        else if (item.url.includes("/equipos/")) {
          // @ts-ignore
          item.changefreq = "weekly";
          item.priority = 0.9;
        } 
        // Prioridad media-alta para servicios
        else if (item.url.includes("/servicios/") || item.url.includes("/contacto/")) {
          // @ts-ignore
          item.changefreq = "monthly";
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});
