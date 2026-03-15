# Week 4: Monorepo Exploration — GRFF

This folder contains the Week 4 setup: shared components library + marketing and dashboard apps.

## What was added

- **`libs/components`** — Shared UI: `Button`, `Card`, `Alert` + `VERSION` (import as `@grff-monorepo/components`).
- **`apps/marketing`** — Marketing site (port **4200**), uses shared components.
- **`apps/dashboard`** — Admin dashboard (port **4201**), uses same components.
- **Tailwind** — Root `tailwind.config.js` and `postcss.config.js`; both apps use `@tailwind` in `src/styles.css`.
- **Docs** — `docs/week4-monorepo-comparison.md`, `docs/week4-final-analysis.md` (templates to fill as you do the exercises).

## Run the Week 4 apps

```bash
# From repo root (grff-monorepo) — this repo uses pnpm
corepack enable   # one-time, if using Node’s corepack for pnpm
pnpm install

# Terminal 1 – Marketing (project name: @org/marketing)
pnpm nx serve @org/marketing

# Terminal 2 – Dashboard (project name: @org/dashboard)
pnpm nx serve @org/dashboard
```

- Marketing: http://localhost:4200  
- Dashboard: http://localhost:4201  

**Note:** If `@org/shop` normally uses port 4200, stop it before running `nx serve marketing`, or change the port in `apps/marketing/vite.config.ts`.

## Try the “instant update” flow (Step 8–9)

1. Keep both apps running.
2. Edit `libs/components/src/lib/Button.tsx` (e.g. change `primary` from `bg-blue-500` to `bg-blue-400`).
3. In `libs/components/src/index.ts` set `export const VERSION = '1.0.1';`.
4. Save — both apps should hot-reload with the new button and version.

## Nx (Day 4)

- Dependency graph: `npx nx graph`
- Affected graph: `npx nx affected:graph`
- Build only affected: `npx nx affected:build`

## pnpm (Day 5)

This repo is set up for **pnpm**:

- **`pnpm-workspace.yaml`** — defines workspace packages (`apps/*`, `libs/components`, etc.).
- **`workspace:*`** — marketing and dashboard depend on `@grff-monorepo/components` via `workspace:*`.
- **`packageManager`** — set in root `package.json` for Corepack; run `corepack enable` then `pnpm install`.
