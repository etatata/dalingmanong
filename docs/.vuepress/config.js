import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";


export default defineUserConfig({
  lang: "zh-CN",
  title: "大龄码农",
  description: "影迷、影视自媒体必备神器",
  theme: defaultTheme({
    logo: "/logo.png",
    // 默认主题配置
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'PHP',
        children: [
          {
            children: [
              {
                text:"php怎么学",
                link:'/php/foo.md'
              }, 
              {
                text:"php怎么开发",
                link:'/php/bar.md'
              }, 
              ],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
  })
})

