
import React, { FC } from "react"
import { ButtonProps } from "./interface"
import useStyles from "./style"

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
  const styles = useStyles({ ...props })
  const classes = `lordaeron-button ${className} ${styles.btn} ${styles['btn-' + type]} ${styles['btn-' + size]} ${disabled && styles.disabled}`

  if (type === 'link') {
    return (
      <a onClick={(e) => e.preventDefault()} className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}
export default Button
