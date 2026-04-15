// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // 1. Importamos el sitemap

// https://astro.build/config
export default defineConfig({
  // 2. IMPORTANTE: Cambia esta URL por la tuya de Vercel
  site: 'https://esteticasandramzcordoba.vercel.app/', 
  
  integrations: [
    sitemap(), // 3. Añadimos la integración aquí
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});