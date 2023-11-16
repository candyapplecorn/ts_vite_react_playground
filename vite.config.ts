import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx(/* jsxImportSource: …, otherOptions… */) },
    react(),
  ],
  base: "/ts_vite_react_playground", // for github deployment
  // The fields defined here can also be used in mock. See: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
  define: {},
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
