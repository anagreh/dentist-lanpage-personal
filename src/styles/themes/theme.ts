// my-theme.ts
import { DefaultTheme } from 'styled-components';

const baseTheme = {
  primary_color: 'red',
};

const lightTheme: DefaultTheme = {
  borderRadius: '',
  colors: {
    main: baseTheme.primary_color,
    secondary: '',
  },
};

export { lightTheme };
