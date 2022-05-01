import React from "react"
import styled, { css } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Container from "../components/container"
import { HorizontalInfoContent } from "./index"
import StyledLink from "../components/link"
import StyledSection from "../components/section"
import Emoji from "../components/emoji"
import { StaticImage } from "gatsby-plugin-image"

const ContentWrapper = styled.div<{ reversed?: boolean }>(
  ({ theme, reversed }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media ${theme.sizes.screenWidth.tablet} {
      display: grid;
      gap: 1.25rem;
      grid-template-columns: ${reversed ? '3fr 2fr' : '2fr 3fr'};
      grid-template-rows: repeat(1, 1fr);
      align-items: flex-start;
    }

    > ${HorizontalInfoContent} {
      flex: 2;
    }
  `
)

const ImageContent = styled.div(
  () => css`
    flex: 1;
    display: flex;
    justify-content: center;
  `
)

const ProjectInfoSection = styled(StyledSection)(
  ({ theme }) => css`
    background: ${theme.colors.sand};
    padding-top: 2rem;
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);

    @media ${theme.sizes.screenWidth.desktopLG} {
      padding-top: 0rem;
      clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
    }
  `
)

const Kontakt = () => (
  <Layout>
    <SEO title="O Beskydských túrách" />
    <Header title="O Beskydských túrách" />
    <Container>
      <h2>Co jsou Beskydské túry?</h2>
      <div>
        <HorizontalInfoContent>
          <p>
            Beskydské túry jsou webová aplikace, kde se turista může inspirovat
            vybranými trasami pro svůj výlet. Každá trasa obsahuje základní
            údaje o její délce, stoupání, dostupností (auto, bus, vlak) a typu
            trasy:
          </p>
          <ul>
            <li>
              <b>Z bodu A do bodu A:</b> tyto trasy jsou vhodné pro turisty, kteří
              jezdí autem. Cíl každé této trasy je tedy na stejném místě jako
              její začátek.
            </li>
            <li>
              <b>Z body A do bodu B:</b> perfektní pro všechny turisty, kteří preferují
              transfer veřejnou dopravou a nejsou tedy vázání na to, aby se
              vrátili na stejné místo. Každá trasa, která je označena tímto
              typem tedy končí na jiném místě než začala. Jak počáteční bod, tak
              i ten konečný je v místě, kde je autobusová nebo vlaková zastávka
              (případně stanice).
            </li>
          </ul>
          <StaticImage
            src="../images/about.png"
            placeholder="blurred"
            alt="Beskydy"
            objectFit="contain"
            layout="constrained"
          />
          <p>
            Celý projekt je moje “volnočasová” aktivita, kterou jsem vytvořila s
            cílem procvičit a rozšířit si své technické a programovací znalosti.
            Myšlenka vznikla už v roce 2020, ale pak přišly školní povinnosti a
            diplomka, práce, další jiné priority a celková realizace se tedy
            nakonec posunula bezmála o dva (!) roky. Více informací je popsání v
            sekci “Technická část”.
          </p>
          <p>
            Pokud máte tip na skvělou trasu v Beskydech a chcete se s ní
            podělit, pište na e-mail{" "}
            <StyledLink href="mailto:info@beskydsketury.cz">
              info@beskydsketury.cz
            </StyledLink>
            .
          </p>
        </HorizontalInfoContent>
      </div>
      <h2>Kdo to ,,vymyslel"?</h2>
      <ContentWrapper reversed>
        <HorizontalInfoContent>
          <p>
            Jsem Šárka a ráda chodím na výšlapy v Beskydech. V posledních letech
            ne tak pravidelně, neb trávím svůj čas daleko od Beskyd, ale když
            čas a situace dovolí, ráda na výlet zajdu, ať je léto nebo zima a v
            kopcích metr sněhu. :) Kromě toho taky ráda jezdím na kole. <Emoji symbol="🚴" label="bike" />
          </p>
          <p>
            Velkou část svého času trávím u počítače, v online a{" "}
            <StyledLink href="https://pandacode.cz/" target="_blank">
              programuju
            </StyledLink>{" "}
            - třeba Beskydské túry a zajímá mě vše okolo web developmentu. <Emoji symbol="👩🏻‍💻" label="programmer" />
          </p>
        </HorizontalInfoContent>
        <ImageContent><StaticImage
            src="../images/ja.png"
            placeholder="blurred"
            alt="Já"
            width={200}
          /></ImageContent>
      </ContentWrapper>
    </Container>
    <ProjectInfoSection>
      <h2>Technické informace</h2>
      <ContentWrapper>
        <ImageContent><StaticImage
            src="../images/vscode.png"
            placeholder="blurred"
            alt="Kod"
            height={340}
          /></ImageContent>
        <HorizontalInfoContent>
          <p>
            Beskydské túry vznikly tedy i proto, že jsem chtěla mít “svůj”
            komplexní “side project”, na kterém si rozšířím své technické
            znalosti. Delší dobu jsem přemýšlela nad tématikou takového
            volnočasového projektu, protože jsem nechtěla, aby skončil v šuplíku
            a pak mě napadly Beskydské túry. Během realizace jsem narazila na
            několik překážek, které se mi podařily relativně dobře vyřešit.
          </p>
          <p>
            Aktuálně dev stack je postaven na:{" "}
            <StyledLink href="https://reactjs.org/" target="_blank">
              React JS
            </StyledLink>
            ,
            <StyledLink href="https://gatsbyjs.com/" target="_blank">
              Gatsby JS
            </StyledLink>
            ,
            <StyledLink href="https://styled-components.com/" target="_blank">
              styled-components
            </StyledLink>
            ,{" "}
            <StyledLink
              href="https://github.com/flsy/react-mapycz"
              target="_blank"
            >
              react-mapycz
            </StyledLink>{" "}
            (velké dík autorovi za tuto knihovnu, která poskytuje v Reactu
            podklady/API od{" "}
            <StyledLink href="https://api.mapy.cz/" target="_blank">
              Mapy.cz
            </StyledLink>
            !),{" "}
            <StyledLink href="https://jestjs.io/" target="_blank">
              Jest
            </StyledLink>
            ,{" "}
            <StyledLink href="https://www.cypress.io/" target="_blank">
              Cypress
            </StyledLink>
            ,
            <StyledLink href="https://strapi.io/" target="_blank">
              Strapi
            </StyledLink>{" "}
            (+ Postgress) a aplikace je hostována na{" "}
            <StyledLink href="https://www.heroku.com/" target="_blank">
              Heroku
            </StyledLink>
            . Webová aplikace bude průběžně vylepšována v iteracích.
          </p>
          <p>
            Kód projektu je veřejný a dostupný na{" "}
            <StyledLink
              href="https://github.com/sarkaaa/beskydske-tury"
              target="_blank"
            >
              Githubu
            </StyledLink>
            . Každý issue nebo pull request je vítán. Case study projektu je na{" "}
            <StyledLink
              href="https://pandacode.cz/beskydske-tury"
              target="_blank"
            >
              tomto odkaze
            </StyledLink>
            .
          </p>
        </HorizontalInfoContent>
      </ContentWrapper>
    </ProjectInfoSection>
  </Layout>
)

export default Kontakt
