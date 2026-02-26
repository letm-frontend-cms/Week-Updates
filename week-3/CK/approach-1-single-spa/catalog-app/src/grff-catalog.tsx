import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root.component";

let root: ReturnType<typeof ReactDOM.createRoot> | null = null;

export function bootstrap() {
  return Promise.resolve();
}

export function mount(props: { domElement?: HTMLElement }) {
  const domElement = props.domElement || document.getElementById("root");
  if (domElement) {
    root = ReactDOM.createRoot(domElement);
    root.render(
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    );
  }
  return Promise.resolve();
}

export function unmount(props: { domElement?: HTMLElement }) {
  if (root && props.domElement) {
    root.unmount();
    root = null;
  }
  return Promise.resolve();
}
