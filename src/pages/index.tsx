import React from "react"
import styled, { css, keyframes } from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../images/logo.png';
import Button from '../components/button'
import Icon from '../components/social'
import Header from '../components/header'

const Container = styled.div`
  padding: 3rem 6rem;
`

const Subtitle = styled.h3<{ centered?: boolean }>`
  color: ${({ theme }) => theme.colors.dark};
  
  font-family: 'Nunito', sans-serif;
  font-size: 1.75rem;

  ${( props ) => props.centered && css`
    text-align: center;
  `}

  @media screen and (min-width: 530px) {
    /* font-size: 2.5rem; */
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Image = styled.img`
  max-width: 10rem;
  height: auto;
	animation: ${rotate} 10s linear infinite ;
`

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0;
`

const InfoContainer = styled.div`
  flex: 1;
`

const ButtonWrapper = styled.div<{ centered?: boolean }>`
  position: relative;
  display: flex;
  justify-content: ${( props ) => props.centered ? 'center' : 'flex-start' };
  margin: 1rem 0;
`

const SpaceDiv = styled.div`
  margin: 0 2.5rem;
`

const HorizontalInfo = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 5rem;

  & div {
    flex: 1;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Beskydské túry" />
    {/* <div>
      <Image src={logo} alt="logo" />
    </div> */}
    <Header title="Beskydské túry" />
      <Container>
      <InfoWrapper>
        <InfoContainer>
          <span>image</span> 
          <Subtitle centered>Trasy</Subtitle>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
        <SpaceDiv />
        <InfoContainer>
          <span>image</span> 
          <Subtitle centered>Stažení do Mapy.cz</Subtitle>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
        <SpaceDiv />
        <InfoContainer>
          <span>image</span> 
          <Subtitle centered>Komunita</Subtitle>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
      </InfoWrapper>
      <ButtonWrapper centered>
        <Button onClick={() => {}}>Přejít na trasy</Button>
      </ButtonWrapper>
      <HorizontalInfo>
        <div>
          <span>image</span>
        </div>
        <div>       
          <Subtitle>Open source project</Subtitle>
          <p>
            Eiusmod consequat sit consectetur excepteur cillum mollit mollit laborum minim. Nisi cupidatat voluptate aliqua excepteur culpa voluptate eiusmod ut veniam nisi ipsum do esse culpa. Elit fugiat dolore nostrud minim dolor. Deserunt esse ipsum pariatur voluptate. Elit culpa aliqua mollit id amet duis et sit nisi labore cillum aute do. Nulla sit exercitation eiusmod laboris Lorem dolore non sint reprehenderit occaecat ea.
          </p>
          <ButtonWrapper>
            <Button onClick={() => {}} bordered>Více informací</Button>
          </ButtonWrapper>
        </div>
      </HorizontalInfo>
    </Container>
  </Layout>
)

export default IndexPage

