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
import StyledSection from "../components/section"
import Instagram, { Title as TitleLight } from "../components/instagram"
import forrestBg from "../images/forrest-bg.png"
// import step1 from "../images/step1.png"
// import step2 from "../images/step2.png"
// import step3 from "../images/step3.png"
import theme from "../constants/theme"
import StyledLink from "../components/link"

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

export const HorizontalInfo = styled.div<{ hidden?: boolean }>(
  ({ theme, hidden }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    @media ${theme.sizes.screenWidth.tablet} {
      flex-direction: row;
      margin-top: 5rem;
      padding: 0 1.5rem;
    }

    ${hidden &&
    css`
      & > div {
        flex: 1;
        &:last-child {
          display: none;

          @media ${theme.sizes.screenWidth.tablet} {
            display: block;
          }
        }
      }
    `}
  `
)

const ForrestSection = styled.div`
  background-color: #fff6da;
  background-image: url(${forrestBg});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  margin-bottom: -4px;
`

export const HorizontalInfoContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${theme.sizes.screenWidth.tablet} {
      padding-left: 1rem;
    }
  `
)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Beskydské túry" />
      <Header title="Beskydské túry" subtitle="Pěší trasy v Beskydech" />
      <Element
        name="mainSection"
        className="mainSection"
        style={{ width: "100%" }}
      >
        <ForrestSection>
          <Container>
            <HorizontalInfo hidden>
              <HorizontalInfoContent style={{ paddingBottom: "5rem" }}>
                <h3>O čem jsou Beskydské túry?</h3>
                <p>
                  Beskydské túry je webová aplikace s přehledem vybraných túr v
                  Moravskoslezských Beskydech. Všechny trasy jsou dostupné v
                  záložce <StyledLink to="/trasy">Trasy</StyledLink> a
                  návštěvník si může vybrat trasy podle svých preferencí a
                  nálady.
                </p>
                <p>
                  Mimo jiné je tento projekt vytvořen jako volnočasová aktivita
                  a celý kód je jako open-source zveřejněný v repozitáří{" "}
                  <StyledLink
                    href="https://github.com/sarkaaa/beskydske-tury"
                    target="_blank"
                  >
                    Githubu
                  </StyledLink>
                  .
                </p>
                <ButtonWrapper>
                  <Button
                    to="/about"
                    as={Link}
                    buttonType="secondary"
                    arrowRight
                  >
                    Více informací
                  </Button>
                </ButtonWrapper>
              </HorizontalInfoContent>
              <div></div>
            </HorizontalInfo>
          </Container>
        </ForrestSection>
        <StyledSection bg={theme.colors.primary}>
          <React.Fragment>
            <TitleLight>Jak vybrat trasu?</TitleLight>
            <InfoWrapper>
              <TrailInfoContainer
                order={1}
                imgSource="../images/step1.png"
                imgAlt="Výběr trasy"
                title="Výběr trasy"
                description="Vyberte si ze seznamu tras pro Vás tu nejideálnější. Každá karta trasy obsahuje základní informace o délce trasy, typu trasy a dopravní dostupností (auto, autobus, vlak). Po rozkliknutí karty jsou zobrazeny podrobnosti o jednotlivé trase."
              />
              <TrailInfoContainer
                order={2}
                imgSource="../images/step2.png"
                imgAlt="Zobrazení přes Mapy.cz"
                title="Zobrazení přes Mapy.cz"
                description="Každá trasa ve svém detailu obsahuje dynamický mapový podklad dostupný z platformy Mapy.cz od Seznamu. Každou trasu je možné si otevřít v nové záložce přímo na Mapy.cz
                a tak si trasu uložit do svého profilu."
              />
              <TrailInfoContainer
                order={3}
                imgSource="../images/step3.png"
                imgAlt="Hurá na výšlap!"
                title="Hurá na výšlap!"
                description="Tadá! Trasa je zvolená, mapa uložená, počasí zkontrolováno a teď už se jen stačí sbalit do batohu a s dobrou náladu (a telefonem s Mapy.cz aplikací) vyrazit na výlet."
              />
            </InfoWrapper>
            <ButtonWrapper centered>
              <Button to="/trasy" as={Link} buttonType="dark" arrowRight>
                Přejít na trasy
              </Button>
            </ButtonWrapper>
          </React.Fragment>
        </StyledSection>
      </Element>
      <Instagram />
    </Layout>
  )
}

export default IndexPage
