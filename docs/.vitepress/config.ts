import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '花璃汉化组',
  description: '花璃汉化组官方文档站点',

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Mepuru/Seri-Group/blob/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '如何撰写文档', link: '/guide/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mepuru/Seri-Group' },
    ],

    footer: {
      message: '花璃汉化组',
      copyright: '© 2026 花璃汉化组',
    },
  },
})
