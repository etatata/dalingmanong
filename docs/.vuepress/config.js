import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '大龄码农',
  description: '这是我的第一个 VuePress 站点',
  port:'8080',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      // 嵌套 Group - 最大深度为 2
      {
        text: 'PHP',
        link: '/php/'
      },
      {
        text: '网络',
        children: [
          {
            text: 'SubGroup',
            children: ['/php/sub/foo.md', '/php/sub/bar.md'],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'MySql',
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
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
        '/': [
          {
            text: '主页',
            children: ['/guide/README.md', '/guide/getting-started.md'],
          },
        ],
        '/php/': [
          {
            text: 'Reference',
            children: ['/reference/cli.md', '/reference/config.md'],
          },
        ],
      },

       // 如果你按照 `organization/repository` 的格式设置它
    // 你也可以直接将它设置为一个 URL
    repo: 'https://github.com/etatata/coding1011',
    })
})
