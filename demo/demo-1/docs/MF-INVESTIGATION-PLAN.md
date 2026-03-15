# Module Federation Demo - Investigation & Fix Plan

## Issues Identified

### Issue 1: Port Conflict
**Symptom:** `Failed to find an available port after 2 attempts, starting from 3000`

**Root Cause:** Host (3000) and Remote (3001) share adjacent ports. When remote starts first and binds to 3001, the host tries 3000. If 3000 is in use, Rsbuild tries 3001 next - but 3001 is taken by the remote. Host fails.

**Docs Reference:** [Rsbuild MF](https://module-federation.io/guide/build-plugins/plugins-rsbuild) uses host:2000, remote:2001. Ports must not overlap.

### Issue 2: hostAutoInit 404 (Windows Path)
**Symptom:** `Failed to load resource: .../Code/Practice/Week-Updates/.../__mf__virtual/home_page__H_A_I__hostAutoInit__H_A_I__.js`

**Root Cause:** 
- Virtual module URL includes Windows filesystem path (`/Code/...` from `C:\Code\...`)
- [MF Vite docs](https://module-federation.io/guide/build-plugins/plugins-vite) specify `base: "http://localhost:2000"` (full origin), not `base: '/'`
- [Issue #254](https://github.com/module-federation/vite/issues/254): `__mf__virtual` resolved from `process.cwd()` causes wrong paths in monorepos
- E-commerce-HomePage is remote-only (exposes only, no remotes) but plugin may inject hostAutoInit

### Issue 3: Startup Order
**Docs Reference:** [jsdev.space](https://jsdev.space/howto/vite-module-federation-404/)
- Remote must be ready before host loads
- Same mode for both (dev+dev or preview+preview)
- wait-on ensures remote is ready before host starts

## Fix Plan

### Fix 1: Non-Overlapping Ports (IMPLEMENTED)
| App | Port | Rationale |
|-----|------|-----------|
| Remote (home_page) | 4001 | Avoid 3000-3001, 5173+ ranges |
| Host (host_app) | 4000 | Separate range, no overlap with remote |

### Fix 2: Windows Path Fix (hostAutoInit 404) — IMPLEMENTED
**Root cause:** `@module-federation/vite` injects hostAutoInit script with path derived from `C:\Code\...`, producing `/Code/.../node_modules/__mf__virtual/...` instead of `/node_modules/__mf__virtual/...`. See [module-federation/vite#254](https://github.com/module-federation/vite/issues/254), [#68](https://github.com/module-federation/vite/issues/68).

**Solution:** Custom Vite plugin `mfWindowsPathFix()` in `E-commerce-HomePage/vite.config.js`:
1. **transformIndexHtml** (enforce: 'post'): Rewrites wrong script src in HTML to `/node_modules/__mf__virtual/...` before sending to browser
2. **configureServer**: Prepends middleware to rewrite wrong request URLs (e.g. cached) to correct path before other handlers

### Fix 3: Rsbuild Host Config
```ts
server: { port: 4000, strictPort: true }
```

### Fix 4: Dev Script
- wait-on: `http://localhost:4001`
- Order: remote first, then host (already correct)

### Fix 5: Remote-Only App Standalone
When E-commerce-HomePage runs standalone (not via host), ensure:
- Correct base URL for virtual module resolution
- No remotes config (already correct - remote-only)

## Implementation Order
1. Update ports to 4000/4001
2. Fix Vite base to full origin URL
3. Update all config references
4. Test dev flow
