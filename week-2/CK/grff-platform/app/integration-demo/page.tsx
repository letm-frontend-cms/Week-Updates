import { Card } from "@grff/ui-library";
import Link from "next/link";

export default function IntegrationDemoPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Integration Patterns: Build-Time vs Runtime
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          When is code integrated? This determines coupling and deployability.
        </p>
      </div>

      {/* Two Main Patterns */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Build-Time: Tight Coupling */}
        <Link href="/integration-demo/build-time">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-2 border-red-300">
            <div className="text-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">📦</div>
                <div>
                  <h3 className="text-xl font-bold">Build-Time Integration</h3>
                  <span className="bg-red-200 text-red-900 px-2 py-0.5 rounded text-xs font-medium">
                    Tight Coupling
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Components are bundled when you run{" "}
                <code className="bg-gray-100 px-1 rounded">npm build</code>. All
                code included in one bundle at build time.
              </p>
              <div className="bg-red-50 rounded p-3 text-xs space-y-1">
                <p>
                  <strong>
                    ❌ Change UI library → must rebuild entire app
                  </strong>
                </p>
                <p>
                  <strong>❌ Cannot deploy library independently</strong>
                </p>
                <p>
                  <strong>❌ Teams must coordinate releases</strong>
                </p>
              </div>
            </div>
          </Card>
        </Link>

        {/* Runtime: Loose Coupling */}
        <Link href="/integration-demo/runtime">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-2 border-green-300">
            <div className="text-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🔄</div>
                <div>
                  <h3 className="text-xl font-bold">Runtime Integration</h3>
                  <span className="bg-green-200 text-green-900 px-2 py-0.5 rounded text-xs font-medium">
                    Loose Coupling
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Components loaded from separate build at runtime (
                <code className="bg-gray-100 px-1 rounded">
                  &lt;script src="..."&gt;
                </code>
                ). Library and app built independently.
              </p>
              <div className="bg-green-50 rounded p-3 text-xs space-y-1">
                <p>
                  <strong>✅ Change UI library → rebuild only library</strong>
                </p>
                <p>
                  <strong>✅ Deploy library without touching app</strong>
                </p>
                <p>
                  <strong>✅ Teams work independently</strong>
                </p>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Comparison */}
      <Card title="Build-Time vs Runtime: Quick Comparison" className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-900">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 font-semibold">Question</th>
                <th className="text-left py-3 font-semibold text-red-800">
                  Build-Time
                </th>
                <th className="text-left py-3 font-semibold text-green-800">
                  Runtime
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3 font-medium">When is code integrated?</td>
                <td className="py-3">
                  During{" "}
                  <code className="bg-gray-100 px-1 rounded text-xs">
                    npm build
                  </code>
                </td>
                <td className="py-3">When page loads in browser</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Coupling</td>
                <td className="py-3">🔴 Tight - everything together</td>
                <td className="py-3">🟢 Loose - independent parts</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Change UI library?</td>
                <td className="py-3">❌ Rebuild entire app</td>
                <td className="py-3">✅ Rebuild only library</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Deploy independently?</td>
                <td className="py-3">❌ No - deploy everything</td>
                <td className="py-3">✅ Yes - deploy library alone</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Multiple teams?</td>
                <td className="py-3">❌ Must coordinate</td>
                <td className="py-3">✅ Work independently</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Micro-frontends?</td>
                <td className="py-3">❌ Not possible</td>
                <td className="py-3">✅ Enabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Why This Matters for Micro-Frontends */}
      <Card
        title="Why Micro-Frontends REQUIRE Runtime Integration"
        className="mb-8"
      >
        <div className="space-y-4 text-sm text-gray-900">
          <p>
            <strong className="text-base">The Micro-Frontend Promise:</strong>{" "}
            Multiple teams can own different parts of the UI and deploy them
            independently, like microservices for the frontend.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">Scenario: E-commerce site</p>
            <ul className="text-xs space-y-1 ml-4">
              <li>
                • <strong>Team A</strong> owns the product catalog
              </li>
              <li>
                • <strong>Team B</strong> owns the shopping cart
              </li>
              <li>
                • <strong>Team C</strong> owns the checkout flow
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-semibold text-red-900 mb-2">
                ❌ With Build-Time:
              </p>
              <ul className="text-xs space-y-1">
                <li>
                  • Team A fixes bug → <strong>ALL teams must rebuild</strong>
                </li>
                <li>
                  • Team B adds feature → <strong>wait for Team A & C</strong>
                </li>
                <li>
                  • Deploy → <strong>coordinate all 3 teams</strong>
                </li>
                <li>
                  • Result: <strong>NOT independent!</strong>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="font-semibold text-green-900 mb-2">
                ✅ With Runtime:
              </p>
              <ul className="text-xs space-y-1">
                <li>
                  • Team A fixes bug → <strong>deploy catalog only</strong>
                </li>
                <li>
                  • Team B adds feature → <strong>deploy cart only</strong>
                </li>
                <li>
                  • Deploy → <strong>each team independently</strong>
                </li>
                <li>
                  • Result: <strong>True independence!</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-200 border-2 border-amber-500 text-amber-950 rounded-lg p-4">
            <p className="font-bold text-base mb-2">Key Insight:</p>
            <p>
              <strong>
                Build-time integration = tight coupling = no independent
                deployment = NOT micro-frontends.
              </strong>
            </p>
            <p className="mt-2">
              Runtime integration is the <em>only</em> way to achieve the
              independent deployability that makes micro-frontends useful.
            </p>
          </div>
        </div>
      </Card>

      {/* Try It */}
      <Card title="Try It Yourself">
        <div className="space-y-3 text-sm text-gray-900">
          <div>
            <p className="font-semibold">Build-Time Demo:</p>
            <p className="text-xs text-gray-600">
              Click the red card above → change the Button → must rebuild entire
              app to see changes
            </p>
          </div>
          <div>
            <p className="font-semibold">Runtime Demo:</p>
            <p className="text-xs text-gray-600">
              Click the green card above → change the Button → run{" "}
              <code className="bg-gray-100 px-1 rounded">build:ui</code> →
              refresh to see changes (no app rebuild!)
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
