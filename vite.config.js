import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig({
  plugins: [react(), yextSSG()],
  build: {
    rollupOptions: {
      external: ["ssh2-sftp-client"],
    },
  },
  ssr: {
    noExternal: [
      "@yext/search-headless-react",
      "@yext/search-ui-react",
      "mapbox-gl",
      "@types/mapbox-gl",
      "react-slick",
    ],
  },
});
