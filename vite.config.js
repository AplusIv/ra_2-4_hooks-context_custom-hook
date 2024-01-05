import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ra_2-4_hooks-context_custom-hook/',
  // base - базовый урл / часть после https://username.github.io от которой считаются все относительные пути
  plugins: [react()],
})
