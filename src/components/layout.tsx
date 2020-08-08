import React from "react"
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from '../constants/globalStyles'
import theme from '../constants/theme'

import StyledLink from './link'
import Icon from './icon'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`

const Navbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 1rem 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  z-index: 99999;
`

const Categories = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  & li {
    float: left;
    margin: 0.3rem 0.5rem;
  }

  & li a {
    text-transform: uppercase;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 3rem 0;
`

const Footer = styled.footer`
  width: 100%;
  margin: 0;
  padding: 1rem 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    width: 1140px;
  }

  & > p {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-size: 1rem;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <Navbar>
        <p>logo</p>
        <Categories>
          <li>
            <StyledLink to="/" navLink>Domovská stránka</StyledLink>
          </li>
          <li>
            <StyledLink to="/trasy" navLink>Trasy</StyledLink>
          </li>
          <li>
            <StyledLink to="/kontakt" navLink>O webu & kontakt</StyledLink>
          </li>
        </Categories>
      </Navbar>
      <Main>{children}</Main>
      <Footer>
        <FooterContainer>
          <p>
            Beskydské túry, 2020
          </p>
          <p>
            Vytvořila <StyledLink href="https://www.sarkachwastkova.cz" target="_blank">Šárka Chwastková</StyledLink> | Open source projekt
          </p>
          <IconsWrapper>
            <Icon to="mailto:info@beskydsketury.cz" iconName="email" />
            <Icon to="https://github.com/sarkaaa/beskydske-tury" iconName="github" />
            <Icon to="https://www.instagram.com/beskydsketury/" iconName="ig" />
          </IconsWrapper>
        </FooterContainer>
      </Footer>
    </Wrapper>
  </ThemeProvider>
)

export default Layout
