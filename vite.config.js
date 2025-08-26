import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração otimizada para Cloudflare Pages
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: []
    },
    commonjsOptions: {
      include: [/node_modules/]
    }
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
  }
})