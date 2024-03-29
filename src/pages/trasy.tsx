import * as React from "react"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TrailTile from "../components/trailTile"
import Header from "../components/header"
import Container from "../components/container"

const TrailsWrapper = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 850px;
    margin: 0 auto;

    @media ${theme.sizes.screenWidth.mobile} {
      grid-template-columns: repeat(2, 1fr);
    }
  `
)

const Trasy = ({ data }) => {
  return (
    <Layout>
      <SEO title="Trasy" />
      <Header title="Trasy" />
      <Container>
        <TrailsWrapper>
          {data?.allStrapiTrail.edges.reverse().map(item => (
            item.node.slug !== 'test' &&
            <TrailTile key={item.node.id} trail={item.node} />
          ))}
        </TrailsWrapper>
      </Container>
    </Layout>
  )
}

export const TRAIL_QUERY = graphql`
query IndexQuery {
  allStrapiTrail {
    edges {
      node {
        slug
        title
        content {
          children {
            text
          }
        }
        cover_image {
          url
        }
        trail_type
        criterion
        coords {
          lat1
          lng1
          lat2
          lng2
          lat3
          lng3
          lat4
          lng4
          lat5
          lng5
          lat6
          lng6
          lat7
          lng7
          lat8
          lng8
          lat9
          lng9
          lat10
          lng10
        }
        car {
          parking1
          parking2
          parking3
        }
        bus {
          stop1
          stop2
          stop3
        }
        train {
          station1
          station2
          station3
        }
      }
    }
  }
}
`

export default Trasy
