import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "challenge",
    rollupOptions: {
      input: {
        main: __dirname + "/index.html",
      },
      output: {
        dir: __dirname + "/challenge",
        assetFileNames: "img/[name].[ext]",
      },
    },
  },
});
