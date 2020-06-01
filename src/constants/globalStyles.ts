import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  h3 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 1.75rem;
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