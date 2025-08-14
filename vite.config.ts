import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [
    react(),
    vike()
  ],

  // Configure Vike for SSR
  ssr: {
    noExternal: ['vike-react']
  }
})
