import React from "react"
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/button'
import Header from '../components/header'
import Emoji from "../components/emoji";
import Container from "../components/container";

const Title = styled.h3`
  text-align: center;
`

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 0;

  @media ${({ theme }) => theme.sizes.screenWidth.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  
  & > div:last-child {
    justify-self: center;
  }
`

const InfoContainer = styled.div`
  flex: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;

  @media ${({ theme }) => theme.sizes.screenWidth.mobile} {
    flex: 50%;
  }

  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    flex: 28%;
  }
`

const ButtonWrapper = styled.div<{ centered?: boolean }>`
  position: relative;
  display: flex;
  justify-content: ${( props ) => props.centered ? 'center' : 'flex-start' };
  margin: 1rem 0;
`

const HorizontalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  padding: 0 1.5rem;

  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    flex-direction: row;
  }

  & div {
    flex: 1;
    &:first-child {
      text-align: center;
    }
  }
`

const HorizontalInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    align-items: flex-start;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Beskydské túry" />
    <Header title="Beskydské túry" subtitle="Pěší trasy v Beskydech" />
      <Container>
      <InfoWrapper>
        <InfoContainer>
          <Emoji label="mountain" symbol="⛰" emojiSize="large" />
          <Title>Trasy</Title>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
        <InfoContainer>
        <Emoji label="map" symbol="🗺" emojiSize="large" />          
          <Title>Stažení do Mapy.cz</Title>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
        <InfoContainer>
          <Emoji label="community" symbol="🐜" emojiSize="large" />
          <Title>Komunita</Title>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
      </InfoWrapper>
      <ButtonWrapper centered>
        <Link to="/trasy">
          <Button>Přejít na trasy</Button>
        </Link>
      </ButtonWrapper>
      <HorizontalInfo>
        <div>
          <Emoji label="opensource" symbol="👩🏻‍💻🐻👨🏼‍💻" emojiSize="large" />
        </div>
        <HorizontalInfoContent>       
          <h3>Open source project</h3>
          <p>
            Eiusmod consequat sit consectetur excepteur cillum mollit mollit laborum minim. Nisi cupidatat voluptate aliqua excepteur culpa voluptate eiusmod ut veniam nisi ipsum do esse culpa. Elit fugiat dolore nostrud minim dolor. Deserunt esse ipsum pariatur voluptate. Elit culpa aliqua mollit id amet duis et sit nisi labore cillum aute do. Nulla sit exercitation eiusmod laboris Lorem dolore non sint reprehenderit occaecat ea.
          </p>
          <ButtonWrapper>
            <Button onClick={() => {}} bordered>Více informací</Button>
          </ButtonWrapper>
        </HorizontalInfoContent>
      </HorizontalInfo>
    </Container>
  </Layout>
)

export default IndexPage

