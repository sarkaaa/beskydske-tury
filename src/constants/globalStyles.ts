import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  *::selection {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.sizeXL};
    text-align: center;
    line-height: 1.2;
  }
  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    h1 {
      font-size: ${({ theme }) => theme.sizes.sizeXXL};
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.sizeL};
    line-height: 1.25;
  }
  @media ${({ theme }) => theme.sizes.screenWidth.tablet} {
    h2 {
      font-size: ${({ theme }) => theme.sizes.sizeXL};
    }
  }
  h3 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.sizeM};
  }
  p {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Merriweather', sans-serif;
    font-weight: 500;
    font-size: ${({ theme }) => theme.sizes.sizeXS};
    line-height: 2;
  }
`;
 
export default GlobalStyles;