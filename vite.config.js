import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginPrerenderer from 'vite-plugin-prerenderer'

export default defineConfig({
  plugins: [
    react(),
    ...(process.env.PRERENDER === 'true'
      ? [
          vitePluginPrerenderer({
            routes: ['/'],
          }),
        ]
      : []),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
