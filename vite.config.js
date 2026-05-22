import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const prerender = require('vite-plugin-prerender')

export default defineConfig({
  plugins: [
    react(),
    ...(process.env.PRERENDER === 'true'
      ? [
          prerender({
            staticDir: 'dist',
            outputDir: 'dist',
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
