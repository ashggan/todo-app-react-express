import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  define: {
    "process.env": {}, // Prevents errors if libraries rely on `process.env`
  },
  server: {
    host: '0.0.0.0',  
    port: 5173
  }
})
