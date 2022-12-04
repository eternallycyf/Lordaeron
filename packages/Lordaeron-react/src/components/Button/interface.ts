// Define Component
export type RuleNames = 'myButton' | 'myLabel'

export interface ButtonProps {
  children?: React.ReactNode
  spacing?: number
  fontWeight?: string
  labelColor?: string
}

export interface CustomTheme {
  background: string
}