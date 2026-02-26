import React, { lazy, Suspense, useState, useEffect } from 'react';

// RUNTIME IMPORTS: These come from separate apps at runtime
const CatalogPage = lazy(() => import('catalogMFE/CatalogPage'));
const CartPage = lazy(() => import('cartMFE/CartPage'));

interface AppState {
  cartCount: number;
  currentPage: 'catalog' | 'cart';
}

function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: 300, flexDirection: 'column', gap: '1rem'
    }}>
      <div style={{
        width: 40, height: 40, border: '3px solid #e5e7eb',
        borderTopColor: '#3b82f6', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Loading module...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const [state, setState] = useState<AppState>({
    cartCount: 0,
    currentPage: 'catalog',
  });

  useEffect(() => {
    const handler = () => setState(s => ({ ...s, cartCount: s.cartCount + 1 }));
    window.addEventListener('cart:add', handler);
    return () => window.removeEventListener('cart:add', handler);
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: '#f8fafc' }}>

      <nav style={{
        background: '#0f172a', padding: '0 2rem', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
      }}>
        <span style={{ color: '#60a5fa', fontWeight: 800, fontSize: '1.2rem' }}>
          ⚡ GRFF Store
        </span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {(['catalog', 'cart'] as const).map(page => (
            <button
              key={page}
              onClick={() => setState(s => ({ ...s, currentPage: page }))}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 8,
                border: 'none',
                background: state.currentPage === page ? '#3b82f6' : 'transparent',
                color: state.currentPage === page ? 'white' : '#94a3b8',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.875rem',
                transition: 'all 0.15s'
              }}
            >
              {page === 'catalog' ? '🛍️ Products' : `🛒 Cart (${state.cartCount})`}
            </button>
          ))}
        </div>
      </nav>

      <div style={{
        background: '#1e293b', color: '#94a3b8',
        padding: '0.5rem 2rem', fontSize: '0.75rem',
        display: 'flex', gap: '1.5rem', alignItems: 'center'
      }}>
        <span style={{ color: '#64748b' }}>Module Federation Architecture:</span>
        <span>🏠 Host → localhost:3000</span>
        <span>📦 Catalog MFE → localhost:3001</span>
        <span>🛒 Cart MFE → localhost:3002</span>
      </div>

      <main style={{ maxWidth: 1200, margin: '2rem auto', padding: '0 1.5rem' }}>
        <Suspense fallback={<LoadingSpinner />}>
          {state.currentPage === 'catalog' && <CatalogPage />}
          {state.currentPage === 'cart' && <CartPage />}
        </Suspense>
      </main>
    </div>
  );
}
