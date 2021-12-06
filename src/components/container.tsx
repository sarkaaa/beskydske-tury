import styled, { css } from "styled-components"

const Container = styled.div(
  ({ theme }) => css`
    width: auto;
    margin: 0 auto;
    padding: 3rem 1rem;

    @media ${theme.sizes.screenWidth.mobile} {
      width: 540px;
    }

    @media ${theme.sizes.screenWidth.tablet} {
      width: 720px;
    }

    @media ${theme.sizes.screenWidth.desktopLG} {
      width: 960px;
    }

    @media ${theme.sizes.screenWidth.desktopXL} {
      width: 1024px;
    }
  `
)

export default Container
