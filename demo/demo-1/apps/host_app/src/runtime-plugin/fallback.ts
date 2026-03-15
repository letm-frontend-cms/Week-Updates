import type { ModuleFederationRuntimePlugin } from '@module-federation/runtime';

const FALLBACK_MESSAGE =
  'Module loading failed. Please ensure the remote app is running and try again.';

const fallbackPlugin = (): ModuleFederationRuntimePlugin => {
  return {
    name: 'fallback-plugin',
    async errorLoadRemote(args) {
      if (args.lifecycle === 'onLoad') {
        const React = await import('react');
        const FallbackComponent = React.memo(() =>
          React.createElement(
            'div',
            {
              style: {
                padding: '24px',
                margin: '16px',
                border: '1px solid #ffa39e',
                borderRadius: '8px',
                backgroundColor: '#fff1f0',
                color: '#cf1322',
              },
            },
            FALLBACK_MESSAGE
          )
        );
        FallbackComponent.displayName = 'ErrorFallbackComponent';

        return () => ({
          __esModule: true,
          default: FallbackComponent,
        });
      }
      return args;
    },
  };
};

export default fallbackPlugin;
