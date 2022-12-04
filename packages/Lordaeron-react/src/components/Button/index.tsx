import React from "react"
import { ButtonProps, CustomTheme } from "./interface"
import { useTheme } from 'react-jss'
import useStyles from "./style"

const Button = (props: ButtonProps) => {
  const theme = useTheme<CustomTheme>()
  const styles = useStyles({ ...props, theme })
  return (
    <>
      <button className={styles.myButton}>
        <span className={styles.myLabel}>{props.children}</span>
      </button>
    </>
  )
}

export default Button