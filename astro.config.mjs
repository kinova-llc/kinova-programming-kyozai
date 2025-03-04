import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kinova-llc.github.io/kinova-programming-blog/",
  base: "/kinova-programming-blog/",
  integrations: [tailwind()], // 修正：関数として実行
  output: "static",
  build: {
    outDir: "docs",
  },
});
