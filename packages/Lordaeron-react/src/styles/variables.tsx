import Color from 'color';
import { ColorParam } from '../types/global'

export const $gray100 = '#f8f9fa';
export const $gray200 = '#e9ecef';
export const $gray300 = '#dee2e6';
export const $gray400 = '#ced4da';
export const $gray500 = '#adb5bd';
export const $gray600 = '#6c757d';
export const $gray700 = '#495057';
export const $gray800 = '#343a40';
export const $gray900 = '#212529';
export const $black = '#000';

export const $blue = '#0d6efd';
export const $indigo = '#6610f2';
export const $purple = '#6f42c1';
export const $pink = '#d63384';
export const $red = '#dc3545';
export const $orange = '#fd7e14';
export const $yellow = '#fadb14';
export const $green = '#52c41a';
export const $teal = '#20c997';
export const $cyan = '#17a2b8';
export const $tomato = '#ff4d4f';
export const $white = '#FFFFFF' as ColorParam;

export const $primary = $blue as ColorParam;
export const $secondary = $gray600;
export const $success = $green;
export const $info = $cyan;
export const $warning = $yellow;
export const $danger = $red;
export const $light = $gray100;
export const $dark = $gray800;
export const $error = $tomato;

const $theme_colors = {
  "primary": $primary,
  "secondary": $secondary,
  "success": $success,
  "info": $info,
  "warning": $warning,
  "danger": $danger,
  "light": $light,
  "dark": $dark,
  "error": $error,
}

const px = 'px';
const rem = 'rem';
const em = 'em';
const vw = 'vw';

export const $font_family_sans_serif = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
export const $font_family_monospace = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
export const $font_family_base = $font_family_sans_serif;

// 字体大小
const font_size_base_rem = 1;
export const $font_size_base = font_size_base_rem + 'rem'; // Assumes the browser default, typically `16px`
export const $font_size_lg = (font_size_base_rem * 1.25) + 'rem';
export const $font_size_sm = (font_size_base_rem * 0.875) + 'rem';
export const $font_size_root = 'null';

// 字重
export const $font_weight_lighter = 'lighter';
export const $font_weight_light = '300';
export const $font_weight_normal = '400';
export const $font_weight_bold = '700';
export const $font_weight_bolder = 'bolder';
export const $font_weight_base = $font_weight_normal;

// 行高
export const $line_height_sm = 1.5;
export const $line_height_lg = 2;
export const $line_height_base = $line_height_sm;

// 标题大小
export const $h1_font_size = (font_size_base_rem * 2.5);
export const $h2_font_size = (font_size_base_rem * 2);
export const $h3_font_size = (font_size_base_rem * 1.75);
export const $h4_font_size = (font_size_base_rem * 1.5);
export const $h5_font_size = (font_size_base_rem * 1.25);
export const $h6_font_size = (font_size_base_rem * 1);

// 链接
export const $link_color = $theme_colors.primary;
export const $link_decoration = 'none';
export const $link_hover_color = Color($link_color).darken(0.15).hex() as ColorParam;
export const $link_hover_decoration = 'none';

// body
export const $body_bg = $white;
export const $body_color = $gray900;
export const $body_text_align = 'null';

// Spacing
export const $spacer_rem = 1;
export const $spacer = $spacer_rem;

// 边框和 border-radius
export const $border_width = 1 + px;
export const $border_color = $gray300;
export const $border_radius = 0.25 + rem;
export const $border_radius_lg = 0.3 + rem;
export const $border_radius_sm = 0.2 + rem;

// 按钮
// 按钮基本属性
export const $btn_font_weight = 400;
export const $btn_padding_y = 0.375 + 'rem';
export const $btn_padding_x = 0.75 + 'rem';
export const $btn_font_family = $font_family_base;
export const $btn_font_size = $font_size_base;
export const $btn_line_height = $line_height_base;

// 不同大小按钮的 padding 和 font size
export const $btn_padding_y_sm = 0.25 + 'rem';
export const $btn_padding_x_sm = 0.5 + 'rem';
export const $btn_font_size_sm = $font_size_sm;

export const $btn_padding_y_lg = 0.5 + 'rem';
export const $btn_padding_x_lg = 1 + 'rem';
export const $btn_font_size_lg = $font_size_lg;

// 按钮边框
export const $btn_border_width = $border_width;

// 按钮其他
export const $btn_box_shadow = 'inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075)';
export const $btn_disabled_opacity = 0.65;
export const $btn_disabled_background_color = Color($gray600).lighten(0.9).hex();
export const $btn_disabled_color = Color($gray600).lighten(0.3).hex();

// 链接按钮
export const $btn_link_color = $link_color;
export const $btn_link_hover_color = $link_hover_color;

// 按钮 radius
export const $btn_border_radius = $border_radius;
export const $btn_border_radius_lg = $border_radius_lg;
export const $btn_border_radius_sm = $border_radius_sm;

export const $btn_transition = 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out';