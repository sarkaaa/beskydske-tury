import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from '../constants/globalStyles'
import theme from '../constants/theme'

import Link from './link'
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
  background-color: ${({ theme }) => theme.colors.light};
  padding: 3rem 0;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 1rem 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  & > span {
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
        <span>logo</span>
        <Categories>
          <li>
            <Link href="/">Domovská stránka</Link>
          </li>
          <li>
            <Link href="/about">O webu & kontakt</Link>
          </li>
        </Categories>
      </Navbar>
      <Main>{children}</Main>
      <Footer>
        <span>
          Beskydské túry, 2020
        </span>
        <span>
          Vytvořila <Link href="https://www.sarkachwastkova.cz" target="_blank">Šárka Chwastková</Link> | Open source projekt
        </span>
        <IconsWrapper>
          <Icon href="mailto:info@beskydsketury.cz">
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
          <Icon href="https://github.com/sarkaaa/beskydske-tury" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
          <Icon href="https://www.instagram.com/beskydsketury/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Icon>
        </IconsWrapper>
      </Footer>
    </Wrapper>
  </ThemeProvider>
)

export default Layout
