import { defineConfig } from "vitest/config";
import autoprefixer from "autoprefixer";
import { resolve } from "path";
import eslint from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
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
    sourcemap: process.env.NODE_ENV !== "production",
    target: "esnext",
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/scss/variables.sass"`,
      },
    },
    postcss: {
      plugins: [autoprefixer({})],
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
  ],
});
