import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// If GITHUB_PAGES is true (set in GitHub Actions workflow), use '/aquaride-ai-technologies/'
// Otherwise (Vercel, local development, etc.), use '/'
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/aquaride-ai-technologies/' : '/',
  plugins: [
    react(),
    tailwindcss()
  ],
})