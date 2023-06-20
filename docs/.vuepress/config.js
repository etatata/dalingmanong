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
        activeMatch: '/question/',
      },
      // 嵌套 Group - 最大深度为 2
      {
        text: '知识星球',
        link: '/star/',
        activeMatch: '/star/',
      },
      {
        text: '码农指南',
        link: '/coding_guide/',
            // 该元素将一直处于激活状态
        activeMatch: '/coding_guide/',
       
      },
      // 控制元素何时被激活
      {
        text: '开发项目',
        link: '/development_project/',
              // 该元素将一直处于激活状态
          activeMatch: '/development_project/',
      },
      {
        text: '面试指南',
        link: '/seek_job/',
              // 该元素将一直处于激活状态
        activeMatch: '/seek_job/',
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
              children: [{
                text: '内存管理',
                link: '/coding_guide/1.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
                
              }
              ]
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
          {
            text: '代码设计和架构',
            children: [
              {
                text: '关于代码设计',
                link: '/coding_guide/design_architecture/about_code_design.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
              {
                text: '如何学习和解决问题',
                link: '/coding_guide/how_learn.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
              {
                text: '关于代码设计',
                link: '/coding_guide/design_architecture/about_code_design.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
              {
                text: '设计模式是什么？',
                link: '/coding_guide/design_architecture/what_is_design_patterns.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              }
            ],
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
        '/question/': [
          {
        
            children: [
              {
                text: '微信相关',
                link: '/question/wechat.md',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
              {
                text: '前端相关',
                children: ['/reference/cli.md', '/reference/config.md'],
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
              {
                text: '支付相关',
                children: ['/reference/cli.md', '/reference/config.md'],
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },

            ],
          },
        ],
      },

       // 如果你按照 `organization/repository` 的格式设置它
    // 你也可以直接将它设置为一个 URL
    repo: 'https://github.com/etatata/dalingmanong',
    })
})
