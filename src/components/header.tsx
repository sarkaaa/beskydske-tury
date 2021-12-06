import React from "react"
import styled, { css } from "styled-components"
import header from "../images/header.png"

const Wrapper = styled.div<{ homePage?: boolean; customBg?: string }>(
  ({ theme, homePage, customBg }) => css`
    position: relative;
    width: 100%;
    min-height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-image: url(${customBg || header});
    background-size: cover;
    background-position: center;
    z-index: 0;

    @media ${theme.sizes.screenWidth.mobile} {
      min-height: ${homePage ? "70vh" : "45vh"};
    }

    ${customBg &&
    css`
      &:after {
        position: absolute;
        content: " ";
        width: 100%;
        height: 100%;
        background: #0e0e0e;
        opacity: 50%;
        z-index: 1;
      }
    `}
  `
)

const TitleContainer = styled.div`
  position: relative;
  max-width: 1240px;
  margin-top: 6rem;
  z-index: 2;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`

const Subtitle = styled.h2(
  ({ theme }) => css`
    color: ${theme.colors.light};
    text-align: center;
  `
)

type Props = {
  title: string
  subtitle?: string
  customBg?: string
}

const Header = ({ title, subtitle = null, customBg }: Props) => (
  <Wrapper customBg={customBg} homePage={window.location.pathname === "/"}>
    <TitleContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
  </Wrapper>
)

export default Header
