import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    manifest: true,
    // Prerendered HTML rewrites dev asset URLs (/src/assets/…) to hashed
    // files via the manifest. Assets below Vite's inline limit would be
    // inlined as data-URIs (no emitted file, no manifest entry), leaving a
    // broken /src/assets/… URL in the static HTML — so force file emission.
    assetsInlineLimit: 0,
  },
})