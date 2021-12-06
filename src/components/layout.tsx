import React, { useState, useEffect } from "react"
import styled, { ThemeProvider, css } from "styled-components"
import GlobalStyles from "../constants/globalStyles"
import theme from "../constants/theme"
import { useWindowSize } from "@react-hook/window-size"
import Navigation from "./navigation"
import MobileNavigation from "./mobileNavigation"
import { LinkedIcon as Icon } from "./icon"

const Wrapper = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.light};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: relative;
  `
)

const Navbar = styled.div<{ transparent?: boolean }>(
  ({ transparent }) => css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${transparent ? "rgba(255, 255, 255, 0.1)" : "white"};
    padding: 1rem 3rem;
    z-index: 99999;
  `
)

const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.light};
    padding: 0;
  `
)

const Footer = styled.footer(
  ({ theme }) => css`
    width: 100%;
    margin: 0;
    padding: 1rem 3rem;
    border-top: 1px solid ${theme.colors.gray};
  `
)

const FooterContainer = styled.div(
  ({ theme }) => css`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 2rem;

    @media ${theme.sizes.screenWidth.tablet} {
      flex-direction: row;
    }

    @media ${theme.sizes.screenWidth.desktopXL} {
      width: 1140px;
    }

    & > p {
      color: ${theme.colors.dark};
      font-family: "Noto Sans", sans-serif;
      text-align: center;
      font-size: 1rem;
    }
  `
)

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const CATEGORIES = [
  {
    title: "Hlavní stránka",
    to: "/",
  },
  {
    title: "Trasy",
    to: "/trasy",
  },
  {
    title: "O webu",
    to: "/about",
  },
]

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [width] = useWindowSize()

  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "scrolled") {
          setScrollState("scrolled")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Navbar transparent={scrollState === "top"}>
          <p>logo</p>
          {width > 700 ? (
            <Navigation categories={CATEGORIES} />
          ) : (
            <MobileNavigation categories={CATEGORIES} />
          )}
        </Navbar>
        <Main>{children}</Main>
        <Footer>
          <FooterContainer>
            <p>Beskydské túry, 2020</p>
            <IconsWrapper>
              <Icon to="mailto:info@beskydsketury.cz" iconName="email" />
              <Icon
                to="https://github.com/sarkaaa/beskydske-tury"
                iconName="github"
              />
              <Icon
                to="https://www.instagram.com/beskydsketury/"
                iconName="ig"
              />
            </IconsWrapper>
          </FooterContainer>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
