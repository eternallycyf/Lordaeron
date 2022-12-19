import { CSSProperties } from "react";
import { ColorParam } from "../../types/global";

export interface IGrayColors<T = ColorParam> {
  $gray100: T;
  $gray200: T;
  $gray300: T;
  $gray400: T;
  $gray500: T;
  $gray600: T;
  $gray700: T;
  $gray800: T;
  $gray900: T;
}

export interface IThemeColors<T = ColorParam> {
  $primary: T;
  $secondary: T;
  $success: T;
  $info: T;
  $warning: T;
  $danger: T;
  $light: T;
  $dark: T;
  $error: T;
}

export interface IUnit {
  px: string;
  rem: string;
  em: string;
  vw: string;
}

export interface IFont {
  $font_family_sans_serif: CSSProperties['fontFamily'];
  $font_family_monospace: CSSProperties['fontFamily'];
  $font_family_base: CSSProperties['fontFamily'];
  $font_weight_normal: string;

  font_size_base_rem: number;
  $font_size_base: string;
  $font_size_lg: string;
  $font_size_sm: string;
  $font_size_root: 'null';

  $font_weight_base: string;
  $font_weight_lighter: 'lighter';
  $font_weight_bolder: 'bolder';
  $font_weight_light: string;
  $font_weight_bold: string;
}

export interface ILine {
  $line_height_base: number;
  $line_height_sm: number;
  $line_height_lg: number;
}

export interface ITitle {
  $h1_font_size: number;
  $h2_font_size: number;
  $h3_font_size: number;
  $h4_font_size: number;
  $h5_font_size: number;
  $h6_font_size: number;
}

export interface ILink {
  $link_color: ColorParam;
  $link_decoration: CSSProperties['textDecoration'];
  $link_hover_color: ColorParam;
  $link_hover_decoration: CSSProperties['textDecoration'];
}

export interface IBody {
  $body_bg: ColorParam;
  $body_color: ColorParam;
  $body_text_align: CSSProperties['textAlign'];
}

export interface ISpacing {
  $spacer_rem: number;
  $spacer: number;
}

export interface IBorders {
  $border_width: string;
  $border_color: ColorParam;
  $border_radius: string;
  $border_radius_lg: string;
  $border_radius_sm: string;
}
