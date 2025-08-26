import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração otimizada para Cloudflare Pages
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          forms: ['react-hook-form'],
          utils: ['axios']
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/]
    },
    // Enable gzip compression
    brotliSize: true,
    chunkSizeWarningLimit: 1000
  },
  resolve: {
    conditions: ['import', 'browser']
  },
  // Configurações específicas para Cloudflare
  define: {
    global: 'globalThis',
  },
  ssr: {
    noExternal: true,
  },
  // Optimize images
  assetsInclude: ['**/*.webp', '**/*.jpg', '**/*.png']
})