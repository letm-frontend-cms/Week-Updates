import React from 'react';
import ReactDOM from 'react-dom/client';
import CartPage from './CartPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
    <h2 style={{ marginBottom: '1rem' }}>Cart MFE — Standalone Mode</h2>
    <CartPage />
  </div>
);
