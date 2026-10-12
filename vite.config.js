import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base is '/' on Vercel or when GITHUB_PAGES is not set, otherwise '/aquaride-ai-technologies/'
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/aquaride-ai-technologies/' : '/',
  plugins: [
    react(),
    tailwindcss()
  ],
})