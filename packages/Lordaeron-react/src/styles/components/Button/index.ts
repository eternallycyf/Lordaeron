import { CSSProperties } from "react";
import { ColorParam } from "../../../types/global";

export interface IButtonStyle {
  $btn_font_weight: number;
  $btn_padding_y: string;
  $btn_padding_x: string;
  $btn_font_family: CSSProperties['fontFamily'];
  $btn_font_size: string;
  $btn_line_height: number;

  $btn_padding_y_sm: string;
  $btn_padding_x_sm: string;
  $btn_font_size_sm: string;

  $btn_padding_y_lg: string;
  $btn_padding_x_lg: string;
  $btn_font_size_lg: string;

  $btn_border_width: string;

  $btn_box_shadow: CSSProperties['boxShadow'];
  $btn_disabled_opacity: number;
  $btn_disabled_background_color: ColorParam;
  $btn_disabled_color: ColorParam;

  $btn_link_color: ColorParam;
  $btn_link_hover_color: ColorParam;

  $btn_border_radius: string;
  $btn_border_radius_lg: string;
  $btn_border_radius_sm: string;

  $btn_transition: CSSProperties['transition'];
}