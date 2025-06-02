import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// 配置 @ 路径别名
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: './',
  resolve: {
    alias: {
      '@': './src'
    }
  },
  build: {
    assetsInclude: ['**/*.md'], // 将所有 .md 文件视为静态资源
  },
})
