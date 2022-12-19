import { ColorParam } from "../../types/global";
import type {
  IGrayColors,
  IThemeColors,
  IUnit,
  IFont,
  ILine,
  ITitle,
  ILink,
  IBody,
  ISpacing,
  IBorders
} from './base';

import type { IButtonStyle } from './Button'

export interface IGetVariablesArgs<T = ColorParam> {
  $blue?: T;
  $green?: T;
  $cyan?: T;
  $yellow?: T;
  $red?: T;
};


export interface IVariables extends
  IGrayColors,
  IThemeColors,
  IUnit,
  IFont,
  ILine,
  ITitle,
  ILink,
  IBody,
  ISpacing,
  IBorders,
  IButtonStyle {
  $white: ColorParam;
  $black: ColorParam;
  $theme_colors: IThemeColors;
};

type IGetVariables = (args: IGetVariablesArgs) => IVariables & {
  $white: ColorParam;
  $black: ColorParam;
  $theme_colors: IThemeColors;
} & IGetVariablesArgs;

export {
  /** default */
  IGetVariables,

  /**component*/
  IButtonStyle
}
