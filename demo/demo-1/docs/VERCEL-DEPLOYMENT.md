# Vercel Deployment Guide

## Overview

Deploy the Module Federation demo as **three Vercel projects** from the same repo:
1. **Remote** (home_page) – E-commerce HomePage
2. **Remote** (about_us) – About Us app
3. **Host** – Host app that loads both remotes

---

## Step 1: Deploy Remotes First

### 1a. Deploy Home Page Remote

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

### 1b. Deploy About Us Remote

1. **Add New Project** again (same repo)
2. Configure:
   - **Project Name:** `demo-1-about-us` (or your choice)
   - **Root Directory:** `apps/about_us` (or `demo/demo-1/apps/about_us` if repo root is Week-Updates)
   - **Framework Preset:** Other
   - **Build Command:** `npm run build` (from vercel.json)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. **Environment Variables** — Vercel sets `VERCEL_URL` automatically during build. For correct `publicPath` in the manifest, either:
   - Rely on `VERCEL_URL` (set by Vercel), or
   - Name: `VITE_PUBLIC_URL`, Value: `https://demo-1-about-us.vercel.app` (your deployment URL)
4. Deploy
5. Copy the deployment URL (e.g. `https://demo-1-about-us.vercel.app`)
6. **Verify:** Open `https://demo-1-about-us.vercel.app/mf-manifest.json` — `publicPath` should be the full URL (not `"/"`)

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
   - Value: `https://demo-1-home-page.vercel.app` (your home page remote URL)
   - Name: `PUBLIC_REMOTE_ABOUT_US_URL`
   - Value: `https://demo-1-about-us.vercel.app` (your about_us remote URL)
   - Environment: Production, Preview
4. Deploy

---

## Step 3: Verify

1. **Check remote manifests:**
   - `https://demo-1-home-page.vercel.app/mf-manifest.json` — `publicPath` must be the full URL
   - `https://demo-1-about-us.vercel.app/mf-manifest.json` — `publicPath` must be the full URL
   - `react` version must be `"18.3.1"` (not `"19.x"`)
2. Open the host URL (e.g. `https://demo-1-host.vercel.app`)
3. HomePage should load at `/`, About Us at `/deals`
4. Visit `https://demo-1-about-us.vercel.app` directly — the standalone About Us app should render
5. If remotes fail, the fallback UI should appear with a link to the standalone remote URL

---

## Local Production Test

```bash
# Build all
pnpm run build

# Serve home_page remote (terminal 1)
pnpm run preview:home_page

# Serve about_us remote (terminal 2)
pnpm run preview:about_us

# Serve host with env (terminal 3)
PUBLIC_REMOTE_HOME_PAGE_URL=http://localhost:4001 PUBLIC_REMOTE_ABOUT_US_URL=http://localhost:4002 pnpm run preview:host_app
```

Open http://localhost:4000 — HomePage at `/`, About Us at `/deals`. Visit http://localhost:4002 for standalone About Us.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `ReferenceError: AboutUs is not defined` (about_us app) | **1)** Ensure about_us is deployed as a separate Vercel project with Root Directory `apps/about_us`. **2)** Set `VITE_PUBLIC_URL` or rely on `VERCEL_URL` so the manifest has correct `publicPath`. **3)** If using the host app, set `PUBLIC_REMOTE_ABOUT_US_URL` to the about_us deployment URL. **4)** Redeploy about_us first, then the host. |
| `Failed to fetch dynamically imported module: .../remoteEntry.js` (from host URL) | **Wrong publicPath.** The remote was built with `base: '/'`, so assets resolve against the host. The remote's vite.config uses `VERCEL_URL` (auto-set by Vercel) to set `base` to the full deployment URL. Redeploy the remote. |
| `Micro App Failed to Load` + React error #306 | **React version mismatch.** Host and remote must use the same React version. E-commerce-HomePage uses React 18.3.1 to match the host's shared React. |
| `E401 Unable to authenticate` | The `package-lock.json` must use only the public npm registry. Regenerate it with `registry=https://registry.npmjs.org/` in `.npmrc`. The E-commerce-HomePage has a clean lockfile and `.npmrc` for this. |
| `ERR_PNPM_META_FETCH_FAIL` / `ERR_INVALID_THIS` | E-commerce-HomePage uses `npm install` (see vercel.json) to avoid pnpm/Node compatibility issues. Root has `engines.node: ">=20"` and `.nvmrc` for Node 20. |
| Host shows fallback | Ensure `PUBLIC_REMOTE_HOME_PAGE_URL` is set and points to the deployed remote URL (no trailing slash) |
| CORS errors | Vercel serves static files with permissive CORS by default; if issues persist, add `vercel.json` headers |
| Build fails | Ensure Root Directory is correct. Remote uses npm; host uses pnpm from workspace root. |
| Wrong base path | If deploying to subpath, set `base` in vite/rsbuild config |
