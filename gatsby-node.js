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

//  ! Strapi
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   const getTrails = makeRequest(
//     graphql,
//     `
//     {
//       allStrapiTrail {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//     `
//   ).then(result => {
//     // Create pages for each article.
//     result.data.allStrapiTrail.edges.forEach(({ node }) => {
//       createPage({
//         path: `/${node.id}`,
//         component: path.resolve(`src/templates/trasa.tsx`),
//         context: {
//           id: node.id,
//         },
//       })
//     })
//   })

//   // Query for articles nodes to use in creating pages.
//   return getTrails
// }

// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type Query {
//       allStrapiTrail: StrapiTrail
//       strapiTrail: StrapiTrail
//     }

//     type StrapiTrail implements Node {
//       title: String
//       trail_type: String
//       availability_car: CarAvailibility
//       availability_bus: BusAvailibility
//       availability_train: TrainAvailibility
//       coords: Coords
//     }

//     type CarAvailibility implements Node {
//       parking1: String
//       parking2: String
//       parking3: String
//     }

//     type BusAvailibility implements Node {
//       stop1: String
//       stop2: String
//       stop3: String
//     }

//     type TrainAvailibility implements Node {
//       station1: String
//       station2: String
//       station3: String
//     }

//     type Coords implements Node {
//       lat1: Float
//       lng1: Float
//       lat2: Float
//       lng2: Float
//       lat3: Float
//       lng3: Float
//       lat4: Float
//       lng4: Float
//       lat5: Float
//       lng5: Float
//       lat6: Float
//       lng6: Float
//       lat7: Float
//       lng7: Float
//       lat8: Float
//       lng8: Float
//       lat9: Float
//       lng9: Float
//       lat10: Float
//       lng10: Float
//       lat11: Float
//       lng11: Float
//       lat12: Float
//       lng12: Float
//     }
//   `

//   createTypes(typeDefs)
// }
