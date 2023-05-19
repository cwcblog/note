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
          { text: "c++", link: '/语言/c++/index' },
        ],
      },
      {
        text: "算法",
        items: [
          { text: "acwing", link: '/算法/acwing/Acwing' },
          { text: "数据结构", link: '/算法/数据结构/index' },
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
      "/语言": [
        {
          text: "c++",    //标签名字
          collapsible: true,    //是不是可以动态展开
          collapsed: true,      //默认是不是展开
          items: [              //孩子
            { text: "C++核心编程", link: '/语言/c++/C++核心编程', },
            { text: "C++提高编程", link: '/语言/c++/C++提高编程', },
            { text: "通讯录管理系统", link: '/语言/c++/通讯录管理系统', },
            { text: "职工管理系统", link: '/语言/c++/职工管理系统', },
            { text: "机房预约系统", link: '/语言/c++/机房预约系统', },
            { text: "基于STL的演讲比赛流程管理系统", link: '/语言/c++/基于STL的演讲比赛流程管理系统', },
          ],
        },
      ],
      "/算法": [
        {
          text: "算法",
          collapsible: true,    //是不是可以动态展开
          collapsed: true,      //默认是不是展开
          items: [
            { text: "acwing", link: '/算法/acwing/Acwing', },
            { text: "基础", link: '/算法/数据结构/基础', },
            { text: "栈和队列", link: '/算法/数据结构/栈和队列', },
            { text: "树", link: '/算法/数据结构/树', },
            { text: "图", link: '/算法/数据结构/图', },
            { text: "图2", link: '/算法/数据结构/图2', },
            { text: "查找", link: '/算法/数据结构/查找', },
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
