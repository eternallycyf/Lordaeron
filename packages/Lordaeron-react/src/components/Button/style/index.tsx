import { createUseStyles } from 'react-jss';
import * as mixins from './mixin';
import { RuleNames } from "../interface";
import getVariables from '../../../styles/variables';

const useStyles = createUseStyles<RuleNames>((theme) => {
  let variables = { ...getVariables({}) }
  if (theme.themeType) {
    variables = { ...variables, ...theme.themeVariables }
  }
  const customTheme = theme?.customTheme && theme?.customTheme?.Button ? theme?.customTheme?.Button : {};
  const styles = {
    'lordaeron-button': {
      display: 'inline-block',
      ...customTheme
    },
    btn: {
      position: 'relative',
      display: 'inline-block',
      fontWeight: variables.$btn_font_weight,
      lineHeight: variables.$btn_line_height,
      color: variables.$body_color,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundImage: 'none',
      border: variables.$btn_border_width + ' solid transparent',
      ...mixins.buttonSize(variables.$btn_padding_y, variables.$btn_padding_x, variables.$btn_font_size, variables.$border_radius),
      boxShadow: variables.$btn_box_shadow,
      cursor: 'pointer',
      transition: variables.$btn_transition,
      '&.disabled, &[disabled]': {
        cursor: 'not-allowed',
        opacity: variables.$btn_disabled_opacity,
        boxShadow: 'none',
        '& > *': {
          pointerEvents: 'none',
        },
      },
    },
    'btn-large': {
      ...mixins.buttonSize(variables.$btn_padding_y_lg, variables.$btn_padding_x_lg, variables.$btn_font_size_lg, variables.$btn_border_radius_lg),
    },
    'btn-small': {
      ...mixins.buttonSize(variables.$btn_padding_y_sm, variables.$btn_padding_x_sm, variables.$btn_font_size_sm, variables.$btn_border_radius_sm),
    },
    'btn-primary': {
      ...mixins.buttonStyle(variables.$primary, variables.$primary, variables.$white),
    },
    'btn-danger': {
      ...mixins.buttonStyle(variables.$danger, variables.$danger, variables.$white),
    },
    'btn-default': {
      ...mixins.buttonStyle(variables.$white, variables.$gray400, variables.$body_color, variables.$white, variables.$primary, variables.$primary),
    },
    'btn-link': {
      fontWeight: variables.$font_weight_normal,
      color: variables.$btn_link_color,
      textDecoration: variables.$link_decoration,
      boxShadow: 'none',
      border: 'none',
      '&:hover': {
        color: variables.$btn_link_hover_color,
        textDecoration: variables.$link_hover_decoration,
      },
      '&:focus, &.focus': {
        textDecoration: variables.$link_hover_decoration,
        boxShadow: 'none',
      },
      '&:disabled, &.disabled': {
        color: variables.$btn_disabled_color,
      },
    },
    disabled: {
      color: variables.$btn_disabled_color,
      cursor: 'not-allowed',
    }
  }
  return styles
})

export default useStyles;