import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [
          "**/node_modules/**",
          "**/dist/**",
          "**/.claude/**",
          "**/.carl/**",
          "**/.paul/**",
          "**/.github/**",
          "**/.vscode/**",
          "**/tests/**",
          "**/playwright-report/**",
          "**/test-results/**",
        ],
      },
    },
  },
});
