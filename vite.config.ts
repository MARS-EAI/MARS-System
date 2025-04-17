import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MARS-System/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  envDir: path.resolve(__dirname, "..", "env"),
  server: {
    port: 8080,
    proxy: {
      "/puyu": {
        target: "http://internlm-chat-dev.intern-ai.org.cn",
        changeOrigin: true,
      },
    },
  },
});
