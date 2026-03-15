import path from 'path';
import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'host_app',
  remotes: {
    home_page: 'home_page@http://localhost:4001/mf-manifest.json',
  },
  dts: false,
  shareStrategy: 'loaded-first',
  runtimePlugins: [
    path.resolve(process.cwd(), 'src/runtime-plugin/fallback.ts'),
  ],
  shared: {
    react: { singleton: true, requiredVersion: '^18.3.1' },
    'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
  },
});
