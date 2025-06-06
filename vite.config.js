import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
// 配置 @ 路径别名
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: true, // 打包后自动打开分析图
      filename: 'visualizer.html', // 分析图生成的文件名
      gzipSize: true, // 显示 gzip 压缩大小
      brotliSize: true, // 显示 brotli 压缩大小
    }),
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
