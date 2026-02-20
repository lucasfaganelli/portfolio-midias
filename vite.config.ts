import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  // IMPORTANTE para GitHub Pages
  base: "/portfolio-midias/",

  plugins: [
    react(),
    componentTagger(),
  ],

  server: {
    host: true,
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});