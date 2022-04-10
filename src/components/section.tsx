import * as React from "react"
import styled, { css } from "styled-components"
import Container from "./container"

const Wrapper = styled.div<{ bg?: string }>(
  ({ theme, bg }) => css`
    width: 100%;
    background: ${bg || theme.colors.light};
  `
)

const StyledSection = ({
  children,
  bg,
  className,
}: {
  children: React.ReactNode
  bg?: string
  className?: string
}) => (
  <Wrapper className={className} bg={bg}>
    <Container>{children}</Container>
  </Wrapper>
)

export default StyledSection
