"use client"; // This makes it Client-Side Rendered

import RenderingBadge from "@/components/RenderingBadge";
import { useEffect, useState } from "react";

interface ActivityItem {
  id: number;
  action: string;
  timestamp: Date;
}

export default function DashboardPage() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // Simulate fetching user-specific data
  useEffect(() => {
    setTimeout(() => {
      setActivities([
        { id: 1, action: "Logged in", timestamp: new Date() },
        {
          id: 2,
          action: "Viewed course: Next.js Basics",
          timestamp: new Date(Date.now() - 3600000),
        },
        {
          id: 3,
          action: "Completed quiz",
          timestamp: new Date(Date.now() - 7200000),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <RenderingBadge
        type="CSR"
        explanation="This page is Client-Side Rendered (CSR). The HTML is empty initially, and React renders the content in the browser using JavaScript. Perfect for user-specific dashboards where SEO isn't needed."
      />

      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Your Dashboard
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome back! Here&rsquo;s your personalized activity.
        </p>

        {/* Interactive Counter */}
        <div className="bg-violet-50 border-2 border-violet-300 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-lg mb-3 text-gray-900">
            Interactive Counter
          </h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-violet-600 text-white px-4 py-2 rounded font-medium hover:bg-violet-700"
            >
              -
            </button>
            <span className="text-2xl font-bold text-gray-900 tabular-nums">
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-violet-600 text-white px-4 py-2 rounded font-medium hover:bg-violet-700"
            >
              +
            </button>
          </div>
          <p className="text-sm text-gray-800 mt-3">
            This interactivity works because JavaScript is running in the
            browser!
          </p>
        </div>

        {/* Recent Activity */}
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4 text-gray-900">
            Recent Activity
          </h3>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse flex gap-3">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex justify-between items-center py-2 border-b border-slate-200"
                >
                  <span className="text-gray-800">{activity.action}</span>
                  <span className="text-sm text-gray-600">
                    {activity.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 bg-violet-50 border-2 border-violet-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            💡 Why CSR for Dashboard?
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li>✅ User-specific data (different for each person)</li>
            <li>✅ Behind authentication (not for search engines)</li>
            <li>✅ Highly interactive (counters, real-time updates)</li>
            <li>✅ Data changes frequently</li>
            <li>❌ No SEO needed (private content)</li>
          </ul>
        </div>

        <div className="mt-6 bg-slate-100 border border-slate-300 rounded-lg p-4">
          <p className="text-sm text-gray-800">
            <strong>How to verify:</strong> Right-click → View Page Source.
            You'll see mostly empty HTML with just JavaScript! The content is
            rendered by React in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}
