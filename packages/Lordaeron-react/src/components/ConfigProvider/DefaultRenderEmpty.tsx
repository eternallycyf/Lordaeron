import * as React from 'react';
import Empty from '../Empty';
import { ConfigConsumer } from './context';

const defaultRenderEmpty = (componentName?: string): React.ReactNode => (
  <ConfigConsumer>
    {() => {
      switch (componentName) {
        case 'Table':
        case 'List':
          // TODO
          // return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
          return <Empty />
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          // todo
          // return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className={`${prefix}-small`} />;
          return <Empty />;
        /* istanbul ignore next */
        default:
          // Should never hit if we take all the component into consider.
          return <Empty />;
      }
    }}
  </ConfigConsumer>
);

export type RenderEmptyHandler = typeof defaultRenderEmpty;

export default defaultRenderEmpty;
