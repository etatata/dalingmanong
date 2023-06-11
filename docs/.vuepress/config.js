import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '大龄码农',
  description: '解惑，学习后端的全方位网站资料库。',
  port:'8080',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '常见问题',
        link: '/question/',
      },
      // 嵌套 Group - 最大深度为 2
      {
        text: '知识星球',
        link: '/star/'
      },
      {
        text: '码农指南',
        children: [
          {
            text: '必看',
            link: '/coding_guide/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: '计算机基础',
            link: '/coding_guide/fundamentals/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'php编程',
            link: '/coding_guide/php/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: '数据存储',
            link: '/coding_guide/database/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: '设计和架构',
            link: '/coding_guide/design_architecture/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: '高可用',
            link: '/coding_guide/high-availability/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },{
            text: '高性能',
            link: '/coding_guide/high-performance/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },{
            text: '分布式',
            link: '/coding_guide/distributed/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          }
        ],
      },
      // 控制元素何时被激活
      {
        text: '开发项目',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/mysql/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
      {
        text: '面试指南',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/mysql/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      }
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
        '/coding_guide/': [
          {
            text: '必看',
            children: [
              {
                text: '后端技术等级',
                link: '/coding_guide/backend.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },{
                text: '如何学习和解决问题',
                link: '/coding_guide/how_learn.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
              {
                text: '后端框架',
                link: '/coding_guide/backend_architecture.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              }
            ],
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
          {
            text: '计算机基础',
            children: [{
              text: '操作系统',
              link: '/coding_guide/1.md',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/foo/',
            },
            {
              text: '网络基础',
              link: '/coding_guide/2.md',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/foo/',
            },
            {
              text: '数据结构和算法',
              link: '/coding_guide/3.md',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/foo/',
            }
          
          ],
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
          
          },
          {
            text: 'php编程',
            children: ['/reference/cli.md', '/reference/config.md'],
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
          {
            text: '数据存储',
            children: ['/reference/cli.md', '/reference/config.md'],
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
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
