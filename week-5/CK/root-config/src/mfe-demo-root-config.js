import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@mfe-demo/mfe-react',
  app: () => System.import('@mfe-demo/mfe-react'),
  activeWhen: () => true,
});

registerApplication({
  name: '@mfe-demo/mfe-angular',
  app: () => System.import('@mfe-demo/mfe-angular'),
  activeWhen: () => true,
});

registerApplication({
  name: '@mfe-demo/mfe-svelte',
  app: () => System.import('@mfe-demo/mfe-svelte'),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
