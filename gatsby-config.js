module.exports = {
  siteMetadata: {
    title: `Beer and peanuts`,
    description: '一些筆記和雜談'
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        theme: {
          'primary-color': '#13c2c2'
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- more -->`,
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-twemoji-shortcut`]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }
  ]
};
