import React, { useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  quantity: number;
}

const CART_KEY = 'grff:cart';

const readCart = (): CartItem[] => {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
};

const saveCart = (items: CartItem[]) =>
  localStorage.setItem(CART_KEY, JSON.stringify(items));

export default function CartPage() {
  // Lazy initializer: read whatever Catalog already saved before we mounted
  const [items, setItems] = useState<CartItem[]>(readCart);
  const [justAdded, setJustAdded] = useState<number | null>(null);

  useEffect(() => {
    // Keep in sync when Catalog fires events while we are mounted
    const handleAdd = (e: Event) => {
      setItems(readCart());
      setJustAdded((e as CustomEvent).detail?.id ?? null);
      setTimeout(() => setJustAdded(null), 800);
    };

    window.addEventListener('cart:add', handleAdd);
    return () => window.removeEventListener('cart:add', handleAdd);
  }, []);

  const updateQty = (id: number, delta: number) => {
    setItems(prev => {
      const updated = prev
        .map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i)
        .filter(i => i.quantity > 0);
      saveCart(updated);
      return updated;
    });
  };

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div style={{ maxWidth: 620, margin: '0 auto' }}>

      <div style={{
        background: 'linear-gradient(135deg, #fdf4ff, #ede9fe)',
        border: '2px solid #c4b5fd', borderRadius: 10,
        padding: '0.875rem 1.25rem', marginBottom: '1.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div>
          <span style={{ fontWeight: 800, color: '#5b21b6', fontSize: '0.95rem' }}>
            🛒 CART MFE
          </span>
          <span style={{ color: '#7c3aed', fontSize: '0.8rem', marginLeft: '0.75rem' }}>
            Served from localhost:3002
          </span>
        </div>
        <code style={{
          background: '#ede9fe', padding: '0.25rem 0.75rem',
          borderRadius: 6, fontSize: '0.75rem', color: '#5b21b6'
        }}>
          remoteEntry.js → exposes ./CartPage
        </code>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: '#0f172a' }}>
          Shopping Cart
        </h2>
        {count > 0 && (
          <span style={{
            background: '#f1f5f9', color: '#64748b',
            padding: '0.25rem 0.75rem', borderRadius: 20, fontSize: '0.8rem'
          }}>
            {count} item{count !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {items.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '4rem 2rem',
          background: 'white', borderRadius: 16,
          border: '2px dashed #e2e8f0', color: '#94a3b8'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🛒</div>
          <p style={{ fontWeight: 600, fontSize: '1rem', color: '#64748b' }}>
            Your cart is empty
          </p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Head to Products and add some courses!
          </p>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {items.map(item => (
              <div key={item.id} style={{
                background: item.id === justAdded ? '#eff6ff' : 'white',
                border: `2px solid ${item.id === justAdded ? '#93c5fd' : '#f1f5f9'}`,
                borderRadius: 12, padding: '1rem 1.25rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'all 0.3s',
              }}>
                <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>${item.price} each</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => updateQty(item.id, -1)} style={qtyBtn}>−</button>
                  <span style={{ fontWeight: 700, minWidth: 20, textAlign: 'center', color: '#0f172a' }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => updateQty(item.id, 1)} style={qtyBtn}>+</button>
                </div>
                <span style={{ fontWeight: 800, color: '#3b82f6', fontSize: '1.1rem', minWidth: 56, textAlign: 'right' }}>
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '1.5rem', background: '#0f172a', borderRadius: 14,
            padding: '1.25rem 1.5rem', color: 'white'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: '#94a3b8' }}>Subtotal</span>
              <span style={{ fontWeight: 700 }}>${total}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ color: '#94a3b8' }}>Total</span>
              <span style={{ fontWeight: 900, fontSize: '1.5rem', color: '#60a5fa' }}>${total}</span>
            </div>
            <button style={{
              width: '100%', padding: '0.875rem',
              background: '#3b82f6', color: 'white',
              border: 'none', borderRadius: 10,
              fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
            }}>
              Checkout →
            </button>
          </div>
        </>
      )}

      <div style={{
        marginTop: '1.5rem', background: '#fffbeb', border: '1px solid #fde68a',
        borderRadius: 10, padding: '1rem', fontSize: '0.8rem', color: '#92400e'
      }}>
        <strong>💡 Module Federation:</strong> This Cart MFE knows nothing about the Catalog MFE.
        No imports, no direct dependency. Communication is via CustomEvent.
        Either MFE can be deployed independently without touching the other.
      </div>
    </div>
  );
}

const qtyBtn: React.CSSProperties = {
  width: 30, height: 30, borderRadius: 8,
  border: '1.5px solid #e2e8f0', background: '#f8fafc',
  cursor: 'pointer', fontWeight: 800, fontSize: '1rem',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#475569',
};
