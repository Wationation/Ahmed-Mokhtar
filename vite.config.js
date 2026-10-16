import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cloudflare Pages: build command `npm run build`, output directory `dist`.
// In dev, /api and /uploads are proxied to the local admin server (server/, port 8787).
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8787',
      '/uploads': 'http://localhost:8787'
    }
  }
})
