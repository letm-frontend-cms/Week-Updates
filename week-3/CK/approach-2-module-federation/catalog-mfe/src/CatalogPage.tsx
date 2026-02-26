import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  emoji: string;
  category: string;
  description: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Next.js Complete', price: 49, emoji: '📘', category: 'Frontend', description: 'Master App Router, SSR, and more' },
  { id: 2, name: 'React Mastery', price: 39, emoji: '⚛️', category: 'Frontend', description: 'Hooks, Context, and advanced patterns' },
  { id: 3, name: 'Node.js Pro', price: 59, emoji: '🟢', category: 'Backend', description: 'APIs, authentication, and databases' },
  { id: 4, name: 'TypeScript Deep', price: 45, emoji: '🔷', category: 'Language', description: 'Types, generics, and decorators' },
  { id: 5, name: 'AWS Fundamentals', price: 69, emoji: '☁️', category: 'Cloud', description: 'EC2, S3, Lambda, and more' },
  { id: 6, name: 'Docker & K8s', price: 79, emoji: '🐳', category: 'DevOps', description: 'Containers and orchestration' },
];

export default function CatalogPage() {
  const [filter, setFilter] = useState('All');
  const [added, setAdded] = useState<Set<number>>(new Set());

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  const addToCart = (product: Product) => {
    const item = { id: product.id, name: product.name, price: product.price, emoji: product.emoji };

    // Persist to localStorage so CartPage can read it after mounting
    const stored: Array<typeof item & { quantity: number }> =
      JSON.parse(localStorage.getItem('grff:cart') || '[]');
    const existing = stored.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      stored.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('grff:cart', JSON.stringify(stored));

    // Also fire event so CartPage (if already mounted) stays in sync
    window.dispatchEvent(new CustomEvent('cart:add', {
      detail: item,
      bubbles: true,
    }));

    setAdded(prev => new Set([...prev, product.id]));
    setTimeout(() => setAdded(prev => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    }), 1500);
  };

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
        border: '2px solid #6ee7b7', borderRadius: 10,
        padding: '0.875rem 1.25rem', marginBottom: '1.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div>
          <span style={{ fontWeight: 800, color: '#065f46', fontSize: '0.95rem' }}>
            📦 CATALOG MFE
          </span>
          <span style={{ color: '#047857', fontSize: '0.8rem', marginLeft: '0.75rem' }}>
            Served from localhost:3001
          </span>
        </div>
        <code style={{
          background: '#d1fae5', padding: '0.25rem 0.75rem',
          borderRadius: 6, fontSize: '0.75rem', color: '#065f46'
        }}>
          remoteEntry.js → exposes ./CatalogPage
        </code>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{
            padding: '0.4rem 1.1rem', borderRadius: 20, cursor: 'pointer',
            border: '2px solid', fontWeight: 600, fontSize: '0.8rem',
            borderColor: filter === cat ? '#3b82f6' : '#e2e8f0',
            background: filter === cat ? '#3b82f6' : 'white',
            color: filter === cat ? 'white' : '#64748b',
            transition: 'all 0.15s',
          }}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1.25rem',
      }}>
        {filtered.map(product => {
          const isAdded = added.has(product.id);
          return (
            <div key={product.id} style={{
              background: 'white', borderRadius: 14,
              padding: '1.5rem', border: '1px solid #f1f5f9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{product.emoji}</div>
              <div style={{
                display: 'inline-block', background: '#f0f9ff', color: '#0369a1',
                fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem',
                borderRadius: 20, marginBottom: '0.5rem', textTransform: 'uppercase'
              }}>
                {product.category}
              </div>
              <h3 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', fontSize: '1rem' }}>
                {product.name}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                {product.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, color: '#3b82f6', fontSize: '1.3rem' }}>
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    padding: '0.5rem 1rem', borderRadius: 8, border: 'none',
                    background: isAdded ? '#10b981' : '#3b82f6',
                    color: 'white', cursor: 'pointer', fontWeight: 600,
                    fontSize: '0.8rem', transition: 'background 0.2s',
                  }}
                >
                  {isAdded ? '✓ Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
