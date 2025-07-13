import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'build', // Change this from 'dist' to 'build'
  },
  server: {
    host: true,
    allowedHosts: ['.replit.dev']
  },
  preview: {
    host: true,
    allowedHosts: ['.replit.dev'], // ✅ correct location
  }
})
