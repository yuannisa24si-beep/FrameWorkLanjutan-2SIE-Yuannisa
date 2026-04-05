import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pertemuan2: resolve(__dirname, 'Pertemuan-2.html'),
        pertemuan3: resolve(__dirname, 'Pertemuan3.html'),
        tugasp3: resolve(__dirname, 'Tugasp3.html'),
      },
    },
  },
})
