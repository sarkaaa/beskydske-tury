import React from "react"
import styled, { css } from "styled-components"

const TitleWrapper = styled.h3<{ $centered?: boolean }>(
  ({ theme, $centered }) => css`
    color: ${theme.colors.dark};
    font-family: "Noto Sans", sans-serif;
    font-weight: 900;
    font-size: 1.75rem;

    ${$centered &&
    css`
      text-align: center;
    `}
  `
)

type Props = {
  size: "small" | "medium" | "large"
  centered?: boolean
  children: React.ReactNode
}

const Title = ({ size, centered = false, children }: Props) => (
  <TitleWrapper $centered={centered}>{children}</TitleWrapper>
)

export default Title
