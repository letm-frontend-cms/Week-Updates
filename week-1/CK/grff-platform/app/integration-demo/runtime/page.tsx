"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type RuntimeUI = {
  Button: React.ComponentType<{ children?: React.ReactNode; variant?: string }>;
  Card: React.ComponentType<{ title?: string; children?: React.ReactNode }>;
  Alert: React.ComponentType<{ type?: string; children?: React.ReactNode }>;
  version: string;
};

/**
 * Runtime Integration Demo: Loose Coupling
 *
 * The app does NOT bundle @grff/ui-library at build time.
 * Instead, it loads /grff-ui-library.js at runtime (browser loads script).
 *
 * This allows independent deployment:
 *   1. Change Button → npm run build:ui (library only)
 *   2. Refresh page → see changes (no app rebuild!)
 */
export default function RuntimeDemo() {
  const [UI, setUI] = useState<RuntimeUI | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Host provides React/ReactDOM so the runtime script uses the same instance
    (
      window as Window & { React: typeof React; ReactDOM: typeof ReactDOM }
    ).React = React;
    (
      window as Window & { React: typeof React; ReactDOM: typeof ReactDOM }
    ).ReactDOM = ReactDOM;

    const script = document.createElement("script");
    script.src = "/grff-ui-library.js";
    script.async = true;
    script.onload = () => {
      const g = (window as Window & { GRFF_UI?: RuntimeUI }).GRFF_UI;
      if (g) {
        setUI(g);
      } else {
        setError("Script loaded but window.GRFF_UI not set.");
      }
    };
    script.onerror = () =>
      setError("Failed to load grff-ui-library.js. Run: npm run build:ui");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="rounded-lg border-2 border-red-300 bg-red-50 p-4 text-red-800">
          <p className="font-semibold">Runtime UI failed</p>
          <p className="text-sm mt-1">{error}</p>
          <p className="text-sm mt-2">
            Run:{" "}
            <code className="bg-red-100 px-1 rounded">npm run build:ui</code>{" "}
            then refresh.
          </p>
        </div>
      </div>
    );
  }

  if (!UI) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <p className="text-gray-500">
          Loading UI library from /grff-ui-library.js…
        </p>
      </div>
    );
  }

  const { Button, Card, Alert } = UI;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          🔄 Runtime Integration (Loose Coupling)
        </h1>
        <p className="text-gray-600 mb-4">
          Components loaded from <strong>separate build</strong> at runtime via{" "}
          <code className="bg-gray-100 px-1 rounded">/grff-ui-library.js</code>.
          UI library and main app are built independently.
        </p>
        {/*<div className="bg-green-50 border-l-4 border-green-500 p-4 text-sm mb-6">
          <p className="font-semibold text-green-900 mb-2">
            ✅ Independent Deployment Demo:
          </p>
          <ol className="text-green-800 space-y-1 text-xs ml-4 list-decimal">
            <li>
              Edit{" "}
              <code className="bg-green-100 px-1 rounded">
                packages/ui-library/src/Button.tsx
              </code>{" "}
              (change primary color from blue to purple)
            </li>
            <li>
              Run <strong>only</strong>{" "}
              <code className="bg-green-100 px-1 rounded">
                npm run build:ui
              </code>{" "}
              (NOT <code>npm build</code> for main app!)
            </li>
            <li>Refresh this page → ✅ See changes without rebuilding app</li>
          </ol>
          <p className="mt-3 text-green-900 font-semibold text-sm">
            This is why micro-frontends work! Teams can deploy independently.
          </p>
        </div>*/}
      </div>

      {/* Live Components */}
      <div className="mb-6">
        <Card title={`📊 Components (v${UI.version}) - Loaded at Runtime`}>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Buttons:</p>
              <div className="flex gap-2 flex-wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Alerts:</p>
              <div className="space-y-2">
                <Alert type="success">
                  ✅ Loaded at runtime from /grff-ui-library.js
                </Alert>
                <Alert type="info">
                  Change Button.tsx → build:ui → refresh = see updates!
                </Alert>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* How It Works */}
     {/* <div className="mb-6">
        <Card title="How Runtime Integration Works">
          <div className="space-y-3 text-sm text-gray-900">
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="font-semibold mb-1">1. Separate Builds</p>
              <p className="text-xs">
                Main app:{" "}
                <code className="bg-blue-100 px-1 rounded">npm build</code> →{" "}
                <code>.next/</code>
                <br />
                UI library:{" "}
                <code className="bg-blue-100 px-1 rounded">
                  npm run build:ui
                </code>{" "}
                → <code>public/grff-ui-library.js</code>
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="font-semibold mb-1">2. Runtime Loading</p>
              <p className="text-xs">
                Browser loads main app → injects{" "}
                <code className="bg-blue-100 px-1 rounded">
                  &lt;script src="/grff-ui-library.js"&gt;
                </code>{" "}
                → script attaches{" "}
                <code className="bg-blue-100 px-1 rounded">window.GRFF_UI</code>{" "}
                → React renders components
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="font-semibold mb-1 text-green-900">
                3. Independent Deployment
              </p>
              <p className="text-xs text-green-800">
                <strong>Change Button:</strong> build:ui → update{" "}
                <code>public/grff-ui-library.js</code> → refresh → done!
                <br />
                <strong>No need to:</strong> rebuild main app, restart server,
                or redeploy entire platform
              </p>
            </div>
          </div>
        </Card>
      </div>*/}

      {/* Comparison with Build-Time */}
      {/*<Card title="Build-Time vs Runtime: The Difference">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-red-50 border border-red-200 rounded p-3">
            <p className="font-semibold text-red-900 mb-2">
              ❌ Build-Time (Tight)
            </p>
            <ul className="text-xs text-red-800 space-y-1">
              <li>
                • Library bundled during <code>npm build</code>
              </li>
              <li>• Change Button → rebuild entire app</li>
              <li>• All teams deploy together</li>
              <li>
                • Result: <strong>Tightly coupled</strong>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <p className="font-semibold text-green-900 mb-2">
              ✅ Runtime (Loose)
            </p>
            <ul className="text-xs text-green-800 space-y-1">
              <li>
                • Library loaded via <code>&lt;script&gt;</code>
              </li>
              <li>• Change Button → rebuild library only</li>
              <li>• Teams deploy independently</li>
              <li>
                • Result: <strong>Loosely coupled</strong>
              </li>
            </ul>
          </div>
        </div>
      </Card>*/}
    </div>
  );
}
