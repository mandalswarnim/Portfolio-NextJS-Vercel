import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Swarnim Mandal",
  description: "Articles about web development, AI, and software engineering",
};

export default function Blog() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-background to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Thoughts on web development, AI, and software engineering
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold">
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-2 rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-semibold">{post.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                  <span className="text-gray-500">•</span>
                  <time className="text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
                >
                  Read more
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
