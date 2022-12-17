
import React, { FC } from "react";
import { ButtonProps } from "./interface";
import useStyles from "./style";
import { useTheme } from 'react-jss'
import { globalCtx } from "../ConfigProvider/ConfigProvider";
import { getDefaultProps } from "./utils";

const Button: FC<ButtonProps> = (props) => {
  const globalValue = React.useContext(globalCtx);
  let {
    className = '',
    disabled = false,
    size = 'middle',
    type = 'primary',
    children = null,
    href = "#",
    ...restProps
  } = getDefaultProps(props, globalValue.defaultThemeConfig)
  const theme = useTheme()
  const styles = useStyles({ ...props, ...theme, ...globalValue })
  const classes = `${className} ${styles.btn} ${styles['btn-' + type]} ${styles['btn-' + size]} ${disabled && styles.disabled}`

  const Link = (
    <a onClick={(e) => e.preventDefault()} className={classes} href={href} {...restProps}>
      {children}
    </a>
  )

  const Button = (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )

  return (
    <div className={styles["lordaeron-button"]}>
      {type == 'link' ? Link : Button}
    </div>
  )
}
export default Button
