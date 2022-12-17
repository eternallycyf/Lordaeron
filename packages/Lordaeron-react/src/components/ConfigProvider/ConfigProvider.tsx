import React, { createContext } from 'react';
import { GlobalConfigProps } from './interface';
import { JssProvider as PrefixClsProvider, ThemeProvider } from 'react-jss'
import { ConfigContext } from "./context";
import SizeContext, { SizeContextProvider } from "./SizeContext";
import DARK_THEME from '../../theme/themes/dark';
import { DEFAULT_THEME } from '../../theme';
import { DisabledContextProvider } from "./DisabledContext";
import getVariables from "../../styles/variables";
let variables = { ...getVariables({ ...DEFAULT_THEME }) };

export const globalCtx = createContext<GlobalConfigProps>({} as GlobalConfigProps);

const GlobalConfig = (props: GlobalConfigProps) => {
  const { children, prefixCls, defaultThemeConfig, customTheme, dark } = props;

  let childNode = children;
  let currentTheme: any = {};

  if (defaultThemeConfig?.size) {
    childNode = <SizeContextProvider size={defaultThemeConfig.size}>{childNode}</SizeContextProvider>;
  }

  if (defaultThemeConfig?.disabled) {
    childNode = <DisabledContextProvider disabled={defaultThemeConfig.disabled}>{childNode}</DisabledContextProvider>;
  }

  if (defaultThemeConfig?.renderEmpty) {
    childNode = <ConfigContext.Provider value={{ renderEmpty: defaultThemeConfig.renderEmpty }}>{childNode}</ConfigContext.Provider>;
  }

  if (customTheme) {
    currentTheme = {
      customTheme, variables: { ...variables }
    }
  }

  if (dark) {
    currentTheme = {
      currentTheme,
      variables: { ...variables, ...getVariables(DARK_THEME) }
    }
  }

  return (
    <globalCtx.Provider value={props}>
      <ThemeProvider theme={currentTheme}>
        <PrefixClsProvider classNamePrefix={prefixCls ?? 'lord'}>
          {children}
        </PrefixClsProvider>
      </ThemeProvider>
    </globalCtx.Provider>
  )
};


GlobalConfig.ConfigContext = ConfigContext;
GlobalConfig.SizeContext = SizeContext;

export default GlobalConfig;