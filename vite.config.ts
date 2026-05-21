import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import { mailchimpApiPlugin } from "./vite-plugin-mailchimp-api";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mailchimpApiPlugin(mode),
    mode === "development" && screenGraphPlugin(),
  ].filter(Boolean),
  publicDir: "./static",
  base: "/",
}));
