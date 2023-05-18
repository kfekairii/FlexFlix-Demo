import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryLighter: string;
      secondary: string;
      background: string;
      text: string;
      textTint: string;
      gray: string;
      lightGray: string;
    };
    typography: {
      lg: number;
      xs: number;
      sm: number;
      md: number;
    };
  }
}
