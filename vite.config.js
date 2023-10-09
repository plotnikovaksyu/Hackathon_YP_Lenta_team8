import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Hackathon_YP_Lenta_team8/',
  plugins: [react()],
})