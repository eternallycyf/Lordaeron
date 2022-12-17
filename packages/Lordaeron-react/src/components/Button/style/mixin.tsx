import Color from 'color';
import getVariables from "../../../styles/variables";
import { DEFAULT_THEME } from "../../../theme";
let variables = { ...getVariables({ ...DEFAULT_THEME }) };

export const buttonSize = ($padding_y, $padding_x, $font_size, $border_radius) => {
  return {
    padding: $padding_y + ' ' + $padding_x,
    fontSize: $font_size,
    borderRadius: $border_radius,
  };
}

export const buttonStyle = (
  $background,
  $border,
  $color,
  $hover_background = Color($background).lighten(0.075),
  $hover_border = Color($border).lighten(0.010),
  $hover_color = $color
) => {
  return {
    color: $color,
    background: $background,
    borderColor: $border,
    '&:hover': {
      color: $hover_color,
      background: $hover_background,
      borderColor: $hover_border,
    },
    '&:focus, &.focus': {
      color: $hover_color,
      background: $hover_background,
      borderColor: $hover_border,
    },
    '&:disabled, &.disabled': {
      borderColor: variables.$border_color,
      color: variables.$btn_disabled_color,
      backgroundColor: variables.$btn_disabled_background_color
    },
  };
}