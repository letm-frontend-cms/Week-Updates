import { registerApplication, start, type LifeCycles } from "single-spa";

declare const System: { import(name: string): Promise<unknown> };

// Register Catalog App
registerApplication({
  name: "@grff/catalog",
  app: () => System.import("@grff/catalog") as Promise<LifeCycles<unknown>>,
  activeWhen: ["/"],
  customProps: () => ({ domElement: document.getElementById("catalog-container") }),
});

// Register Cart App
registerApplication({
  name: "@grff/cart",
  app: () => System.import("@grff/cart") as Promise<LifeCycles<unknown>>,
  activeWhen: ["/cart"],
  customProps: () => ({ domElement: document.getElementById("cart-container") }),
});

// Start single-spa
start({
  urlRerouteOnly: true,
});
