# Week 2: Build-Time vs Runtime Integration

## Goal

Understand **when code is integrated** and how this determines coupling and deployability.

---

## Two Integration Patterns

### 📦 Build-Time Integration (Tight Coupling)

**When:** Components are bundled during `npm build`
**How:** `import { Button } from '@grff/ui-library'` → webpack bundles everything together
**Result:** One monolithic bundle

**Characteristics:**
- ❌ Change library → must rebuild entire app
- ❌ Cannot deploy library independently
- ❌ Teams must coordinate releases
- ❌ One team's changes block others

**Try it:** `/integration-demo/build-time`

---

### 🔄 Runtime Integration (Loose Coupling)

**When:** Components loaded when page loads in browser
**How:** `<script src="/grff-ui-library.js">` → library built separately, loaded at runtime
**Result:** Independent builds

**Characteristics:**
- ✅ Change library → rebuild library only (`npm run build:ui`)
- ✅ Deploy library without touching main app
- ✅ Teams work independently
- ✅ Each team controls own release schedule

**Try it:** `/integration-demo/runtime`

---

## Exercise: Feel the Difference

### Part 1: Build-Time (Tight Coupling)

1. Visit **http://localhost:3000/integration-demo/build-time**
2. Edit `packages/ui-library/src/Button.tsx`:
   ```tsx
   primary: 'bg-purple-600 text-white hover:bg-purple-700'  // change from blue
   ```
3. Refresh the page → ❌ No change (still using old bundle)
4. Run `npm run build` → restart server
5. Refresh → ✓ See changes

**Time:** ~30-60 seconds (full rebuild)
**Impact:** Entire app rebuilt for one component change

---

### Part 2: Runtime (Loose Coupling)

1. Visit **http://localhost:3000/integration-demo/runtime**
2. Edit same file: `packages/ui-library/src/Button.tsx`
3. Run **only**: `npm run build:ui` (3-5 seconds)
4. Refresh the page → ✅ Immediate changes!

**Time:** ~3-5 seconds (library only)
**Impact:** Only library rebuilt, app unchanged

---

## Why Micro-Frontends Require Runtime Integration

**Scenario:** E-commerce platform, 3 teams

- **Team A** owns Product Catalog
- **Team B** owns Shopping Cart
- **Team C** owns Checkout Flow

### ❌ Build-Time Scenario

Monday 10 AM:
- Team A: "We need to fix a critical bug in product images"
- Team A changes code → rebuilds → **waits for Teams B & C to approve**
- Team B: "We're mid-feature, can't deploy yet"
- Team A: **Blocked. Bug remains in production.**

Wednesday 2 PM:
- Team C: "We need to update checkout validation"
- Team C changes code → rebuilds → **needs coordination with A & B**
- Team A: "We're testing catalog changes, wait"
- Team C: **Blocked. Feature delayed.**

**Result:** Tight coupling → constant coordination → slow releases → NOT independent

### ✅ Runtime Scenario

Monday 10 AM:
- Team A: "Critical bug in product images"
- Team A changes catalog code → `build:catalog` → **deploys immediately**
- Teams B & C: **Unaffected, continue working**
- Bug fixed in 10 minutes

Wednesday 2 PM:
- Team C: "Update checkout validation"
- Team C changes checkout code → `build:checkout` → **deploys immediately**
- Teams A & B: **Unaffected, continue working**
- Feature shipped same day

**Result:** Loose coupling → independent work → fast releases → TRUE micro-frontends

---

## Key Measurements

| Metric                    | Build-Time | Runtime    |
| ------------------------- | ---------- | ---------- |
| **Change propagation**    | Full app   | Module only |
| **Build time**            | 30-60s     | 3-5s       |
| **Independent deploy?**   | ❌ No      | ✅ Yes     |
| **Team autonomy?**        | ❌ Low     | ✅ High    |
| **Micro-frontend ready?** | ❌ No      | ✅ Yes     |

---

## The Decision Framework

### Use Build-Time When:

- ✓ Small app (<10 pages)
- ✓ Single team
- ✓ Everyone deploys together
- ✓ Simplicity > flexibility

### Use Runtime When:

- ✓ Medium-large app (10+ pages)
- ✓ Multiple teams
- ✓ Need independent deployment
- ✓ Micro-frontend architecture
- ✓ Flexibility > simplicity

---

## Key Insight

**Build-time integration = tight coupling = no independent deployment = NOT micro-frontends**

Runtime integration is the *only* way to achieve the independent deployability that defines micro-frontends.

---

## Next Steps

- **Week 3:** Module Federation (remotes from different servers, automatic dependency sharing)
- **Advanced:** Version management, error boundaries, shared state
