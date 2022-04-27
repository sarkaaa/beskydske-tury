import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import "jest-styled-components"

import { Icon } from "../icon"
import theme from "../../constants/theme"

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

describe('Icon component', () => {
  test("Icon renders correctly", () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon iconName="github" />
        </Wrapper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("Dark icon renders correctly", () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon iconName="github" dark />
        </Wrapper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("Small icon renders correctly", () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon iconName="github" small />
        </Wrapper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("Linked icon renders correctly", () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon to="https://github.com" iconName="github" />
        </Wrapper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})

