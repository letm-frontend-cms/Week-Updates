# Error Handling & Integration Validation Plan

**Scope:** Chintan's responsibilities (readme.md lines 22–24)

1. Implement error handling for remote loading failures  
2. Add fallback UI if a micro app fails to load  
3. Validate integration between Host and Micro Apps  

---

## 1. Error Handling for Remote Loading Failures

### Three-Layer Approach (per [Module Federation docs](https://module-federation.io/blog/error-load-remote))

| Layer | Purpose | Implementation |
|-------|---------|-----------------|
| **Network** | Retry failed fetches | `@module-federation/retry-plugin` (optional) |
| **Loading** | Handle load errors, return fallback | `errorLoadRemote` runtime plugin |
| **Rendering** | Catch component render errors | React `ErrorBoundary` |

### 1.1 Network Layer (Optional)

- **When:** Weak network, remote not yet started
- **How:** Add `@module-federation/retry-plugin` via `runtimePlugins`
- **Config:** 3 retries, 1s delay

### 1.2 Loading Layer (Required)

- **When:** Remote manifest or chunk fails to load
- **How:** Add `errorLoadRemote` runtime plugin
- **File:** `host_app/src/runtime-plugin/fallback.ts`
- **Behavior:** Return fallback component when `args.lifecycle === 'onLoad'`

### 1.3 Rendering Layer (Required)

- **When:** Remote component throws during render
- **How:** Wrap remote in React `ErrorBoundary`
- **Behavior:** Show fallback UI, optionally with retry

---

## 2. Fallback UI When Micro App Fails to Load

### Fallback Component Design

```
┌─────────────────────────────────────────────────┐
│  ⚠️  Micro App Failed to Load                    │
│                                                  │
│  The Home Page could not be loaded.              │
│  This may happen if the remote app is not        │
│  running or there is a network issue.            │
│                                                  │
│  [Retry]  [Open Standalone (localhost:4001)]     │
└─────────────────────────────────────────────────┘
```

### Implementation Options

| Option | Pros | Cons |
|--------|------|------|
| **A. Static import + ErrorBoundary** | Minimal change | No loading-state UI; `errorLoadRemote` still needed for load failures |
| **B. Dynamic import + loadRemote + Suspense** | Loading + error states | Requires refactor to lazy load |
| **C. createRemoteAppComponent** | Built-in loading/fallback | Extra dependency `@module-federation/bridge-react` |

**Recommended:** Option B – switch to dynamic `loadRemote` + `React.lazy` + `Suspense` + `ErrorBoundary`. This gives:

- Loading state while remote loads  
- Fallback when load fails (via ErrorBoundary or `errorLoadRemote`)  
- Fallback when render fails (via ErrorBoundary)  

---

## 3. Validate Integration Between Host and Micro Apps

### 3.1 Manual Validation Checklist

| # | Check | How to Verify |
|---|-------|---------------|
| 1 | Host loads without remote | Start host only; fallback shown |
| 2 | Host loads with remote | Start both; HomePage renders |
| 3 | Remote standalone works | Open http://localhost:4001 |
| 4 | Shared deps (React) singleton | No duplicate React instances |
| 5 | Header/Footer in host | Visible, correct styling |
| 6 | Fallback on remote down | Stop remote; retry/fallback works |

### 3.2 Automated Validation

**Option A: E2E with Playwright**

- `apps/host_app/e2e/` or `demo-1/e2e/`
- Tests: host loads, remote loads, fallback when remote is down

**Option B: Health Check Script**

- `scripts/validate-mf-integration.js`
- Fetches `http://localhost:4001/mf-manifest.json`
- Verifies manifest structure and exposed modules

**Option C: CI Step**

- Run host build
- Run remote build
- Optional: smoke test with `pnpm preview` + curl/Playwright

---

## Implementation Order

| Step | Task | Effort |
|------|------|--------|
| 1 | Create `RemoteFallback` component | Small |
| 2 | Add `errorLoadRemote` runtime plugin | Small |
| 3 | Register plugin in `module-federation.config.ts` | Small |
| 4 | Switch HomePage to dynamic load + Suspense + ErrorBoundary | Medium |
| 5 | Add `@module-federation/retry-plugin` (optional) | Small |
| 6 | Add manual validation checklist to README | Small |
| 7 | Add health-check or E2E script | Medium |

---

## File Changes Summary

| File | Change |
|------|--------|
| `host_app/src/components/RemoteFallback.tsx` | New – fallback UI with retry |
| `host_app/src/runtime-plugin/fallback.ts` | New – `errorLoadRemote` plugin |
| `host_app/module-federation.config.ts` | Add `runtimePlugins` |
| `host_app/src/App.tsx` | Dynamic load, Suspense, ErrorBoundary |
| `host_app/package.json` | Add `@module-federation/retry-plugin` (optional) |
| `demo-1/scripts/validate-mf.js` | New – health check (optional) |
| `readme.md` | Add validation checklist |

---

## References

- [Error handling for remote module rendering](https://module-federation.io/blog/error-load-remote)
- [Loading Applications (createRemoteAppComponent)](https://module-federation.io/practice/bridge/react-bridge/load-app)
- [@module-federation/retry-plugin](https://module-federation.io/plugin/plugins/retry-plugin)
