import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
import mdx from "@mdx-js/rollup";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx(/* jsxImportSource: …, otherOptions… */) },
    react(),
    mockDevServerPlugin({
      cors: false,
    }),
  ],
  base: "ts_vite_react_playground", // for github deployment
  // The fields defined here can also be used in mock. See: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
  define: {},
  server: {
    proxy: {
      "^/api": { target: "http://example.com" },
      "^api.giphy.com/v1/gifs.*": {
        target: "http://api.giphy.com/v1/gifs",
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
        paths: ["src", "src/styles"],
      },
    },
  },
});
