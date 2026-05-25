// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

export default defineConfig({
  tanstackStart: {
    // Disable prerendering to avoid Vercel compatibility issues
    prerender: {
      enabled: false,
    },
  },
  plugins: [
    {
      name: "copy-server-entry",
      writeBundle(_options, bundle) {
        const outDir = resolve("./dist/server");
        const srcFile = resolve(outDir, "index.js");
        const destFile = resolve(outDir, "server.js");
        if (existsSync(srcFile)) {
          // Ensure the directory exists
          if (!existsSync(outDir)) {
            mkdirSync(outDir, { recursive: true });
          }
          writeFileSync(destFile, readFileSync(srcFile, "utf-8"));
          console.log(`Copied ${srcFile} to ${destFile}`);
        }
      },
    },
  ],
});