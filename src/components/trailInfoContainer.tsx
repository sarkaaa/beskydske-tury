import React from "react"
import styled from "styled-components"
import Emoji from "../components/emoji"

const Title = styled.h3`
  text-align: center;
`

const InfoContainer = styled.div<{ order: number }>`
  flex: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  position: relative;

  @media ${({ theme }) => theme.sizes.screenWidth.mobile} {
    flex: 50%;
  }

  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    flex: 28%;
  }

  :after {
    content: "${({ order }) => order}";
    color: #c0c0c0;
    font-size: 25rem;
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
`

type Props = {
  order: number
  title: string
  description: string
  emojiLabel: string
  emojiSymbol: string
}

const TrailInfoContainer = ({
  order,
  title,
  description,
  emojiLabel,
  emojiSymbol,
}: Props) => (
  <InfoContainer order={order}>
    <Emoji label={emojiLabel} symbol={emojiSymbol} emojiSize="large" />
    <Title>{title}</Title>
    <p>{description}</p>
  </InfoContainer>
)

export default TrailInfoContainer
