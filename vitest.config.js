import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/js/*.test.js"],
    globals: true,
    reporters: "verbose",
    environment: "jsdom",
  },
});
