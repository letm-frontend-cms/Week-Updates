# Week 3: Micro-Frontend Exploration

Two MFE demos: **Single-SPA** and **Module Federation**, each with a mini e-commerce shell (Catalog + Cart).

## Project structure

```
week3-mfe-demos/
├── approach-1-single-spa/
│   ├── root-config/     # Host shell (port 9000)
│   ├── catalog-app/     # Catalog MFE (port 8080)
│   └── cart-app/        # Cart MFE (port 8081)
├── approach-2-module-federation/
│   ├── host/            # Shell (port 3000)
│   ├── catalog-mfe/      # Catalog (port 3001)
│   └── cart-mfe/        # Cart (port 3002)
└── docs/
    └── week3-mfe-evaluation.md
```

---

## Approach 1: Single-SPA

**Run (3 terminals):**

```bash
# Terminal 1 — Root config (shell)
cd approach-1-single-spa/root-config && npm install && npm start

# Terminal 2 — Catalog MFE
cd approach-1-single-spa/catalog-app && npm install && npm start

# Terminal 3 — Cart MFE
cd approach-1-single-spa/cart-app && npm install && npm start
```

**Open:** http://localhost:9000

- **Products** → Catalog MFE (port 8080)
- **Cart** → Cart MFE (port 8081)
- Add to cart from Catalog; count updates in shell; Cart shows items via `cart:add` CustomEvents.

---

## Approach 2: Module Federation

**Run (3 terminals; start remotes first):**

```bash
# Terminal 1 — Catalog MFE (so remoteEntry.js is available)
cd approach-2-module-federation/catalog-mfe && npm install && npm start

# Terminal 2 — Cart MFE
cd approach-2-module-federation/cart-mfe && npm install && npm start

# Terminal 3 — Host
cd approach-2-module-federation/host && npm install && npm start
```

**Open:** http://localhost:3000

- Use **Products** / **Cart** in the nav to switch views (lazy-loaded from Catalog and Cart MFEs).
- Standalone: http://localhost:3001 (Catalog), http://localhost:3002 (Cart).

---

## Completion checklist

**Single-SPA**
- [ ] Root config on port 9000
- [ ] Catalog on 8080, Cart on 8081
- [ ] Add to cart works; cart count in shell updates

**Module Federation**
- [ ] Host on 3000, Catalog on 3001, Cart on 3002
- [ ] remoteEntry.js loads; shared React; MFEs work standalone

**Understanding**
- [ ] Independent deployment test
- [ ] Failure isolation test
- [ ] Comparison in `docs/week3-mfe-evaluation.md`
