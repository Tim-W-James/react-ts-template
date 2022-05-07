/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import eslintPlugin from "vite-plugin-eslint";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  // https://github.com/vitest-dev/vitest
  plugins: [
    react(),
    eslintPlugin(),
    AutoImport({
      /// targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        "vitest",
        "react",
      ],

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },

      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: "./types/auto-imports.d.ts",
    }),
    tsconfigPaths(),
  ],
  test: {
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
    environment: "happy-dom",
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
