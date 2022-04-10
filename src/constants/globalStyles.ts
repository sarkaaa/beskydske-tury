import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`*::selection {
    background-color: ${theme.colors.selectionBg};
  }
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: ${theme.colors.light};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: ${theme.sizes.sizeXL};
    text-align: center;
    line-height: 1.5;
  }
  @media ${theme.sizes.screenWidth.tablet} {
    h1 {
      font-size: ${theme.sizes.sizeXXL};
    }
  }
  h2 {
    color: ${theme.colors.dark};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: ${theme.sizes.sizeL};
    line-height: 1.25;
    text-align: center;
  }
  @media ${theme.sizes.screenWidth.tablet} {
    h2 {
      font-size: ${theme.sizes.sizeXL};
    }
  }
  h3 {
    color: ${theme.colors.primary};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: ${theme.sizes.sizeM};
    text-align: center;
  }
  p,
  ul li {
    color: ${theme.colors.dark};
    font-family: 'Merriweather', sans-serif;
    font-weight: 500;
    font-size: ${theme.sizes.sizeXS};
    line-height: 2;
  }
  `
)

export default GlobalStyles;