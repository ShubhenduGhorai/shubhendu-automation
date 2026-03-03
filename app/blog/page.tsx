import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <Card key={post.slug} className="p-6">
            <p className="text-xs text-white/60">{post.date}</p>
            <h2 className="mt-1 text-2xl"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p className="mt-2 text-white/70">{post.description}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
