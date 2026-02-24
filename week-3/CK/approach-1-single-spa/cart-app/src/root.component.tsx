import React, { useEffect, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CART_KEY = 'grff:cart';

const readCart = (): CartItem[] => {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
};

const saveCart = (items: CartItem[]) =>
  localStorage.setItem(CART_KEY, JSON.stringify(items));

export default function CartApp() {
  // Lazy initializer: read whatever Catalog already saved before we mounted
  const [items, setItems] = useState<CartItem[]>(readCart);

  useEffect(() => {
    // Keep in sync when Catalog fires events while we are mounted
    const handleAdd = () => {
      setItems(readCart());
    };

    window.addEventListener('cart:add', handleAdd);
    return () => window.removeEventListener('cart:add', handleAdd);
  }, []);

  const updateCount = (id: number, delta: number) => {
    setItems(prev => {
      const updated = prev
        .map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i)
        .filter(i => i.quantity > 0);
      saveCart(updated);
      return updated;
    });
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 1rem' }}>

      {/* MFE identity badge */}
      <div style={{
        background: '#fdf4ff', border: '2px solid #d8b4fe',
        borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1.5rem',
        display: 'flex', alignItems: 'center', gap: '0.5rem'
      }}>
        <span style={{ fontWeight: 700, color: '#6b21a8' }}>🛒 CART MFE</span>
        <span style={{ fontSize: '0.8rem', color: '#7c3aed' }}>
          — running on port 8081, independent deployment
        </span>
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#111827' }}>
        Your Cart ({items.length} items)
      </h2>

      {items.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '3rem',
          background: 'white', borderRadius: 12,
          color: '#9ca3af', border: '2px dashed #e5e7eb'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🛒</div>
          <p>Your cart is empty</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Go to Products and add some courses!
          </p>
        </div>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{
              background: 'white', borderRadius: 12,
              padding: '1rem 1.25rem', marginBottom: '0.75rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}>
              <span style={{ fontSize: '2rem' }}>{item.image}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: '#111827' }}>{item.name}</div>
                <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>${item.price} each</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button onClick={() => updateCount(item.id, -1)} style={btnStyle}>−</button>
                <span style={{ fontWeight: 700, minWidth: 24, textAlign: 'center' }}>
                  {item.quantity}
                </span>
                <button onClick={() => updateCount(item.id, 1)} style={btnStyle}>+</button>
              </div>
              <div style={{ fontWeight: 700, color: '#3b82f6', minWidth: 60, textAlign: 'right' }}>
                ${item.price * item.quantity}
              </div>
            </div>
          ))}

          <div style={{
            background: '#1e293b', color: 'white',
            borderRadius: 12, padding: '1.25rem 1.5rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginTop: '1rem'
          }}>
            <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>Total</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#60a5fa' }}>
              ${total}
            </span>
          </div>

          <button style={{
            width: '100%', marginTop: '1rem',
            padding: '0.875rem', background: '#3b82f6',
            color: 'white', border: 'none', borderRadius: 12,
            fontSize: '1rem', fontWeight: 700, cursor: 'pointer'
          }}>
            Checkout
          </button>
        </>
      )}

      <div style={{
        marginTop: '2rem', background: '#fffbeb', border: '1px solid #fcd34d',
        borderRadius: 8, padding: '1rem', fontSize: '0.875rem', color: '#92400e'
      }}>
        <strong>💡 Single-SPA Note:</strong> This MFE listens to
        <code style={{ background: '#fef3c7', padding: '0 4px', borderRadius: 4 }}>
          window.addEventListener(&apos;cart:add&apos;, ...)
        </code>
        — it has NO direct import from the Catalog MFE. That&apos;s loose coupling!
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  width: 28, height: 28, borderRadius: 6,
  border: '1px solid #e5e7eb', background: '#f9fafb',
  cursor: 'pointer', fontWeight: 700, fontSize: '1rem',
  display: 'flex', alignItems: 'center', justifyContent: 'center'
};
