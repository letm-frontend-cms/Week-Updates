import RenderingBadge from "@/components/RenderingBadge";
import { getBlogPost, getBlogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

export const revalidate = 60;

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  // Server-side timestamp - proves when this page was last generated
  const generatedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <RenderingBadge
        type="ISR"
        explanation="This individual blog post is also using ISR. All posts were pre-rendered at build time, but they'll refresh in the background every 60 seconds to show updated content."
      />

      <article className="bg-white rounded-lg shadow p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-gray-700 mb-8 pb-6 border-b">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-800 leading-relaxed">
            {post.content}
          </p>
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            💡 Why ISR for Blog Post?
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li>✅ Content might get updates/corrections</li>
            <li>✅ Static performance (instant load)</li>
            <li>✅ Don't want to rebuild for typo fixes</li>
            <li>✅ generateStaticParams pre-renders all posts at build</li>
            <li>✅ New posts added dynamically without full rebuild</li>
            <li>✅ Revalidates every 60 seconds in this demo</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
