import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export const aliases = {
  "@Api": path.resolve(__dirname, "src/api"),
  "@Assets": path.resolve(__dirname, "src/assets"),
  "@Styles": path.resolve(__dirname, "src/components/styles"),
  "@tools": path.resolve(__dirname, "src/components/tools"),
  "@Types": path.resolve(__dirname, "src/components/types"),
  "@Views": path.resolve(__dirname, "src/components/views"),
  "@Store": path.resolve(__dirname, "src/components/store"),
};

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
    },
  },
});
