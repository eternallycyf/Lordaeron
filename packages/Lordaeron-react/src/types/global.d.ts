declare global {
  namespace Jss {
    export interface Theme {
      background: string
    }
  }
}

export type ColorParam = Color | string | ArrayLike<number> | number | { [key: string]: any };