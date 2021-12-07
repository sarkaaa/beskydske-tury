import * as React from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
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

const Trasy = () => {
  const data = useStaticQuery(graphql`
    query {
      allTrailsJson {
        edges {
          node {
            id
            title
            content
            cover_image
            trail_type
            availability_car {
              parking1
            }
            availability_bus {
              stop1
            }
            availability_train {
              station1
            }
            criterion
          }
        }
      }
    }
  `)

  const trails = data?.allTrailsJson.edges

  return (
    <Layout>
      <SEO title="Trasy" />
      <Header title="Trasy" />
      <Container>
        <TrailsWrapper>
          {trails.map(item => (
            <TrailTile key={item.node.id} trail={item.node} />
          ))}
        </TrailsWrapper>
      </Container>
    </Layout>
  )
}

export default Trasy
