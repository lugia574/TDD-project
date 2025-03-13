/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // ... Specify options here.

    include: [
      "**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "**/*.effect-{test,spec}.?(c|m)[jt]s?(x)",
    ],

    setupFiles: [
      "__test__/libs/import-env.ts",
      "__test__/libs/init-mock-server.ts",
    ],
  },
});
