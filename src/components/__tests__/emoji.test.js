import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import "jest-styled-components"

import Emoji from "../emoji"
import theme from "../../constants/theme"

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

test("Emoji renders correctly", () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Emoji label="label" symbol="🐻" emojiSize="large" />
      </Wrapper>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
