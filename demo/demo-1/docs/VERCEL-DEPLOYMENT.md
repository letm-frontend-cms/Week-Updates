# Vercel Deployment Guide

## Overview

Deploy the Module Federation demo as **two Vercel projects** from the same repo:
1. **Remote** (home_page) – E-commerce HomePage
2. **Host** – Host app that loads the remote

---

## Step 1: Deploy Remote First

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your Git repository
3. Configure:
   - **Project Name:** `demo-1-home-page` (or your choice)
   - **Root Directory:** `apps/E-commerce-HomePage` (or `demo/demo-1/apps/E-commerce-HomePage` if repo root is Week-Updates)
   - **Framework Preset:** Other
   - **Build Command:** `npm run build` (from vercel.json)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. **Environment Variables** (Settings → Environment Variables) — **Required for host to load remote:**
   - Name: `VITE_PUBLIC_URL`
   - Value: `https://demo-1-home-page.vercel.app` (use your actual deployment URL after first deploy)
   - Environment: Production, Preview
5. Deploy
6. Copy the deployment URL (e.g. `https://demo-1-home-page.vercel.app`)
7. **If you added VITE_PUBLIC_URL after first deploy:** Redeploy so the manifest gets the correct `publicPath`

---

## Step 2: Deploy Host

1. **Add New Project** again (same repo)
2. Configure:
   - **Project Name:** `demo-1-host` (or your choice)
   - **Root Directory:** `apps/host_app` (or `demo/demo-1/apps/host_app` if repo root is Week-Updates)
   - **Framework Preset:** Other
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`
3. **Environment Variables** (Settings → Environment Variables):
   - Name: `PUBLIC_REMOTE_HOME_PAGE_URL`
   - Value: `https://demo-1-home-page.vercel.app` (your remote URL from Step 1)
   - Environment: Production, Preview
4. Deploy

---

## Step 3: Verify

1. **Check remote manifest:** Open `https://demo-1-home-page.vercel.app/mf-manifest.json`
   - `publicPath` must be `"https://demo-1-home-page.vercel.app/"` (not `"/"`)
   - `react` version must be `"18.3.1"` (not `"19.x"`)
2. Open the host URL (e.g. `https://demo-1-host.vercel.app`)
3. The HomePage remote should load in the content area
4. If the remote fails, the fallback UI should appear with a link to the standalone remote URL

---

## Local Production Test

```bash
# Build both
pnpm run build

# Serve remote (terminal 1)
cd apps/E-commerce-HomePage && pnpm preview

# Serve host with env (terminal 2)
PUBLIC_REMOTE_HOME_PAGE_URL=http://localhost:4001 pnpm --filter host_app preview
```

Open http://localhost:4000 and verify the remote loads.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Failed to fetch dynamically imported module: .../remoteEntry.js` (from host URL) | **Wrong publicPath.** The remote was built with `base: '/'`, so assets resolve against the host. The remote's vite.config uses `VERCEL_URL` (auto-set by Vercel) to set `base` to the full deployment URL. Redeploy the remote. |
| `Micro App Failed to Load` + React error #306 | **React version mismatch.** Host and remote must use the same React version. E-commerce-HomePage uses React 18.3.1 to match the host's shared React. |
| `E401 Unable to authenticate` | The `package-lock.json` must use only the public npm registry. Regenerate it with `registry=https://registry.npmjs.org/` in `.npmrc`. The E-commerce-HomePage has a clean lockfile and `.npmrc` for this. |
| `ERR_PNPM_META_FETCH_FAIL` / `ERR_INVALID_THIS` | E-commerce-HomePage uses `npm install` (see vercel.json) to avoid pnpm/Node compatibility issues. Root has `engines.node: ">=20"` and `.nvmrc` for Node 20. |
| Host shows fallback | Ensure `PUBLIC_REMOTE_HOME_PAGE_URL` is set and points to the deployed remote URL (no trailing slash) |
| CORS errors | Vercel serves static files with permissive CORS by default; if issues persist, add `vercel.json` headers |
| Build fails | Ensure Root Directory is correct. Remote uses npm; host uses pnpm from workspace root. |
| Wrong base path | If deploying to subpath, set `base` in vite/rsbuild config |
