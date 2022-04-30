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
    `gatsby-plugin-extract-schema`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beskydske-tury`,
        start_url: `/`,
        background_color: `#fcf7d5`,
        theme_color: `#fcf7d5`,
        icon: `src/images/logo.png`,
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
    `gatsby-transformer-json`,
    // !Strapi
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:  process.env.API_URL || "http://localhost:1337",
        // apiURL:  "http://localhost:1337",
        accessToken: process.env.API_TOKEN,
        // accessToken: "6bd52f90dc03e472d3fe5c3e428cac71dd44c44809d52e6df482f43bb2f85e074b5d1b96f1c3f4862bb0cc872a0fe4cd459b33aee01a88203d61d6766f46664e641bb270c8a9bdc21c0f543d0825010e11accaaa97a6668736558c1a55b5301e01fa918d5c1ba6889b5d711835f6ba487ea63504b979b82f358b0564cac4edea",
        collectionTypes: ["user", {
          singularName: "trail",
          queryParams: {
            publicationState:
              process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            populate: {
              cover: "*",
              blocks: {
                populate: "*",
              },
            },
          },
        }],
        // singleTypes: [`global`],
        queryLimit: 5000,
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
