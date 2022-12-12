declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare namespace jest {
  interface Matchers<R> {
    toHaveNoViolations(): R;
  }
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module 'lodash';
declare module 'enzyme-adapter-react-16';
declare module 'aria-query"'