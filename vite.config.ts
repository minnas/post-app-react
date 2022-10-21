import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "src/components/views"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "./src/components/styles"),
      "@tools": path.resolve(__dirname, "./src/components/tools"),
      "@dataTypes": path.resolve(__dirname, "./src/components/types"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@baseStyles": path.resolve(__dirname, "./src/styles"),
      "@App": path.resolve(__dirname, "./src/App.tsx"),
    },
  },
});
