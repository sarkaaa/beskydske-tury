// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      sizeXXL: string;
      sizeXL: string;
      sizeL: string;
      sizeM: string;
      sizeS: string;
      sizeXS: string;

      screenWidth: {
        desktopXL: string,
        desktopLG: string,
        tablet: string,
        mobile: string,
        mobileXS: string
      }

    };

    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      dark: string;
      gray: string;
      light: string;
      red: string;
      sand: string;
      selectionBg: string;
    };
  }
}