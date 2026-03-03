import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const blogDir = path.join(process.cwd(), "content/blog");

export type PostMeta = { slug: string; title: string; description: string; date: string };

export function getPosts(): PostMeta[] {
  const files = fs.readdirSync(blogDir);
  return files.map((file) => {
    const source = fs.readFileSync(path.join(blogDir, file), "utf8");
    const { data } = matter(source);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: String(data.title),
      description: String(data.description),
      date: String(data.date),
    };
  }).sort((a,b)=> (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string) {
  const source = fs.readFileSync(path.join(blogDir, `${slug}.mdx`), "utf8");
  const { content, data } = matter(source);
  const { content: mdx } = await compileMDX({ source: content, options: { parseFrontmatter: false } });
  return { meta: data as { title: string; description: string; date: string }, content: mdx };
}
