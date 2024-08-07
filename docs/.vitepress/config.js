// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的 VitePress 網站',
  description: '這是一個使用 VitePress 和 Markdown 的網站',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '關於我們', link: '/about' }
    ]
  }
})
