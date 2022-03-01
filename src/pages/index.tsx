import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { Element } from "react-scroll"
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
      <Element name="mainSection" className="mainSection">
        <Container>
          <div>
            <h2>O čem jsou Beskydské túry?</h2>
            <HorizontalInfo>
              <div>
                <Emoji label="opensource" symbol="🐻🏔" emojiSize="large" />
              </div>
              <HorizontalInfoContent>
                <p>
                  Beskydské túry je webová aplikace s přehledem vybraných túr v
                  Moravskoslezských Beskydech. Všechny trasy jsou dostupné v
                  záložce <Link to="/trasy">Trasy</Link> a návštěvník si může
                  vybrat trasy podle svých preferencí a nálady.
                </p>
                <p>
                  Mimo jiné je tento projekt vytvořen jako volnočasová aktivita
                  a celý kód je jako open-source zvěřejněný v repozitáří na{" "}
                  <a
                    href="https://github.com/sarkaaa/beskydske-tury"
                    target="_blank"
                  >
                    Githubu
                  </a>
                  .
                </p>
                <ButtonWrapper>
                  <Button to="/about" as={Link} arrowRight>
                    Více informací
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
                description="Vyberte si ze seznamu tras pro tu nejideálnější. Každá karta trasy obsahuje základní informace o délce trasy, typu 
                trasy a dopravní dostupností (auto, autobus, vlak). Po rozkliknutí karty jsou zobrazeny podrobnosti."
              />
              <TrailInfoContainer
                order={2}
                emojiLabel="map"
                emojiSymbol="🗺"
                title="Zobrazení přes Mapy.cz"
                description="Každá trasa ve svém detailu obsahuje dynamický mapový podklad dostupný z platformy Mapy.cz od Seznamu. Každou trasu je možné si otevřít v nové záložce přímo na Mapy.cz
                a tak si trasu uložit do svého profilu."
              />
              <TrailInfoContainer
                order={3}
                emojiLabel="boot"
                emojiSymbol="🥾"
                title="Hurá na výšlap!"
                description="Tadá! Trasa zvolená, mapa uložená a teď už se jen stačí sbalit do batohu a (se svým telefonem a Mapy.cz aplikací) vyrazit na výlet."
              />
            </InfoWrapper>
            <ButtonWrapper centered>
              <Button to="/trasy" as={Link} arrowRight>
                Přejít na trasy
              </Button>
            </ButtonWrapper>
          </div>
        </Container>
      </Element>
    </Layout>
  )
}

export default IndexPage
