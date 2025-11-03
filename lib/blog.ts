export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    date: "2024-10-15",
    excerpt: "Learn how to build modern web applications with Next.js 15 and the App Router.",
    content: `
# Getting Started with Next.js 15

Next.js 15 introduces powerful new features that make building web applications easier than ever.

## What's New in Next.js 15

- Improved App Router
- Better server components
- Enhanced performance optimizations

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features and best practices.

## Conclusion

Next.js 15 is a game-changer for web development, offering improved performance and developer experience.
    `,
    category: "Web Development",
    readTime: "5 min read",
  },
  {
    slug: "introduction-to-machine-learning",
    title: "Introduction to Machine Learning",
    date: "2024-10-10",
    excerpt: "A beginner-friendly introduction to machine learning concepts and applications.",
    content: `
# Introduction to Machine Learning

Machine learning is transforming how we build intelligent applications.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

## Types of Machine Learning

1. **Supervised Learning**: Learning from labeled data
2. **Unsupervised Learning**: Finding patterns in unlabeled data
3. **Reinforcement Learning**: Learning through trial and error

## Getting Started

Start with Python and popular libraries like:
- TensorFlow
- PyTorch
- Scikit-learn

## Conclusion

Machine learning opens up endless possibilities for creating intelligent applications.
    `,
    category: "AI/ML",
    readTime: "7 min read",
  },
  {
    slug: "building-scalable-apis",
    title: "Building Scalable RESTful APIs",
    date: "2024-10-05",
    excerpt: "Best practices for designing and building scalable RESTful APIs.",
    content: `
# Building Scalable RESTful APIs

Learn how to design and build APIs that can handle growth.

## Key Principles

- Use proper HTTP methods
- Implement versioning
- Add rate limiting
- Document thoroughly

## Tools and Technologies

- Node.js with Express
- PostgreSQL for data persistence
- Redis for caching
- Docker for containerization

## Security Considerations

Always implement:
- Authentication and authorization
- Input validation
- HTTPS encryption
- Rate limiting

## Conclusion

Following these best practices will help you build robust, scalable APIs.
    `,
    category: "Backend",
    readTime: "6 min read",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategories(): string[] {
  const categories = blogPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}
