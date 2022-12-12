
import React, { FC } from "react";
import { ButtonProps } from "./interface";
import useStyles from "./style";
import { useTheme } from 'react-jss'

const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    disabled = false,
    size = 'lg',
    type = 'primary',
    children = null,
    href = "#",
    ...restProps
  } = props
  const theme = useTheme()
  const styles = useStyles({ ...props, ...theme })
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
