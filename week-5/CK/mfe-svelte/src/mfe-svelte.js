import singleSpaSvelte from 'single-spa-svelte';
import App from './App.svelte';

const lifecycles = singleSpaSvelte({
  component: App,
});

export const { bootstrap, mount, unmount } = lifecycles;
