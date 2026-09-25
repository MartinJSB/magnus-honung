import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  format: "esm",
  target: "node24",
  clean: true,
  // Bundle the shared workspace package (it ships TypeScript source).
  noExternal: ["@magnus-honung/shared"],
});
