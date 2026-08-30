import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5180 },
  // Inline config, otherwise Vite walks up and loads the parent project's Tailwind setup.
  css: { postcss: {} },
});
