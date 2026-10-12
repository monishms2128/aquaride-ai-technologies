import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base path './' works everywhere: Vercel root (/), GitHub Pages (/aquaride-ai-technologies/), or local preview
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss()
  ],
})