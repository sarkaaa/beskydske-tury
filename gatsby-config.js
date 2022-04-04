require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Beskydské túry`,
    description: `Turistické trasy v Beskydech.`,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-lint-queries`,
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
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Noto Sans`,
    //         subsets: [`latin-ext`],
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Merriweather`,
    //         subsets: [`latin-ext`],
    //         variants: [`300`, `400`, `700`],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164520326-1",
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        collectionTypes: ["user", "trail"],
        // singleTypes: [`global`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/trasy/*`] },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN || "",
        limit: 10,
        pageLimit: 10,
      },
    },
  ],
}
