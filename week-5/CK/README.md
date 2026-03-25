# Single-SPA microfrontend demo (React, Angular, Svelte + RxJS)

Five **standalone** projects (no monorepo) wired together with **SystemJS import maps** and an in-memory **RxJS** `Subject` in `@mfe-demo/event-bus`.

**Message passing:** see [docs/message-passing.md](docs/message-passing.md) for the envelope shape, `send` / `events$`, and how each MFE subscribes.

| App | Port | Role |
|-----|------|------|
| `event-bus` | 9002 | Shared RxJS `send` / `events$` bundle |
| `root-config` | 9000 | Shell: load `single-spa`, register three MFEs |
| `mfe-react` | 8500 | React MFE (`single-spa-react`) — counter |
| `mfe-angular` | 4200 | Angular MFE (`single-spa-angular`) — text |
| `mfe-svelte` | 8501 | Svelte MFE (`single-spa-svelte`) — color |

**Note:** React here stands in for the Next.js/React stack; Next.js does not ship as a single-spa remote the same way.

The shell loads **React 17** from `@esm-bundle/react` / `@esm-bundle/react-dom` on jsDelivr (published SystemJS bundles). There is **no React 18** build under those packages on npm, so the React MFE uses `render` instead of `createRoot`.

**Zone.js:** `single-spa-angular` treats `zone.js` as a webpack external and drops the polyfills chunk, so the **root-config** HTML loads `zone.umd.min.js` before SystemJS. Without that, Angular throws `NG0908`.

**Angular + `@mfe-demo/event-bus`:** The Angular app is built with `libraryTarget: "system"` (see `angular.json`) so `main.js` is a `System.register` bundle that declares `@mfe-demo/event-bus` as a dependency. With the older default `umd`, webpack expected `window["@mfe-demo/event-bus"]`, which SystemJS never set, so `events$` was `undefined`.

## Prerequisites

- Node.js 18+ (Angular 18 CLI is tested with LTS; Node 20+ recommended)

## Run

Open **five terminal windows**, each in this folder, then:

```bash
cd event-bus && npm install && npm start
```

```bash
cd root-config && npm install && npm start
```

```bash
cd mfe-react && npm install && npm start
```

```bash
cd mfe-angular && npm install && npm start
```

```bash
cd mfe-svelte && npm install && npm start
```

Then open **http://localhost:9000** in the browser.

Use **Send** in each panel to broadcast; **Receive** shows messages from the other MFEs via the shared bus.

## Optional

- **Production builds:** `npm run build` in each project (Angular outputs `dist/mfe-angular/main.js` for the import map).
- **Angular:** `ng serve` must be running so `http://localhost:4200/main.js` is available to the shell.

## How it works

1. `root-config` loads `single-spa` and registers the three applications.
2. Each MFE is loaded from its dev server URL in the import map.
3. `@mfe-demo/event-bus` is a single SystemJS module; all MFEs import the **same** `Subject` instance so messages propagate in-memory on one page.
