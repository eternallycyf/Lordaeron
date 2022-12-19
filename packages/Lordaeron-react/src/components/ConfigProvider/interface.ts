import { JssStyle } from "jss";
import { ReactNode } from 'react';
import { RenderEmptyHandler } from "./DefaultRenderEmpty";
import { SizeType } from "./SizeContext";

export interface IGlobalColor {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
}

export interface IDefaultThemeConfig {
  globalColor?: IGlobalColor;
  renderEmpty?: RenderEmptyHandler;
  size?: SizeType;
  disabled?: boolean;
}

export interface GlobalConfigProps {
  children?: ReactNode;
  dark?: boolean;
  prefixCls?: string;
  defaultThemeConfig?: IDefaultThemeConfig;
  customTheme?: {
    // todo
    'Button': JssStyle
  }
}