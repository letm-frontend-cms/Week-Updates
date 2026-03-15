# Monorepo vs Polyrepo: The Same Task

## Task: Update Button color from blue-500 to blue-400

### Polyrepo Experience (Days 1-2)

**Steps:**
1. Update component library code
2. Commit and tag v1.0.1
3. Go to marketing site
4. Reinstall dependency
5. Test in browser
6. Commit marketing site
7. Go to dashboard
8. Reinstall dependency
9. Test in browser
10. Commit dashboard

**Time:** _____ minutes  
**Commands run:** ~10+  
**Files edited:** 6+  
**Opportunities for mistakes:** High  
**Frustration:** 😤😤😤

---

### Monorepo Experience (Day 3)

**Steps:**
1. Update component library code
2. Save file
3. Watch both apps update automatically

**Time:** 30 seconds  
**Commands run:** 0  
**Files edited:** 2  
**Opportunities for mistakes:** Near zero  
**Frustration:** 😊 (Actually pleasant!)

---

## The Difference

| Aspect | Polyrepo | Monorepo |
|--------|----------|----------|
| Time to update | _____ min | < 1 min |
| Manual steps | 10+ | 2 |
| Risk of version mismatch | High | Zero |
| Need to reinstall | Yes | No |
| See changes immediately | No | Yes |
| TypeScript errors | After reinstall | Immediately |

## Key Insight

**Polyrepo:** Changes are isolated → Require manual coordination  
**Monorepo:** Changes propagate instantly → Automatic coordination

The monorepo doesn't just save time — it eliminates entire classes of problems.
