import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({

  head: [
    ['link', { rel: 'icon', href: '/images/pippop-logo.png' }],
    ['meta', { name: 'google', content: 'notranslate' }], // 禁用 Google 翻译
    ['meta', { name: 'robots', content: 'noindex, nofollow' }], // 可选：禁止搜索引擎索引
    ['meta', { name: 'translate', content: 'no' }], // 禁用 Microsoft Edge 翻译
  ],

  lang: 'zh-CN',

  title: 'PipPop 文档',
  description: 'PipPop 文档，包括开发文档、接口文档、帮助文档等',

  theme: defaultTheme({

    colorMode: 'light',

    colorModeSwitch: false,

    externalLinkIcon: true,

    // PipPop 文档项目地址
    repo: 'https://github.com/SwiftBMan/vuepress-pippop-docs',

    repoLabel: 'GitHub',

    logo: '/images/pippop-logo.png',

    logoAlt: 'PipPop 品牌 Logo',

    navbar: [
      '/',
      {
        text: '开发文档',
        //link: '/',
        prefix: '/dev_docs/',
        children: [
          'dev_doc_introduction',
          'dev_doc_home'

        ]
      }
    ],
    // 嵌套导航项
    // navbar: [
    //   { text: '我是首页', link: '/' },
    //   {
    //     text: '文档',
    //     children: [
    //       { text: '指南', link: '/guide/' },
    //       { text: 'API', link: '/api/' }
    //     ]
    //   }
    // ],
    // navbar: [
    //   { text: '首页', link: '/' },
    //   {
    //     text: '文档',
    //     children: [
    //       { text: '指南', link: '/guide/' },
    //       { text: 'API', link: '/api/' }
    //     ]
    //   },
    //   {
    //     text: '资源',
    //     children: [
    //       { text: '博客', link: '/blog/' },
    //       { text: '社区', link: '/community/' }
    //     ]
    //   },
    //   { text: 'GitHub', link: 'https://github.com' },
    //   { text: '指南', link: '/guide/', icon: 'book' }
    // ],

    sidebar: {
      '/dev_docs/': [
        {
          text: '开发文档',
          prefix: '/dev_docs/',
          children: [
            'dev_doc_introduction',
            'dev_doc_home',
          ],
        },
      ]
    },
    prev: '上一页', // 自定义“上一页”文本
    next: '下一页', // 自定义“下一页”文本

    editLink: true,

    editLinkText: '在 GitHub 上编辑此页',

    docsBranch: 'main',
    docsDir: 'docs',

    lastUpdated: true,

    contributorsText: '贡献者',

    // 404 返回首页按钮文字
    backToHome: '返回到PipPop文档首页',
    notFound: [
      '我是要成为海贼王的男人！——蒙奇·D·路飞',
      '人的梦想是不会结束的！——马歇尔·D·蒂奇',
      '即使我死了，我的灵魂也会继续战斗！——波特卡斯·D·艾斯',
      '不要输给任何人，女孩子也一定要坚强！——娜美',
      '真正的强者，不是没有眼泪的人，而是含着眼泪奔跑的人！——罗罗诺亚·索隆',
      '无论多么痛苦，都不要忘记微笑！——托尼托尼·乔巴',
      '为了伙伴，我可以放弃一切！——山治',
      '即使遍体鳞伤，也要继续前进！——乌索普',
      '历史是由胜利者书写的，但真相永远不会被掩盖！——妮可·罗宾',
      '即使世界抛弃了你，也不要放弃自己！——布鲁克',
    ],

  }),

  base: '/vuepress-pippop-docs/',

  bundler: viteBundler(),
})
