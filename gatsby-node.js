const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getTrails = makeRequest(
    graphql,
    `
    {
      allStrapiTrail {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiTrail.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/trasa.tsx`),
        context: {
          slug: node.slug,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return getTrails
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Query {
      allStrapiTrail: StrapiTrail
      strapiTrail: StrapiTrail
    }

    type StrapiTrail implements Node {
      slug: String
      title: String
      trail_type: String
      criterion: ENUM_TRAIL_CRITERION
      availability_car: CarAvailibility
      availability_bus: BusAvailibility
      availability_train: TrainAvailibility
      content: String!
      coords: Coords
      trail_type: ENUM_TRAIL_TRAIL_TYPE
      train: TrainAvailibility
      cover_image: UploadFile
    }

    enum ENUM_TRAIL_TRAIL_TYPE {
      aa
      ab
      }

    enum ENUM_TRAIL_CRITERION {
      fast
      short
      bike1
      bike2
      bike3
      turist1
      turist2
    }

    type CarAvailibility implements Node {
      parking1: String
      parking2: String
      parking3: String
    }

    type BusAvailibility implements Node {
      stop1: String
      stop2: String
      stop3: String
    }

    type TrainAvailibility implements Node {
      station1: String
      station2: String
      station3: String
    }

    type Coords implements Node {
      lat1: Float!
      lng1: Float!
      lat2: Float!
      lng2: Float!
      lat3: Float!
      lng3: Float!
      lat4: Float!
      lng4: Float!
      lat5: Float!
      lng5: Float!
      lat6: Float!
      lng6: Float!
      lat7: Float!
      lng7: Float!
      lat8: Float!
      lng8: Float!
      lat9: Float!
      lng9: Float!
      lat10: Float!
      lng10: Float!
    }

    type UploadFile implements Node {
      name: String!
      alternativeText: String
      caption: String
      width: Int
      height: Int
      formats: JSON
      hash: String!
      ext: String
      mime: String!
      size: Float!
      url: String!
    }
  `

  createTypes(typeDefs)
}
