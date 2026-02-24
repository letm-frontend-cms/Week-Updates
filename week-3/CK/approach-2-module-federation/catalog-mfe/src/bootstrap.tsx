import React from 'react';
import ReactDOM from 'react-dom/client';
import CatalogPage from './CatalogPage';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
    <h2 style={{ marginBottom: '1rem' }}>Catalog MFE — Standalone Mode</h2>
    <CatalogPage />
  </div>
);
