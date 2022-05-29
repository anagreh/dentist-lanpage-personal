// import original module declarations
import 'styled-components';
import { lightTheme } from './lightTheme';

// and extend them!
type theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
