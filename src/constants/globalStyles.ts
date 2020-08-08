import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.sizeXL};
  }
  @media screen and (min-width: 420px) {
    h1 {
      font-size: ${({ theme }) => theme.sizes.sizeXXL};
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.sizeXL};
  }
  h3 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Lato', sans-serif;
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