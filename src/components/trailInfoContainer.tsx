import React from "react"
import styled, { css } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Title = styled.h3(
  ({ theme }) => css`
    color: ${theme.colors.light};
    text-align: center;
  `
)

const InfoContainer = styled.div<{ order: number }>(
  ({ theme, order }) => css`
  flex: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  @media ${theme.sizes.screenWidth.mobile} {
    flex: 50%;
  }

  @media ${theme.sizes.screenWidth.tablet} {
    flex: 28%;
    padding: 0 1.5rem;
  }

  :after {
    content: "${order}";
    color: #5e7e5b;
    font-size: 25rem;
    font-family: "Noto Sans", sans-serif;
    line-height: 1;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  p {
    color: #d2d2d2;
  }
`
)

type Props = {
  order: number
  title: string
  description: string
  imgSource: string
  imgAlt: string
}

const TrailInfoContainer = ({
  order,
  title,
  description,
  imgAlt,
  imgSource,
}: Props) => (
  <InfoContainer order={order}>
    <StaticImage
      src={imgSource}
      alt={imgAlt}
      placeholder="blurred"
      layout="fixed"
      // width={200}
      // height={200}
    />
    <img
      src={imgSource}
      alt={imgAlt}
      style={{ width: "100%", height: "auto" }}
    />
    <Title>{title}</Title>
    <p>{description}</p>
  </InfoContainer>
)

export default TrailInfoContainer
