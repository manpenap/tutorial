import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tiny-hamster-8b6d63.netlify.app",
  integrations: [preact()]
});