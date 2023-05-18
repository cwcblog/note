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
          { text: "c++", link: '/c++/C++核心编程' }
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
      "/c++/C++核心编程": [
        {
          text: "c++",    //标签名字
          //collapsible: true,    //是不是可以动态展开
          collapsed: true,      //默认是不是展开
          items: [              //孩子
            {
              text: "c++核心",        //标签名字
              link: '/c++/C++核心编程',         //链接
            },
          ],
        },
      ],

    }, outline: 'deep',
    outlineTitle: '目录',


    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }

})
