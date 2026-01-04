import { defineConfig } from 'vitepress'
import fs from 'fs'


function autoSidebar(dir: string, base: string) {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .map(f => ({
      text: f.replace('.md', ''),
      link: `${base}/${f.replace('.md', '')}`
    }))
    .sort((a, b) => a.text.localeCompare(b.text, 'zh'))
}


export default defineConfig({
  ignoreDeadLinks: true,
  title: 'Overdrive Wiki',
  description: 'Overdrive Wiki是一个由社区共同维护的百科全书项目',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    outline: {
      level: [1, 3]
    },

    sidebar: {
      '/': [
        {
          text: '药物',
          items: autoSidebar('drug', '/drug')
        },
        {
          text: '首页',
          items: autoSidebar('index', '/index')
        },
        {
          text: '其它',
          items: autoSidebar('other', '/other')
        }
      ]
    }

  }
})
