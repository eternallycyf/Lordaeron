import { createUseStyles } from 'react-jss'
import { ButtonProps, CustomTheme, RuleNames } from "../interface";

const useStyles = createUseStyles<RuleNames, ButtonProps, CustomTheme>({
  myButton: {
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '14px',
    lineHeight: '1.5px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    backgroundImage: 'none',
    verticalAlign: 'middle',
    borderColor: '#d9d9d9',
    borderStyle: 'dashed',
    borderRadius: '4px',
    width: 64,
    height: 32,
    background: '#fff'
  },
  myLabel: ({ theme, ...props }) => ({
    fontSize: 14,
    fontWeight: 400
  })
})

export default useStyles;