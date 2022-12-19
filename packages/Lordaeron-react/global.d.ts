import { DARK_THEME } from "./src/theme";
import { IVariables } from "./src/styles/components";
declare global {
  namespace Jss {
    export interface Theme {
      customTheme?: any;
      themeType?: 'dark' | 'light';
      themeVariables?: IVariables;
    };
  };
}

export { }