import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import "jest-styled-components"

import Button from "../button"
import theme from "../../constants/theme"

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Button onClick={() => {}}>Hello World</Button>
      </Wrapper>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
