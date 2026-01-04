import { defineConfig } from 'vitepress'
import fs from 'fs'

function autoSidebar(dir: string, base: string) {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .map(f => ({
      text: f.replace('.md', ''),
      link: `${base}/${f.replace('.md', '')}`
    }))
}

export default defineConfig({
  title: 'Overdrive Wiki',
  description: 'Overdrive Wiki是一个由社区共同维护的百科全书项目',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],

  markdown: {
    math: true
  },

  themeConfig: {
    outline: {
      level: [1, 3]
    },

    sidebar: {
      '/drug/': autoSidebar('docs/drug', '/drug'),
      '/index/': autoSidebar('docs/index', '/index'),
      '/other/': autoSidebar('docs/other', '/other')
    }
  }
})
