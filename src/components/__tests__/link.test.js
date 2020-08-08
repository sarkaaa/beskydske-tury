import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import "jest-styled-components"

import StyledLink from "../link"
import theme from "../../constants/theme"

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

test("Link renders correctly", () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledLink href="/">Domovská stránka</StyledLink>
      </Wrapper>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
