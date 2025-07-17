import { defineConfig } from "vitest/config";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import eslint from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  root: "src",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  cacheDir: "node_modules/.vite_cache",
  assetsInclude: ["./assets/**/*.*"],
  build: {
    emptyOutDir: true,
    outDir: "./../dist",
    sourcemap: mode !== "production",
    target: "esnext",
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer({})],
    },
  },
  plugins: [
    eslint(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Tutorial",
        },
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Meine PWA",
        short_name: "PWA",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ff6c47",
        icons: [
          //{
          //  src: "pwa-192x192.png",
          //  sizes: "192x192",
          //  type: "image/png",
          //},
        ],
      },
    }),
    tailwindcss(),
  ],
}));
