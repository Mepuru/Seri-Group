import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '花璃汉化组',
  description: '花璃汉化组官方文档站点',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mepuru/Chestnut-Seri' },
    ],

    footer: {
      message: '花璃汉化组',
      copyright: '© 2026 花璃汉化组',
    },
  },
})
