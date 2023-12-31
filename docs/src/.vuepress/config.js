const topicDetails = require('../data/topics-page-details')

module.exports = {
  lang: 'en-US',
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
    ['link', { rel: 'icon', href:'/images/codedhyan-logo.png' }],
    ['meta', { name: 'theme-color', content: '#8b70cd' }],
    ['meta', { name: 'author', content: 'Bijit Mondal' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**`
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Bijit-Mondal/CodeDhyan-Notes',
    logo: '/images/codedhyan-logo.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Topics',
        link: '/topics/'
      },
      {
        text: 'Notes',
        items: [
          { text: 'All Notes', link: '/notes/' },
          {
            text: 'By Topic',
            items: [
              { text: 'C', link: '/topics/C/' },
              { text: 'Java', link: '/topics/Java/' },
              { text: 'Machine Learning', link: '/topics/ML/' },
              { text: 'Competitive Programming', link:'/topics/CP/'},
              { text: 'DSA', link:'/topics/DSA/'}
            ]
          }
        ]
      },
      {
        text: 'Resources',
        link: '#'
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'mermaidjs',
    'vuepress-plugin-mathjax',
    {
      target: 'chtml',
      macros: {
        '*': '\\times',
      },
    },
    '@goy/svg-icons',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'notes',
            dirname: 'notes',
            path: '/notes/',
            layout: 'IndexPost',
            itemPermalink: 'notes/:slug',
            pagination: {
              lengthPerPage: 5, // default value
              layout: 'IndexPost', // layout for the index page when page != 1
              prevText: 'Prev',
              nextText: 'Next',
            }
          }
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'topics',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['topic'],
            // Path of the `entry page` (or `list page`)
            path: '/topics/',
            // Layout of the `entry page` (list of tags)
            layout: 'Topics',
            frontmatter: {
              canonicalUrl: 'topics/',
              topicDetails: topicDetails.topicsPageDetails
            },
            // Layout of the `scope page` (list of posts with this tag)
            scopeLayout: 'IndexPost',
            pagination: {
              lengthPerPage: 5,
              layout: 'IndexPost'
            }
          }
        ],
        sitemap: {
          hostname: 'https://notes.codedhyan.cc'
        }
      },
    ],
  ]
}
