import React from "react"
import styled, { css } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/button'
import Header from '../components/header'

const Container = styled.div`
  padding: 3rem 6rem;
`

const Title = styled.h3`
  text-align: center;
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
    <Header title="Beskydské túry" subtitle="Pěší trasy v Beskydech" />
      <Container>
      <InfoWrapper>
        <InfoContainer>
          <span>image</span> 
          <Title>Trasy</Title>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
        <SpaceDiv />
        <InfoContainer>
          <span>image</span> 
          <Title>Stažení do Mapy.cz</Title>
          <p>Do laboris reprehenderit excepteur ullamco cillum in commodo incididunt eiusmod nisi cillum consectetur. Magna nisi tempor consequat nostrud velit. Proident Lorem eiusmod exercitation aliqua consequat amet anim enim. Cupidatat ad deserunt commodo dolor exercitation ut voluptate cillum tempor laboris occaecat commodo sint. Esse consequat deserunt adipisicing nostrud anim culpa.</p>
        </InfoContainer>
        <SpaceDiv />
        <InfoContainer>
          <span>image</span> 
          <Title>Komunita</Title>
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
          <h3>Open source project</h3>
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

