import React from "react"
import styled from "styled-components"
import header from "../images/header.jpeg"

const Wrapper = styled.div`
  width: 100%;
  height: 75vh;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-image: url(${header});
  background-size: cover;
`

const TitleContainer = styled.div`
  margin-top: 6rem;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`

const Subtitle = styled.h2`
  text-align: center;
`

// const Title = styled.h1`
//   color: ${({ theme }) => theme.colors.dark};
//   text-align: center;
//   font-family: 'Noto Sans', sans-serif;
//   font-size: ${({ theme }) => theme.sizes.sizeXL};
//   line-height: 1.2;
//   font-weight: 900;

//   @media screen and (min-width: 420px) {
//       font-size: ${({ theme }) => theme.sizes.sizeXXL};
//   }
// `

// const SubTitle = styled.h2`
//   color: ${({ theme }) => theme.colors.dark};
//   text-align: center;
//   font-family: 'Noto Sans', sans-serif;
//   line-height: 1;
//   font-weight: 400;
// `

type Props = {
  title: string
  subtitle?: string
}

const Header = ({ title, subtitle = null }: Props) => (
  <Wrapper>
    <TitleContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
    <div>Arrow scroll down</div>
  </Wrapper>
)

export default Header
