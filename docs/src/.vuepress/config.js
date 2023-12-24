const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CodeDhyan Notes',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Dhyan Together, Code Better ",


  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#8b70cd' }],
    ['meta', { name: 'author', content: 'Bijit Mondal' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Bijit-Mondal/CodeDhyan-Notes',
    logo: 'https://v1.vuepress.vuejs.org/hero.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Notes',
        items: [
          { text: 'All Notes', link: '/notes/' },
          {
            text: 'By Topic',
            items: [
              { text: 'LeetCode', link: '/notes/LeetCode/' },
              { text: 'Node.js', link: '/notes/Node.js/' },
              { text: 'VuePress', link: '/notes/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Config',
        link: '/config/'
      }
    ],
    sidebar: {
      '/notes/': [
        {
          title: 'Notes',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'mermaidjs',
    '@goy/svg-icons',
  ]
}
