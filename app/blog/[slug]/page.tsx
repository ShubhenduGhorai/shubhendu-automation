import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof getPostBySlug>>;

  try {
    post = await getPostBySlug(slug);
  } catch {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">{post.meta.title}</h1>
      <p className="mt-3 text-white/60">{post.meta.date}</p>
      <article className="prose prose-invert mt-8 max-w-none">{post.content}</article>
    </main>
  );
}
