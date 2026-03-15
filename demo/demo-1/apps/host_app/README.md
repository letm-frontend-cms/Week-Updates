# Rsbuild Project (Host App)

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

The host app loads the Home Page from the `home_page` Module Federation remote. You need the remote running first.

**Option 1: Run both apps (recommended for dev)**

From the demo root:

```bash
pnpm dev
```

This starts the remote first (port 4001), waits for it to be ready, then starts the host (port 4000).

**Option 2: Run with built remote**

```bash
pnpm build:home_page
pnpm preview:home_page   # In one terminal - serves home_page on 4001
pnpm start:host_app      # In another terminal - host on 4000
```

**Note:** If you see "Port is in use", stop other processes using ports 4000 and 4001 before running.

**Option 3: Host only (remote must be running elsewhere)**

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
