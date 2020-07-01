/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/mellow-microsite", // for github pages
  siteMetadata: {
    title: `Mellow App`,
    author: 'Mellow',
    siteUrl: 'https://yinhowlew.github.io/mellow-microsite/',
    description: 'get daily art inspirations from Mellow app',
    keywords: ['art','inspirations','ios','app','discovery']
  },	
  plugins: [
    // for images in pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-remark-images`,     
  ],
}
