import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App.jsx';

// Use React 17 + legacy render so shell import map can load @esm-bundle/* SystemJS builds (no React 18 on @esm-bundle).
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  renderType: 'render',
});

export const { bootstrap, mount, unmount } = lifecycles;
