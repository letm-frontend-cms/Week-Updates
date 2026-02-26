import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'shell_app',
  remotes: {
    'react_course': 'react_course_provider@http://localhost:3001/mf-manifest.json',
    'spring_boot_course': 'spring_boot_course_provider@http://localhost:3002/mf-manifest.json',
    'django_course': 'django_course_provider@http://localhost:3003/mf-manifest.json',
    'csharp_course': 'c_sharp_course_provider@http://localhost:3004/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
