import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This is the new part
    proxy: {
      // Proxy /api requests to the backend
      '/api': {
        target: 'http://backend:8080', // 'backend' is the service name in docker-compose
        changeOrigin: true,
      },
      // Proxy image requests to the backend
      '/product-images': {
        target: 'http://backend:8080',
        changeOrigin: true,
      }
    }
  }
})