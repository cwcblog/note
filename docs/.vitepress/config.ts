import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/note/',
  title: "My Note",
  description: "cwc",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: "语言",
        items: [
          { text: "c++", link: '/c++/index' },
        ],
      },
      {
        text: "算法",
        items: [
          { text: "acwing", link: '/acwing/Acwing' }
        ],
      },
    ],
    // sidebar: [
    //   {
    //     text: 'c++',
    //     items: [
    //       { text: 'c++核心', link: '/C++核心编程' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],


    sidebar: {
      "/c++/": [
        {
          text: "c++",    //标签名字
          //collapsible: true,    //是不是可以动态展开
          //collapsed: true,      //默认是不是展开
          items: [              //孩子
            { text: "C++核心编程", link: '/c++/C++核心编程', },
            { text: "C++基础入门", link: '/c++/C++基础入门', },
            { text: "C++提高编程", link: '/c++/C++提高编程', },
            { text: "通讯录管理系统", link: '/c++/通讯录管理系统', },
            { text: "职工管理系统", link: '/c++/职工管理系统', },
            { text: "机房预约系统", link: '/c++/机房预约系统', },
            { text: "基于STL的演讲比赛流程管理系统", link: '/c++/基于STL的演讲比赛流程管理系统', },
          ],
        },
      ],
      "/acwing/": [
        {
          text: "acwing",
          items: [
            { text: "acwing", link: '/acwing/Acwing', },
          ]
        }
      ],
    },




    outline: 'deep',
    outlineTitle: '目录',


    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }

})
