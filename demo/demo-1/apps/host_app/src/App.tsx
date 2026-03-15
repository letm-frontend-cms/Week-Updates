import type { ComponentType } from 'react';
import { lazy, Suspense } from 'react';
import { loadRemote } from '@module-federation/runtime';
import './App.css';
import { Header } from 'header-ui-ankit';
import Footer from 'footer-utils-ankit/src/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

const HomePage = lazy(() =>
  loadRemote('home_page/HomePage') as Promise<{ default: ComponentType }>
);

const RemoteLoadingFallback = () => (
  <div
    style={{
      padding: '32px',
      textAlign: 'center',
      color: '#6b7280',
    }}
  >
    Loading Home Page...
  </div>
);

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <div className="content">
        <ErrorBoundary>
          <Suspense fallback={<RemoteLoadingFallback />}>
            <HomePage />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
