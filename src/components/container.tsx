import styled, { css } from "styled-components"

const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    width: calc(100% - 2rem);
    margin: 0 auto;
    padding: 1rem;
    
    @media ${theme.sizes.screenWidth.mobile} {
      width: 540px;
    }
    
    @media ${theme.sizes.screenWidth.tablet} {
      width: 720px;
    }

    @media ${theme.sizes.screenWidth.desktopLG} {
      width: 960px;
      padding: 3rem 1rem;
      width: auto;
    }

    @media ${theme.sizes.screenWidth.desktopXL} {
      width: 1024px;
    }
  `
)

export default Container
