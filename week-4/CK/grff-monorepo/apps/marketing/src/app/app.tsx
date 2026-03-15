import { Button, Card, Alert, VERSION } from '@grff-monorepo/components';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Version Badge */}
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Components v{VERSION}
        </div>

        {/* Monorepo Badge */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <div>
              <div className="font-bold text-green-900">MONOREPO MODE</div>
              <div className="text-sm text-green-700">
                Changes to components appear instantly — no reinstall needed!
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-gray-900">Marketing Site</h1>

        <Alert type="info">
          This app imports components from{' '}
          <code className="bg-blue-100 px-1 rounded">
            @grff-monorepo/components
          </code>
        </Alert>

        <div className="mt-6 space-y-4">
          <Card title="Welcome to Our Platform">
            <p className="text-gray-600 mb-4">
              This marketing site uses the shared component library from the
              monorepo.
            </p>
            <Button variant="primary">Get Started</Button>
          </Card>

          <Card title="Features">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Instant updates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Type safety
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Shared dependencies
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
