import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@/lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@/assets': resolve('src/renderer/assets'),
        '@/components': resolve('src/renderer/components'),
        '@/hooks': resolve('src/renderer/hooks'),
        '@/store': resolve('src/renderer/store'),
        '@/mocks': resolve('src/renderer/mocks')
      }
    },
    plugins: [react()]
  }
})
