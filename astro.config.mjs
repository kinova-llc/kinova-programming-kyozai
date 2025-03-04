import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kinova-llc.github.io/kinova-programming-blog/",
  base: "/kinova-programming-blog/", // 必須
  integrations: [tailwind()],
  output: "static",
  build: {
    outDir: "docs", // GitHub Pages 用に "docs" を指定
  },
});