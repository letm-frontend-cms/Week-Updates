"use client";

import { Alert, Button, Card } from "@grff/ui-library";
import { useState } from "react";

/**
 * Build-Time Integration Demo: Tight Coupling
 *
 * The UI library is imported directly (import { Button } from '@grff/ui-library').
 * At build time (npm build), webpack bundles everything into one bundle.
 *
 * This creates tight coupling:
 *   - Change Button → MUST rebuild entire app
 *   - Cannot deploy library independently
 *   - All teams must coordinate releases
 */
export default function BuildTimeDemo() {
  const [showAlert, setShowAlert] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/*<div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          📦 Build-Time Integration (Tight Coupling)
        </h1>
        <p className="text-gray-600 mb-4">
          Components imported from{" "}
          <code className="bg-gray-100 px-1 rounded">@grff/ui-library</code> and{" "}
          <strong>bundled at build time</strong>. Everything becomes one bundle
          during <code className="bg-gray-100 px-1 rounded">npm build</code>.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm mb-6">
          <p className="font-semibold text-red-900 mb-2">
            ❌ Tight Coupling Demo:
          </p>
          <ol className="text-red-800 space-y-1 text-xs ml-4 list-decimal">
            <li>
              Edit{" "}
              <code className="bg-red-100 px-1 rounded">
                packages/ui-library/src/Button.tsx
              </code>{" "}
              (change color)
            </li>
            <li>
              Try refreshing this page → ❌ No changes (still using old bundle)
            </li>
            <li>
              Run <strong>entire app rebuild</strong>:{" "}
              <code className="bg-red-100 px-1 rounded">npm run build</code> +{" "}
              <code>npm start</code>
            </li>
            <li>Now refresh → ✓ See changes (but required full rebuild!)</li>
          </ol>
          <p className="mt-3 text-red-900 font-semibold text-sm">
            This is why build-time doesn't work for micro-frontends!
          </p>
        </div>
      </div>*/}

      {/* Live Components */}
      <Card title="📊 Components - Bundled at Build Time" className="mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Buttons:</p>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant="primary"
                onClick={() => setClickCount((c) => c + 1)}
              >
                Primary ({clickCount})
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Alerts:</p>
            <div className="space-y-2">
              {!showAlert && (
                <Button onClick={() => setShowAlert(true)}>Show Alert</Button>
              )}
              {showAlert && (
                <Alert type="success" onClose={() => setShowAlert(false)}>
                  ✓ These components were bundled when you ran npm build
                </Alert>
              )}
              <Alert type="warning">
                ⚠️ Changing Button.tsx won't reflect until you rebuild!
              </Alert>
            </div>
          </div>
        </div>
      </Card>

      {/* How It Works */}
    {/*  <Card title="How Build-Time Integration Works" className="mb-6">
        <div className="space-y-3 text-sm text-gray-900">
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <p className="font-semibold mb-1">1. Import Statement</p>
            <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
              {`import { Button, Card } from '@grff/ui-library';`}
            </pre>
            <p className="text-xs mt-1">
              TypeScript resolves this to{" "}
              <code className="bg-blue-100 px-1 rounded">
                packages/ui-library/src
              </code>
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <p className="font-semibold mb-1">2. Build Process (npm build)</p>
            <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs overflow-x-auto whitespace-pre-wrap">
              {`Webpack bundles:
  app/integration-demo/build-time/page.tsx
    ↓ imports
  packages/ui-library/src/Button.tsx
  packages/ui-library/src/Card.tsx
    ↓ bundles into
  .next/static/chunks/page.js (contains ALL code)`}
            </pre>
          </div>
          <div className="bg-red-50 border border-red-200 rounded p-3">
            <p className="font-semibold mb-1 text-red-900">
              3. Tight Coupling Result
            </p>
            <p className="text-xs text-red-800">
              <strong>Everything is one bundle.</strong> Change Button → entire
              app must rebuild. No way to update library independently.
            </p>
          </div>
        </div>
      </Card>*/}

      {/* Why This Fails for Micro-Frontends */}
    {/*  <Card title="Why Build-Time Fails for Micro-Frontends">
        <div className="space-y-3 text-sm text-gray-900">
          <p className="font-medium">
            Scenario: 3 teams working on one e-commerce app
          </p>
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <ul className="text-xs text-red-800 space-y-2">
              <li>
                <strong>Team A</strong> fixes a bug in the product catalog →
                must rebuild <strong>entire app</strong>
              </li>
              <li>
                <strong>Team B</strong> adds a feature to the cart → must wait
                for Team A & C to finish
              </li>
              <li>
                <strong>Team C</strong> updates checkout → must coordinate
                deploy with A & B
              </li>
              <li className="pt-2 border-t border-red-300">
                <strong className="text-red-900">
                  Result: NOT independent!
                </strong>{" "}
                All teams blocked by each other. Deploy requires coordination.
                One team's bug blocks everyone.
              </li>
            </ul>
          </div>
          <div className="bg-amber-200 border-2 border-amber-500 text-amber-950 rounded p-3">
            <p className="font-semibold mb-1">Key Problem:</p>
            <p className="text-xs">
              Build-time integration creates{" "}
              <strong>one monolithic bundle</strong>. You cannot deploy parts
              independently. This is the opposite of micro-frontends.
            </p>
          </div>
        </div>
      </Card>*/}

      {/* Comparison */}
      {/*<Card title="Build-Time vs Runtime">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-red-50 border-2 border-red-300 rounded p-3">
            <p className="font-semibold text-red-900 mb-2">
              📦 Build-Time (This Page)
            </p>
            <ul className="text-xs text-red-800 space-y-1">
              <li>✓ Simple setup</li>
              <li>✓ Full TypeScript support</li>
              <li>✓ Fast runtime (no network requests)</li>
              <li className="pt-2 border-t border-red-300">
                <strong>❌ Change library → rebuild entire app</strong>
              </li>
              <li>
                <strong>❌ Cannot deploy independently</strong>
              </li>
              <li>
                <strong>❌ Teams must coordinate</strong>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-300 rounded p-3">
            <p className="font-semibold text-green-900 mb-2">
              🔄 Runtime (Next Page)
            </p>
            <ul className="text-xs text-green-800 space-y-1">
              <li>✓ Independent deployment</li>
              <li>✓ Teams work autonomously</li>
              <li>✓ Update library without app rebuild</li>
              <li className="pt-2 border-t border-green-300">
                <strong>✅ Change library → rebuild library only</strong>
              </li>
              <li>
                <strong>✅ Deploy independently</strong>
              </li>
              <li>
                <strong>✅ True micro-frontends</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="/integration-demo/runtime"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm font-medium"
          >
            Try Runtime Integration →
          </a>
        </div>
      </Card>*/}
    </div>
  );
}
