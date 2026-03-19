# Module Federation Demo – Deployment Plan

Deploy the host + remote setup to free/open-source platforms (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

---

## Architecture Overview

| App | Build Tool | Output | Port (dev) |
|-----|------------|--------|------------|
| **Host** | Rsbuild | Static (SPA) | 4000 |
| **Remote** (home_page) | Vite | Static (SPA) | 4001 |

**Critical:** The host loads the remote at runtime via `loadRemote('home_page/HomePage')`. The remote URL is configured in `module-federation.config.ts` and must point to the deployed remote in production.

---

## Free Hosting Options

| Platform | Free Tier | Build | Notes |
|----------|-----------|-------|-------|
| **Vercel** | Yes | Node 18+ | Monorepo, env vars, preview deploys |
| **Netlify** | Yes | Node 18+ | Monorepo, split deploys |
| **Cloudflare Pages** | Yes | Node 18+ | Fast CDN |
| **GitHub Pages** | Yes | GitHub Actions | Static only, no server |
| **Render** | Yes | Node 18+ | Static + optional backend |
| **Railway** | Limited free | Node 18+ | Good for demos |

**Recommended:** Vercel or Netlify for monorepos and easy env-based config.

---

## Pre-Deployment Changes

### 1. Dynamic Remote URL (Required)

**Current:** `home_page@http://localhost:4001/mf-manifest.json` (hardcoded)

**Target:** Use env var so dev uses localhost and prod uses deployed URL.

| Env Var | Dev | Production |
|---------|-----|------------|
| `VITE_REMOTE_HOME_PAGE_URL` | `http://localhost:4001` | `https://home-page-xxx.vercel.app` |

**Files to update:**
- `host_app/module-federation.config.ts` – read remote URL from env
- `host_app/src/components/RemoteFallback.tsx` – use same URL for “Open Standalone”

### 2. Base Path for Subpath Deployments

If deploying to paths like `https://example.com/demo/`:
- Host: `base: '/demo/'`
- Remote: `base: '/demo-remote/'` (or similar)

For root deployments (`/`), no change needed.

### 3. CORS

Remote must allow the host origin. Vite/Rsbuild static builds typically don’t set CORS; the hosting platform usually handles it. If needed, configure headers (e.g. Netlify `_headers`, Vercel `vercel.json`).

### 4. Build Scripts

Add root-level scripts:

```json
{
  "scripts": {
    "build": "pnpm run build:home_page && pnpm run build:host_app",
    "build:host_app": "pnpm --filter host_app build"
  }
}
```

---

## Deployment Strategies

### Strategy A: Same Platform, Two Projects (Recommended)

Deploy host and remote as separate projects on the same platform.

**Vercel example:**
1. **Remote:** `apps/E-commerce-HomePage` → project `demo-1-home-page`
   - Build: `pnpm run build` (from E-commerce-HomePage)
   - Output: `dist`
   - URL: `https://demo-1-home-page.vercel.app`

2. **Host:** `apps/host_app` → project `demo-1-host`
   - Env: `VITE_REMOTE_HOME_PAGE_URL=https://demo-1-home-page.vercel.app`
   - Build: `pnpm run build` (from host_app)
   - Output: `dist`
   - URL: `https://demo-1-host.vercel.app`

3. Deploy order: Remote first, then host (so manifest is available).

---

### Strategy B: Monorepo, Single Project (Subpaths)

Deploy both from one project, host at `/`, remote at `/remote/`.

**Steps:**
1. Build remote with `base: '/remote/'`.
2. Build host with `base: '/'`.
3. Copy remote `dist/` into host `dist/remote/`.
4. Deploy host `dist/` as the only output.
5. Host config: `home_page@/remote/mf-manifest.json` (relative).

**Pros:** Single deployment, no CORS.  
**Cons:** More custom build setup.

---

### Strategy C: GitHub Pages

GitHub Pages serves static files from `gh-pages` or `docs/`.

**Constraints:**
- No env vars at build time (unless using GitHub Actions).
- Often served under `https://user.github.io/repo/` → need `base`.

**Approach:**
1. Use GitHub Actions to build with env vars.
2. Set `base: '/repo-name/'` for both apps.
3. Deploy remote to `repo-name/remote/`, host to `repo-name/` (or use two repos).

---

## Implementation Checklist

| # | Task | Priority |
|---|------|----------|
| 1 | Add `VITE_REMOTE_HOME_PAGE_URL` (or similar) to host config | High |
| 2 | Update `module-federation.config.ts` to use env for remote URL | High |
| 3 | Update `RemoteFallback.tsx` to use env for standalone link | Medium |
| 4 | Add root `build` script | High |
| 5 | Add platform config (e.g. `vercel.json`, `netlify.toml`) | High |
| 6 | Document env vars in README | Medium |
| 7 | Test production build locally (`pnpm build && pnpm preview`) | High |

---

## Platform-Specific Config

### Vercel (Implemented)

- `apps/E-commerce-HomePage/vercel.json` – Remote config
- `apps/host_app/vercel.json` – Host config
- See **docs/VERCEL-DEPLOYMENT.md** for step-by-step deployment

### Netlify

**`netlify.toml`** (per project or root):

```toml
[build]
  command = "pnpm run build"
  publish = "dist"
```

For monorepo, use **Base directory** in UI (e.g. `apps/host_app`).

### Cloudflare Pages

- Build command: `pnpm run build`
- Build output: `dist`
- Node version: 18

---

## Env Var Naming

| Var | Used By | Example |
|-----|---------|---------|
| `VITE_REMOTE_HOME_PAGE_URL` | Host (Rsbuild) | `https://home-page.vercel.app` |
| `PUBLIC_REMOTE_HOME_PAGE_URL` | Host (if Rsbuild uses `PUBLIC_`) | Same |

Rsbuild may use `PUBLIC_` prefix for client env. Check Rsbuild docs and align with the chosen prefix.

---

## Testing Before Deploy

```bash
# 1. Build both
pnpm run build:home_page
pnpm run build:host_app

# 2. Serve remote (e.g. port 4001)
cd apps/E-commerce-HomePage && pnpm preview

# 3. Set env and serve host
VITE_REMOTE_HOME_PAGE_URL=http://localhost:4001 pnpm --filter host_app preview

# 4. Open host URL, verify remote loads
```

---

## Summary

1. Make remote URL configurable via env.
2. Deploy remote first, then host.
3. Prefer Vercel or Netlify for monorepos.
4. Use Strategy A (two projects) for simplicity.
5. Validate with local production builds before deploying.
