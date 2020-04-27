import React from "react"
import styled from 'styled-components'

import Link from './link'
import "./layout.css"
import bg from '../images/bg.jpg'

const Wrapper = styled.div`
  background: url(${bg});
  background-size: cover;
  padding: 3rem;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Footer = styled.footer`
  display: flex; 
  
  & > span {
    color: #FFF;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    font-size :1.3rem;
  }
`

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Wrapper>
      <Main>{children}</Main>
      <Footer>
        <span>
          Vytvořila <Link href="https://www.sarkachwastkova.cz" target="_blank">Šárka Chwastková</Link> | <Link href="https://github.com/sarkaaa/beskydske-tury" target="_blank">Github</Link> | <Link href="https://www.instagram.com/beskydsketury/" target="_blank">Instagram</Link>
        </span>
      </Footer>
    </Wrapper>
  </>
)

export default Layout
