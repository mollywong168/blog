import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    outDir: 'docs',
  },
  server: {
    host: '127.0.0.1'
  }
})
