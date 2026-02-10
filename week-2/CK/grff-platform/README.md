# GRFF Platform - Micro-Frontend Learning Project

Week 2: Build-Time vs Runtime Integration

## Quick Start

```bash
# Install dependencies
npm install

# Build the UI library (for runtime demo)
npm run build:ui

# Start development
npm run dev
```

Visit **http://localhost:3000/integration-demo**

---

## What You'll Learn

**Core Question:** When is code integrated? Build time or runtime?

### 📦 Build-Time Integration (Tight Coupling)
- Components bundled during `npm build`
- ❌ Change library → must rebuild entire app
- ❌ Cannot deploy independently
- ❌ Teams must coordinate releases
- **Visit:** `/integration-demo/build-time`

### 🔄 Runtime Integration (Loose Coupling)
- Components loaded from separate build at runtime
- ✅ Change library → rebuild library only (`npm run build:ui`)
- ✅ Deploy independently
- ✅ Teams work autonomously
- **Visit:** `/integration-demo/runtime`

---

## Try It Yourself

### Build-Time Demo (Tight Coupling)
1. Visit `/integration-demo/build-time`
2. Edit `packages/ui-library/src/Button.tsx` (change primary color)
3. Refresh page → ❌ no change (old bundle)
4. Run `npm run build` → restart server
5. Refresh → ✓ see changes (but required full rebuild!)

### Runtime Demo (Loose Coupling)
1. Visit `/integration-demo/runtime`
2. Edit `packages/ui-library/src/Button.tsx` (change primary color)
3. Run **only** `npm run build:ui` (no main app rebuild!)
4. Refresh page → ✅ see changes immediately

**This demonstrates why micro-frontends require runtime integration!**

---

## Project Structure

```
grff-platform/
├── app/
│   ├── integration-demo/          # Demo hub
│   │   ├── page.tsx               # Comparison & explanation
│   │   ├── build-time/            # Build-time demo (tight)
│   │   │   └── page.tsx
│   │   └── runtime/               # Runtime demo (loose)
│   │       └── page.tsx
│   └── ...
├── packages/
│   └── ui-library/                # Shared UI components
│       ├── src/
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── Alert.tsx
│       │   ├── index.ts           # Build-time entry
│       │   └── browser.ts         # Runtime entry
│       └── package.json
├── public/
│   └── grff-ui-library.js         # Runtime bundle (built separately)
├── scripts/
│   ├── integration-demo.js        # CLI demo
│   └── build-ui-library.js        # Build UI for runtime
└── docs/
    ├── week1-decisions.md
    └── week2-integration.md
```

---

## NPM Scripts

```bash
npm run dev          # Development server (hot reload)
npm run build        # Build main app
npm run build:ui     # Build UI library only (for runtime demo)
npm start            # Production server
npm run demo         # CLI demo (build-time vs runtime)
```

---

## Why Micro-Frontends Need Runtime Integration

**Scenario:** 3 teams building an e-commerce app
- **Team A:** Product catalog
- **Team B:** Shopping cart
- **Team C:** Checkout

### ❌ With Build-Time (Tight Coupling)
- Team A fixes bug → **ALL teams must rebuild**
- Team B adds feature → **wait for A & C**
- Deploy → **coordinate all 3 teams**
- **Result:** NOT independent!

### ✅ With Runtime (Loose Coupling)
- Team A fixes bug → **deploy catalog only**
- Team B adds feature → **deploy cart only**
- Deploy → **each team independently**
- **Result:** True independence!

---

## Key Insight

**Build-time integration = tight coupling = no independent deployment = NOT micro-frontends**

Runtime integration is the *only* way to achieve the independent deployability that makes micro-frontends useful.

---

## Next Steps

- Week 3: Module Federation (true micro-frontend architecture)
- Advanced: Version management, error handling, shared dependencies
