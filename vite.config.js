import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/estradarojo-portfolio/',
  plugins: [react(), [ 
    tailwindcss(),
  ]],
  build: {
    outDir: 'build'
  },
  server: {
    port: 5174, 
    host: 'localhost' 
  }
  
})
