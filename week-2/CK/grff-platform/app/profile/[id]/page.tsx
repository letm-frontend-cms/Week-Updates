import RenderingBadge from "@/components/RenderingBadge";
import { getUser } from "@/lib/data";
import { notFound } from "next/navigation";

// Force dynamic rendering (SSR)
export const dynamic = "force-dynamic";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = parseInt(id);
  const user = await getUser(userId);

  if (!user) {
    notFound();
  }

  // Simulating server-side time generation
  const serverTime = new Date().toLocaleString();

  return (
    <div>
      <RenderingBadge
        type="SSR"
        explanation="This page is Server-Side Rendered (SSR). The HTML is generated on the server for EVERY REQUEST. Notice the server time changes on each refresh!"
      />

      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-start gap-6">
          <div className="text-6xl">{user.avatar}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {user.name}
            </h1>
            <p className="text-gray-700 mb-4">{user.email}</p>
            <p className="text-gray-800 mb-6">{user.bio}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-700">
                  {user.posts}
                </div>
                <div className="text-sm text-gray-700">Blog Posts</div>
              </div>
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-4">
                <div className="text-sm text-gray-700">Joined</div>
                <div className="font-semibold text-gray-900">
                  {user.joinDate}
                </div>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-300 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold mb-1 text-gray-900">
                🕐 Server Render Time:
              </p>
              <p className="text-lg font-mono text-gray-900">{serverTime}</p>
              <p className="text-xs text-gray-700 mt-2">
                Refresh this page - the time will update! This proves it's
                rendered on the server each time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-sky-50 border border-sky-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            💡 Why SSR for Profile?
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li>✅ User data changes frequently (posts, bio updates)</li>
            <li>✅ Want fresh data on every visit</li>
            <li>✅ May have personalized content based on viewer</li>
            <li>✅ SEO important (public profiles)</li>
            <li>✅ Can't pre-render all possible user profiles</li>
            <li>❌ Slower than static (server processes each request)</li>
          </ul>
        </div>

        <div className="mt-6 bg-slate-100 border border-slate-300 rounded-lg p-4">
          <p className="text-sm text-gray-800">
            <strong>How to verify:</strong> View page source - you'll see full
            HTML. But refresh multiple times and check the server time - it
            updates! This means the server is rendering fresh HTML on each
            request.
          </p>
        </div>
      </div>
    </div>
  );
}
