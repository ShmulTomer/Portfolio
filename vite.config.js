import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5180 },
  // Keeps the folder the old CRA setup published, so hosting needs no change.
  build: { outDir: "build" },
});
