require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Beskydské túry`,
    description: `Turistické trasy v Beskydech.`,
    author: `@sarkachwastkova`,
    image: `src/images/thumbnail_lg.png`,
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
    `gatsby-plugin-extract-schema`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [420, 576, 768, 992, 1200, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beskydske-tury`,
        start_url: `/`,
        background_color: `#fcf7d5`,
        theme_color: `#fcf7d5`,
        icon: `src/images/favicons/favicon144.png`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    // !Strapi
    {
      resolve: "gatsby-source-strapi",
      options: {
        maxParallelRequests: 500,
        apiURL:  process.env.API_URL || "http://localhost:1337",
        accessToken: process.env.API_TOKEN,
        collectionTypes: ["user", "coords",
        {
          singularName: "trail",
          queryParams: {
            publicationState:
              process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            populate: "*",
          queryLimit: 5000,
          },
        }
      ],
        // singleTypes: [`global`],
        queryLimit: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/trasy/*`] },
    }
  ],
}
