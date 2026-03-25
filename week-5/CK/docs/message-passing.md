# Message passing (RxJS event bus)

This demo shares one in-memory **RxJS `Subject`**, exposed as [`@mfe-demo/event-bus`](../event-bus/src/index.js). All microfrontends load the **same** module URL from the root shell import map, so they share a **single** bus instance on one page.

## API

| Export | Role |
|--------|------|
| `send(type, payload, source)` | Push one message onto the bus. |
| `events$` | Observable stream of **all** messages (hot). |
| `ofType(type)` | Convenience: `events$.pipe(filter(e => e.type === type))`. |

## Message shape

Every emission is a plain object:

| Field | Type | Meaning |
|-------|------|---------|
| `type` | `string` | Logical channel name (e.g. `counter`, `text`, `color`). |
| `payload` | `unknown` | Data from the sender (number, string, hex color, etc.). |
| `source` | `string` | Which MFE sent it: `react`, `angular`, or `svelte`. |
| `timestamp` | `number` | `Date.now()` when `send` ran. |

Example:

```js
{ type: 'counter', payload: 3, source: 'react', timestamp: 1711358400123 }
```

## Send path

1. User acts in an MFE (button, input, color picker).
2. Code calls `send('myType', value, SOURCE)` with a **stable** `SOURCE` constant for that app.
3. `Subject.next(...)` notifies all current subscribers immediately (same tab, same runtime).

There is **no** server, **no** `BroadcastChannel`, and **no** persistence—messages exist only while the page is open.

## Receive path

Each MFE subscribes to `events$` and **ignores** its own `source` so the “Receive” list only shows **other** apps.

| MFE | Mechanism |
|-----|-----------|
| **React** | `useEffect` → `events$.subscribe(...)` → `unsubscribe` on cleanup. |
| **Angular** | `EventBusService` uses `events$.pipe(scan(...))`; template uses `async` pipe. |
| **Svelte** | `events$.subscribe(...)` in `<script>`, `onDestroy` unsubscribes. |

## Why imports resolve

- **React / Svelte** bundles are **System.register** modules with `@mfe-demo/event-bus` in the dependency list; SystemJS injects the shared module.
- **Angular** is also built with `libraryTarget: "system"` so the same applies. (UMD would have expected a global and broke `events$`.)

## Extending the demo

- Add new message types: use a new `type` string or narrow with `ofType('orders')`.
- Share structured payloads: pass objects as `payload` (they are passed by reference through the subject’s value).
- For **cross-tab** or **cross-origin** delivery, you would add another layer (e.g. `BroadcastChannel`, `postMessage`, or a backend)—this repo stays in-process on purpose.
