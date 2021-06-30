module.exports = {
  lang: 'zh-CN',
  title: '文档记录',
  description: '记录平常一些有用的东西啊',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: require("./sidebar"),
  },
  base :'/hans-docs/',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ...其他标签
  ],
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      }
    ]
  ]
}