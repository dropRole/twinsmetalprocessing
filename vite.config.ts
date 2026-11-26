import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin, loadEnv } from "vite";

const metaDynamicAssetsPlugin = (ogURL: string): Plugin => {
  let iconAssetPath = "";

  return {
    name: "meta-dynamic-assets",
    generateBundle(_options, bundle) {
      for (const item of Object.values(bundle)) {
        if (item.type === "asset" && item.fileName.startsWith("assets/emblem"))
          iconAssetPath = `/${item.fileName}`;
      }
    },
    transformIndexHtml(html) {
      return html
        .replace(
          /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:image" content="${ogURL + iconAssetPath}" />`,
        )
        .replace(
          /<link\s+rel="icon"\s+href="[^"]*"\s*\/?>/,
          `<link rel="icon" href="${iconAssetPath}" />`,
        );
    },
  };
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return { plugins: [react(), metaDynamicAssetsPlugin(env.VITE_OG_URL)] };
});
