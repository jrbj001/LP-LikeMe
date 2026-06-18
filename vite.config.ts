import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import { serverApiPlugin } from "./vite-plugin-server-api";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    serverApiPlugin(mode),
    mode === "development" && screenGraphPlugin(),
  ].filter(Boolean),
  publicDir: "./static",
  base: "/",
}));
