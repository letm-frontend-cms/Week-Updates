import React, { useState, useEffect } from 'react';

export default function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handler = () => setCount(c => c + 1);
    window.addEventListener('cart:add', handler);
    return () => window.removeEventListener('cart:add', handler);
  }, []);

  if (count === 0) return null;

  return (
    <span style={{
      background: '#ef4444', color: 'white',
      borderRadius: '50%', width: 20, height: 20,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '0.7rem', fontWeight: 800,
    }}>
      {count}
    </span>
  );
}
