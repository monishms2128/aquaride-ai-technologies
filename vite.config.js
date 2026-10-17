import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Clean root base path for Vercel production hosting
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
})