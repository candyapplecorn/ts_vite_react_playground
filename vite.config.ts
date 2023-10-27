import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mockDevServerPlugin({
      cors: false,
    }),
  ],
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
});
