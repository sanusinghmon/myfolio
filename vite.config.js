import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myfolio/',   // <-- add this line
  plugins: [react()],
})
