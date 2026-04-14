import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { RemoteFallback } from './RemoteFallback';

type LoadStatus = 'loading' | 'loaded' | 'error';

interface RemoteAppProps {
  loader: () => Promise<{ default: ComponentType }>;
  remoteName: string;
}

const RemoteLoadingFallback = () => (
  <div
    style={{
      padding: '32px',
      textAlign: 'center',
      color: '#6b7280',
    }}
  >
    Loading..
  </div>
);

export const RemoteApp = ({ loader, remoteName }: RemoteAppProps) => {
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<LoadStatus>('loading');
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    setComponent(null);
    setError(null);

    loader()
      .then((mod) => {
        if (!cancelled) {
          setStatus('loaded');
          // Updater form prevents React treating the component fn as a state updater
          setComponent(() => mod.default);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setStatus('error');
          setError(err);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [loader, attempt]);

  const retry = () => setAttempt((a) => a + 1);

  if (status === 'loading') {
    return <RemoteLoadingFallback />;
  }

  if (status === 'error') {
    return (
      <RemoteFallback
        error={error ?? undefined}
        remoteName={remoteName}
        onRetry={retry}
      />
    );
  }

  if (Component) {
    return (
      <ErrorBoundary remoteName={remoteName} onRetry={retry}>
        <Component />
      </ErrorBoundary>
    );
  }

  return null;
};
