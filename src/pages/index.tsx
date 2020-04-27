import React from "react"
import styled, { keyframes } from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../images/logo.png';

const Title = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: 'Pacifico', cursive;
  font-size: 4rem;
  line-height: 1.7;
  font-weight: 400;

  @media screen and (min-width: 420px) {
      font-size: 5rem;
  }

  @media screen and (min-width: 530px) {
      font-size: 6rem;
  }

  @media screen and (min-width: 825px) {
      font-size: 7rem;
  }

  @media screen and (min-width: 930px) {
      font-size: 8rem;
  }
`

const Subtitle = styled.h2`
  color: #FFF;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;

  @media screen and (min-width: 530px) {
    font-size: 2.5rem;
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

const IndexPage = () => (
  <Layout>
    <SEO title="Beskydské túry" />
    <div>
      <Image src={logo} alt="logo" />
    </div>
    <Title>
      Beskydské túry
    </Title>
    <Subtitle>
      Brzy! Pracuje se na tom 👩🏻‍💻💪🏻...
    </Subtitle>
  </Layout>
)

export default IndexPage

