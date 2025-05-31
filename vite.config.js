import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/midiano/',
  build: {
    outDir: 'docs', // Указываем папку для сборки
  },
});
