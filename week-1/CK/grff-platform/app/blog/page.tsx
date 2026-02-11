import RenderingBadge from "@/components/RenderingBadge";
import { getBlogPosts } from "@/lib/data";
import Link from "next/link";

// This enables ISR - page will revalidate every 60 seconds (for demo)
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Server-side timestamp - proves when this page was last generated
  const generatedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  return (
    <div>
      <RenderingBadge
        type="ISR"
        explanation="This page uses Incremental Static Regeneration (ISR). It's generated at build time like SSG, but automatically regenerates in the background every 60 seconds when new requests come in."
      />

      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Posts</h1>
        <p className="text-gray-700 mb-2 font-medium">
          Generated at:{" "}
          <span className="font-mono text-gray-900">{generatedAt}</span>
        </p>
        <p className="text-gray-700 mb-6">
          Learn about rendering strategies and modern web development
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>By {post.author}</span>
                <span>
                  {post.date} • {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            💡 Why ISR for Blog?
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li>✅ Content updates occasionally (new posts)</li>
            <li>✅ Want static performance (fast)</li>
            <li>✅ Can tolerate slightly stale data (60s old in this demo)</li>
            <li>✅ No need to rebuild entire site for one post</li>
            <li>✅ SEO important (blog content)</li>
          </ul>
        </div>

        <div className="mt-6 bg-slate-100 border border-slate-300 rounded-lg p-4">
          <p className="text-sm text-gray-800">
            <strong>How ISR works:</strong> First visitor after 60s gets cached
            version, triggers background regeneration. Next visitor gets fresh
            content!
          </p>
        </div>
      </div>
    </div>
  );
}
