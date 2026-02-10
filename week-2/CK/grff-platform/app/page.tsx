import RenderingBadge from "@/components/RenderingBadge";

export default function HomePage() {
  return (
    <div>
      <RenderingBadge
        type="SSG"
        explanation="This page is Static Site Generated (SSG). It was built at BUILD TIME and serves the same HTML to all users. Perfect for marketing pages that don't change often."
      />

      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to GRFF Platform
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Learn rendering strategies through practical examples
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              🎯 Week 1 Goal
            </h3>
            <p className="text-gray-700">
              Master rendering strategies and understand when to use each
              approach
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              📚 What You'll Learn
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Static Site Generation (SSG)</li>
              <li>• Server-Side Rendering (SSR)</li>
              <li>• Client-Side Rendering (CSR)</li>
              <li>• Incremental Static Regeneration (ISR)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-sky-50 border border-sky-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            💡 Why SSG for Homepage?
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li>✅ Content is the same for all users</li>
            <li>✅ No personalization needed</li>
            <li>✅ SEO is critical (marketing page)</li>
            <li>✅ Maximum performance (pre-rendered)</li>
            <li>✅ Low server load (no runtime rendering)</li>
          </ul>
        </div>

        <div className="mt-6 bg-slate-100 border border-slate-300 rounded-lg p-4">
          <p className="text-sm text-gray-800">
            <strong>How to verify:</strong> Right-click → View Page Source.
            You'll see all HTML content already rendered in the source code!
          </p>
        </div>
      </div>
    </div>
  );
}
