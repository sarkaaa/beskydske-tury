import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { Element } from "react-scroll"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Header from "../components/header"
import Container from "../components/container"
import TrailInfoContainer from "../components/trailInfoContainer"
import StyledSection from "../components/section"
import Instagram, { Title as TitleLight } from "../components/instagram"
import forrestBg from "../images/forrest-bg.png"
import theme from "../constants/theme"
import StyledLink from "../components/link"
import { StaticImage } from "gatsby-plugin-image"

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

const ButtonWrapper = styled.div<{ $centered?: boolean }>(
  ({ $centered }) => css`
    position: relative;
    display: flex;
    justify-content: ${$centered ? "center" : "flex-start"};
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
      <Header title="Beskydské túry" subtitle="Pěší trasy v Beskydech" homepage />
      <Element
        name="mainSection"
        className="mainSection"
        style={{ width: "100%" }}
      >
        <ForrestSection>
          <Container data-cy="mainInfo">
            <HorizontalInfo hidden>
              <HorizontalInfoContent style={{ paddingBottom: "5rem" }}>
                <h3 data-cy="mainInfoTitle">O čem jsou Beskydské túry?</h3>
                <div data-cy="mainInfoContent">
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
                </div>
                <ButtonWrapper>
                  <Button
                    to="/o-webu"
                    as={Link}
                    buttontype="secondary"
                    $arrowright
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
            <TitleLight data-cy="title">Jak vybrat trasu?</TitleLight>
            <InfoWrapper data-cy="findTrail">
              <TrailInfoContainer
                order={1}
                imgAlt="Výběr trasy"
                title="Výběr trasy"
                description="Vyberte si ze seznamu tras pro Vás tu nejideálnější. Každá karta trasy obsahuje základní informace o délce trasy, typu trasy a dopravní dostupností (auto, autobus, vlak). Po rozkliknutí karty jsou zobrazeny podrobnosti o jednotlivé trase."
              >
                <StaticImage
                  src="../images/step1.png"
                  placeholder="blurred"
                  alt="Výběr trasy"
                  height={200}
                  data-cy="infoContainerImg"
                />                
              </TrailInfoContainer>
              <TrailInfoContainer
                order={2}
                imgAlt="Zobrazení přes Mapy.cz"
                title="Zobrazení přes Mapy.cz"
                description="Každá trasa ve svém detailu obsahuje dynamický mapový podklad dostupný z platformy Mapy.cz od Seznamu. Každou trasu je možné si otevřít v nové záložce přímo na Mapy.cz
                a tak si trasu uložit do svého profilu."
              >
                <StaticImage
                  src="../images/step2.png"
                  placeholder="blurred"
                  alt="Zobrazení přes Mapy.cz"
                  width={200}
                  data-cy="infoContainerImg"
                />
                </TrailInfoContainer>
              <TrailInfoContainer
                order={3}
                imgAlt="Hurá na výšlap!"
                title="Hurá na výšlap!"
                description="Tadá! Trasa je zvolená, mapa uložená, počasí zkontrolováno a teď už se jen stačí sbalit do batohu a s dobrou náladu (a telefonem s Mapy.cz aplikací) vyrazit na výlet."
              >
                <StaticImage
                  src="../images/step3.png"
                  placeholder="blurred"
                  alt="Hurá na výšlap!"
                  width={200}
                  data-cy="infoContainerImg"
                />
              </TrailInfoContainer>
            </InfoWrapper>
            <ButtonWrapper $centered>
              <Button to="/trasy" as={Link} buttontype="dark" arrowright>
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
