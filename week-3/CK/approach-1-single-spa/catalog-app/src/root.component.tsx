import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Next.js Course', price: 49, image: '📘', category: 'Frontend' },
  { id: 2, name: 'React Mastery', price: 39, image: '⚛️', category: 'Frontend' },
  { id: 3, name: 'Node.js Pro', price: 59, image: '🟢', category: 'Backend' },
  { id: 4, name: 'TypeScript Deep Dive', price: 45, image: '🔷', category: 'Language' },
  { id: 5, name: 'AWS Fundamentals', price: 69, image: '☁️', category: 'Cloud' },
  { id: 6, name: 'Docker & K8s', price: 79, image: '🐳', category: 'DevOps' },
];

export default function CatalogApp() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Language', 'Cloud', 'DevOps'];
  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  const addToCart = (product: Product) => {
    // Persist to localStorage so CartApp can read it after mounting
    const stored: Array<Product & { quantity: number }> =
      JSON.parse(localStorage.getItem('grff:cart') || '[]');
    const existing = stored.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      stored.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('grff:cart', JSON.stringify(stored));

    // Also fire event so CartApp (if already mounted) stays in sync
    window.dispatchEvent(new CustomEvent('cart:add', { detail: product }));
  };

  return (
    <div style={{ padding: '0 1rem' }}>

      {/* MFE identity badge */}
      <div style={{
        background: '#ecfdf5', border: '2px solid #6ee7b7',
        borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1.5rem',
        display: 'flex', alignItems: 'center', gap: '0.5rem'
      }}>
        <span style={{ fontWeight: 700, color: '#065f46' }}>📦 CATALOG MFE</span>
        <span style={{ fontSize: '0.8rem', color: '#047857' }}>
          — running on port 8080, independent deployment
        </span>
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{
            padding: '0.4rem 1rem',
            borderRadius: 20,
            border: '2px solid',
            borderColor: filter === cat ? '#3b82f6' : '#e5e7eb',
            background: filter === cat ? '#3b82f6' : 'white',
            color: filter === cat ? 'white' : '#374151',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: '0.875rem'
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1.25rem'
      }}>
        {filtered.map(product => (
          <div key={product.id} style={{
            background: 'white',
            borderRadius: 12,
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #f3f4f6',
            transition: 'transform 0.2s',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{product.image}</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>
              {product.category}
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111827' }}>
              {product.name}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#3b82f6' }}>
                ${product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                style={{
                  background: '#3b82f6', color: 'white',
                  border: 'none', borderRadius: 8,
                  padding: '0.5rem 1rem', cursor: 'pointer',
                  fontWeight: 600, fontSize: '0.875rem'
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '2rem', background: '#fffbeb', border: '1px solid #fcd34d',
        borderRadius: 8, padding: '1rem', fontSize: '0.875rem', color: '#92400e'
      }}>
        <strong>💡 Single-SPA Note:</strong> This component communicates with the
        shell using CustomEvents. When you click &quot;Add to Cart&quot;, it fires
        <code style={{ background: '#fef3c7', padding: '0 4px', borderRadius: 4 }}>
          window.dispatchEvent(new CustomEvent(&apos;cart:add&apos;, ...))
        </code>
      </div>
    </div>
  );
}
