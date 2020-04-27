module.exports = {
  siteMetadata: {
    title: `Beskydské túry`,
    description: `Turistické trasy v Beskydech pro všechny.`,
    author: `@sarkachwastkova`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beskydske-tury`,
        start_url: `/`,
        background_color: `#fcf7d5`,
        theme_color: `#fcf7d5`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            subsets: [`latin-ext`],
            variants: [`400`, `700`],
          },
          {
            family: `Pacifico`,
            subsets: [`latin-ext`],
            variants: [`400`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164520326-1",
      },
    },
  ],
}
