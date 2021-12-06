import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Header from "../components/header"
import Emoji from "../components/emoji"
import Container from "../components/container"
import TrailInfoContainer from "../components/TrailInfoContainer"

const InfoWrapper = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.75rem;
    padding: 0;

    @media ${theme.sizes.screenWidth.mobile} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${theme.sizes.screenWidth.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }

    & > div:last-child {
      justify-self: center;
    }
  `
)

const ButtonWrapper = styled.div<{ centered?: boolean }>(
  ({ centered }) => css`
    position: relative;
    display: flex;
    justify-content: ${centered ? "center" : "flex-start"};
    margin: 1rem 0;
  `
)

const HorizontalInfo = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5rem;
    padding: 0 1.5rem;

    @media ${theme.sizes.screenWidth.tablet} {
      flex-direction: row;
    }

    & div {
      flex: 1;
      &:first-child {
        text-align: center;
      }
    }
  `
)

const HorizontalInfoContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1rem;

    @media ${theme.sizes.screenWidth.tablet} {
      align-items: flex-start;
    }
  `
)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Beskydské túry" />
      <Header title="Beskydské túry" subtitle="Pěší trasy v Beskydech" />
      <Container>
        <div>
          <h2>O čem jsou Beskydské túry?</h2>
          <HorizontalInfo>
            <div>
              <Emoji label="opensource" symbol="🐻🏔" emojiSize="large" />
            </div>
            <HorizontalInfoContent>
              <p>
                Eiusmod consequat sit consectetur excepteur cillum mollit mollit
                laborum minim. Nisi cupidatat voluptate aliqua excepteur culpa
                voluptate eiusmod ut veniam nisi ipsum do esse culpa. Elit
                fugiat dolore nostrud minim dolor. Deserunt esse ipsum pariatur
                voluptate. Elit culpa aliqua mollit id amet duis et sit nisi
                labore cillum aute do. Nulla sit exercitation eiusmod laboris
                Lorem dolore non sint reprehenderit occaecat ea.
              </p>
              <ButtonWrapper>
                <Button to="/about" as={Link}>
                  Přejít na trasy
                </Button>
              </ButtonWrapper>
            </HorizontalInfoContent>
          </HorizontalInfo>
        </div>
        <div>
          <h2>Jak vybrat trasu?</h2>
          <InfoWrapper>
            <TrailInfoContainer
              order={1}
              emojiLabel="mountain"
              emojiSymbol="⛰"
              title="Výběr trasy"
              description="Do laboris reprehenderit excepteur ullamco cillum in commodo
                incididunt eiusmod nisi cillum consectetur. Magna nisi tempor
                consequat nostrud velit. Proident Lorem eiusmod exercitation
                aliqua consequat amet anim enim. Cupidatat ad deserunt commodo
                dolor exercitation ut voluptate cillum tempor laboris occaecat
                commodo sint. Esse consequat deserunt adipisicing nostrud anim
                culpa."
            />
            <TrailInfoContainer
              order={2}
              emojiLabel="map"
              emojiSymbol="🗺"
              title="Zobrazení přes Mapy.cz"
              description="Do laboris reprehenderit excepteur ullamco cillum in commodo
                incididunt eiusmod nisi cillum consectetur. Magna nisi tempor
                consequat nostrud velit. Proident Lorem eiusmod exercitation
                aliqua consequat amet anim enim. Cupidatat ad deserunt commodo
                dolor exercitation ut voluptate cillum tempor laboris occaecat
                commodo sint. Esse consequat deserunt adipisicing nostrud anim
                culpa."
            />
            <TrailInfoContainer
              order={3}
              emojiLabel="boot"
              emojiSymbol="🥾"
              title="Hurá na výšlap!"
              description="Do laboris reprehenderit excepteur ullamco cillum in commodo
                incididunt eiusmod nisi cillum consectetur. Magna nisi tempor
                consequat nostrud velit. Proident Lorem eiusmod exercitation
                aliqua consequat amet anim enim. Cupidatat ad deserunt commodo
                dolor exercitation ut voluptate cillum tempor laboris occaecat
                commodo sint. Esse consequat deserunt adipisicing nostrud anim
                culpa."
            />
          </InfoWrapper>
          <ButtonWrapper centered>
            <Button to="/trasy" as={Link}>
              Přejít na trasy
            </Button>
          </ButtonWrapper>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
