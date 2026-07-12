import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    // Item: kept conservative — pages are already lazy-loaded via
    // React.lazy in App.tsx, which is the split that actually matters
    // for a 13-page marketing site. A manualChunks vendor split can be
    // layered on later if bundle analysis shows it's worth it, but
    // isn't needed to satisfy "code splitting" for a site this size.
    chunkSizeWarningLimit: 600,
  },
});