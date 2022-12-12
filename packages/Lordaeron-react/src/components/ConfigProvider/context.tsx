import * as React from 'react';

export interface ConfigConsumerProps { }

export const ConfigContext = React.createContext<ConfigConsumerProps>({});

export const ConfigConsumer = ConfigContext.Consumer;

// =========================== withConfigConsumer ===========================
interface BasicExportProps { }

interface ConsumerConfig { }

interface ConstructorProps {
  displayName?: string;
}

/** @deprecated Use hooks instead. This is a legacy function */
export function withConfigConsumer<ExportProps extends BasicExportProps>(config: ConsumerConfig) {
  return function withConfigConsumerFunc<ComponentDef>(
    Component: React.ComponentType<ExportProps>,
  ): React.FC<ExportProps> & ComponentDef {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    const SFC = ((props: ExportProps) => (
      <ConfigConsumer>
        {(configProps: ConfigConsumerProps) => {
          return <Component {...configProps} {...props} />;
        }}
      </ConfigConsumer>
    )) as React.FC<ExportProps> & ComponentDef;

    const cons: ConstructorProps = Component.constructor as ConstructorProps;
    const name = (cons && cons.displayName) || Component.name || 'Component';

    if (process.env.NODE_ENV !== 'production') {
      SFC.displayName = `withConfigConsumer(${name})`;
    }
    return SFC;
  };
}
