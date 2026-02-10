"use client";

import { Button, Card } from "@grff/ui-library";
import { useEffect, useState } from "react";

export default function AnalyticsWidget() {
  const [pageViews, setPageViews] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [loadTime] = useState(new Date().toISOString());

  useEffect(() => {
    // Simulate real-time analytics
    const interval = setInterval(() => {
      setPageViews((prev) => prev + Math.floor(Math.random() * 3));
      setSessions((prev) => prev + Math.floor(Math.random() * 2));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card title="📊 Analytics Module (Runtime Loaded)">
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded p-3">
          <p className="text-xs text-blue-600 mb-1">Module Load Time:</p>
          <p className="font-mono text-sm">{loadTime}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{pageViews}</div>
            <div className="text-xs text-gray-600 mt-1">Page Views</div>
          </div>

          <div className="bg-gray-50 rounded p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{sessions}</div>
            <div className="text-xs text-gray-600 mt-1">Active Sessions</div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-gray-500">
            ⚡ This module was loaded dynamically at runtime using React.lazy()
          </p>
        </div>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setPageViews(0);
            setSessions(0);
          }}
        >
          Reset Stats
        </Button>
      </div>
    </Card>
  );
}
