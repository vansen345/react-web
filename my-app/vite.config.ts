import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/piepapi': {
        target: 'http://localhost:3007',
        changeOrigin: true,
      }
    }
  }
  // server: {
  //   proxy: {
  //     '/piepapi': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/piepapi/, '/api'),
  //     }
  //   }
  // }
})
