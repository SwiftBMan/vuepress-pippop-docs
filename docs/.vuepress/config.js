import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'pippop 文档',
  description: 'pippop 文档，包括开发文档，接口文档，帮助文档等',

  theme: defaultTheme({
    logo: '/images/pippop-logo.jpg',

    navbar: ['/', '/dev_doc/dev_doc_home'],
  }),

  base: '/vuepress-pippop-docs/',

  bundler: viteBundler(),
})
