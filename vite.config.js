import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Pages serves this as a project site under /Portfolio/, so built asset URLs
// need that prefix. Dev stays at the root so localhost URLs are unchanged.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/Portfolio/" : "/",
  server: { port: 5180 },
  build: { outDir: "build" },
}));
