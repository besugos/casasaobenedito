import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/casasaobenedito/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
