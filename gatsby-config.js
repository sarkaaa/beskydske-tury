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
        // apiURL:  process.env.API_URL || "http://localhost:1337",
        apiURL:  "http://localhost:1337",
        // accessToken: process.env.API_TOKEN,
        accessToken: "1f8c18f6ce3d5515bdbc8bbfe61416047e17aeabc396a0f94dabefef0fe4b5dedf9a9823af8cc15f1debb72133915f19e15f5c0605e9c0d337ca273d282e018f2243827453666ee73709b0fb7aca074d616a36d7b287cc3359cd2afc9d7225da4b31809c1dd5c31010d472ca88d50fde753835ed413abd610f09e1aa36d0cc98",
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
