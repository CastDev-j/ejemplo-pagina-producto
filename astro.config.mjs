import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify()
});