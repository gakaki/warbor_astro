import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), tailwind()],
  output: "server",
  adapter: vercel()
});