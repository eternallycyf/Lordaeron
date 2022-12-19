import Color from 'color';
import { ColorParam } from "../types/global";
import { DEFAULT_THEME } from "../theme";
import { IGetVariables, IVariables } from './components'

const getVariables: IGetVariables = ({
  $blue = DEFAULT_THEME.$blue,
  $green = DEFAULT_THEME.$green,
  $cyan = DEFAULT_THEME.$cyan,
  $yellow = DEFAULT_THEME.$yellow,
  $red = DEFAULT_THEME.$red
}) => {

  let variables = {} as IVariables;

  variables.$white = '#FFFFFF' as ColorParam;
  variables.$black = '#000';

  variables.$gray100 = '#f8f9fa';
  variables.$gray200 = '#e9ecef';
  variables.$gray300 = '#dee2e6';
  variables.$gray400 = '#ced4da';
  variables.$gray500 = '#adb5bd';
  variables.$gray600 = '#6c757d';
  variables.$gray700 = '#495057';
  variables.$gray800 = '#343a40';
  variables.$gray900 = '#212529';

  variables.$primary = $blue as ColorParam;
  variables.$secondary = variables.$gray600;
  variables.$success = $green;
  variables.$info = $cyan;
  variables.$warning = $yellow;
  variables.$danger = $red;
  variables.$light = variables.$gray100;
  variables.$dark = variables.$gray800;
  variables.$error = $red;

  variables.$theme_colors = {
    "$primary": variables.$primary,
    "$secondary": variables.$secondary,
    "$success": variables.$success,
    "$info": variables.$info,
    "$warning": variables.$warning,
    "$danger": variables.$danger,
    "$light": variables.$light,
    "$dark": variables.$dark,
    "$error": variables.$error,
  }

  variables.px = 'px';
  variables.rem = 'rem';
  variables.em = 'em';
  variables.vw = 'vw';

  variables.$font_family_sans_serif = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  variables.$font_family_monospace = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  variables.$font_family_base = variables.$font_family_sans_serif;

  // 字体大小
  variables.font_size_base_rem = 1;
  variables.$font_size_base = variables.font_size_base_rem + 'rem'; // Assumes the browser default, typically `16px`
  variables.$font_size_lg = (variables.font_size_base_rem * 1.25) + 'rem';
  variables.$font_size_sm = (variables.font_size_base_rem * 0.875) + 'rem';
  variables.$font_size_root = 'null';

  // 字重
  variables.$font_weight_lighter = 'lighter';
  variables.$font_weight_light = '300';
  variables.$font_weight_normal = '400';
  variables.$font_weight_bold = '700';
  variables.$font_weight_bolder = 'bolder';
  variables.$font_weight_base = variables.$font_weight_normal;

  // 行高
  variables.$line_height_sm = 1.5;
  variables.$line_height_lg = 2;
  variables.$line_height_base = variables.$line_height_sm;

  // 标题大小
  variables.$h1_font_size = (variables.font_size_base_rem * 2.5);
  variables.$h2_font_size = (variables.font_size_base_rem * 2);
  variables.$h3_font_size = (variables.font_size_base_rem * 1.75);
  variables.$h4_font_size = (variables.font_size_base_rem * 1.5);
  variables.$h5_font_size = (variables.font_size_base_rem * 1.25);
  variables.$h6_font_size = (variables.font_size_base_rem * 1);

  // 链接
  variables.$link_color = variables.$theme_colors.$primary;
  variables.$link_decoration = 'none';
  variables.$link_hover_color = Color(variables.$link_color).darken(0.15).hex() as ColorParam;
  variables.$link_hover_decoration = 'none';

  // body
  variables.$body_bg = variables.$white;
  variables.$body_color = variables.$gray900;
  variables.$body_text_align = 'unset';

  // Spacing
  variables.$spacer_rem = 1;
  variables.$spacer = variables.$spacer_rem;

  // 边框和 border-radius
  variables.$border_width = 1 + variables.px;
  variables.$border_color = variables.$gray300;
  variables.$border_radius = 0.25 + variables.rem;
  variables.$border_radius_lg = 0.3 + variables.rem;
  variables.$border_radius_sm = 0.2 + variables.rem;

  // 按钮
  // 按钮基本属性
  variables.$btn_font_weight = 400;
  variables.$btn_padding_y = 0.375 + 'rem';
  variables.$btn_padding_x = 0.75 + 'rem';
  variables.$btn_font_family = variables.$font_family_base;
  variables.$btn_font_size = variables.$font_size_base;
  variables.$btn_line_height = variables.$line_height_base;

  // 不同大小按钮的 padding 和 font size
  variables.$btn_padding_y_sm = 0.25 + 'rem';
  variables.$btn_padding_x_sm = 0.5 + 'rem';
  variables.$btn_font_size_sm = variables.$font_size_sm;

  variables.$btn_padding_y_lg = 0.5 + 'rem';
  variables.$btn_padding_x_lg = 1 + 'rem';
  variables.$btn_font_size_lg = variables.$font_size_lg;

  // 按钮边框
  variables.$btn_border_width = variables.$border_width;

  // 按钮其他
  variables.$btn_box_shadow = 'inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075)';
  variables.$btn_disabled_opacity = 0.65;
  variables.$btn_disabled_background_color = Color(variables.$gray600).lighten(0.9).hex();
  variables.$btn_disabled_color = Color(variables.$gray600).lighten(0.3).hex();

  // 链接按钮
  variables.$btn_link_color = variables.$link_color;
  variables.$btn_link_hover_color = variables.$link_hover_color;

  // 按钮 radius
  variables.$btn_border_radius = variables.$border_radius;
  variables.$btn_border_radius_lg = variables.$border_radius_lg;
  variables.$btn_border_radius_sm = variables.$border_radius_sm;

  variables.$btn_transition = 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out';
  return variables;
}

export default getVariables