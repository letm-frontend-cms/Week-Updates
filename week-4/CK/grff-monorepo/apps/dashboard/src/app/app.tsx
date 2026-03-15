import { Button, Card, Alert, VERSION } from '@grff-monorepo/components';

export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Version Badge */}
        <div className="fixed top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Components v{VERSION}
        </div>

        {/* Monorepo Badge */}
        <div className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 border-2 border-purple-500 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <div>
              <div className="font-bold text-purple-200">MONOREPO MODE</div>
              <div className="text-sm text-purple-300">
                Same components as Marketing, always in sync!
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <Alert type="success">
          Dashboard using components v{VERSION} from the monorepo
        </Alert>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Card title="Total Users">
            <p className="text-4xl font-bold text-blue-400">1,234</p>
          </Card>

          <Card title="Revenue">
            <p className="text-4xl font-bold text-green-400">$45,678</p>
          </Card>

          <Card title="Active Sessions">
            <p className="text-4xl font-bold text-yellow-400">89</p>
          </Card>

          <Card title="Quick Actions">
            <div className="space-y-2">
              <Button variant="primary">Export Data</Button>
              <Button variant="secondary">View Reports</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
