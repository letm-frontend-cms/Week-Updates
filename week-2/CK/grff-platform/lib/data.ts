import { BlogPost, User } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'understanding-ssr',
    title: 'Understanding Server-Side Rendering',
    excerpt: 'Learn when and why to use SSR in your Next.js applications.',
    content: 'Server-Side Rendering (SSR) is a technique where HTML is generated on the server for each request. This is perfect for personalized content, SEO-critical pages, and when you need fresh data on every page load.',
    author: 'Jane Doe',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'static-site-generation',
    title: 'The Power of Static Site Generation',
    excerpt: 'Discover how SSG can dramatically improve your site performance.',
    content: 'Static Site Generation (SSG) pre-renders pages at build time. This results in incredibly fast page loads and is ideal for content that doesn\'t change often, like marketing pages and documentation.',
    author: 'John Smith',
    date: '2024-01-18',
    readTime: '7 min read',
  },
  {
    id: 3,
    slug: 'client-side-rendering-use-cases',
    title: 'When to Use Client-Side Rendering',
    excerpt: 'Explore the best use cases for CSR in modern web applications.',
    content: 'Client-Side Rendering (CSR) is ideal for highly interactive applications where SEO isn\'t critical. Think dashboards, admin panels, and user-specific interfaces that require real-time interactivity.',
    author: 'Sarah Johnson',
    date: '2024-01-20',
    readTime: '6 min read',
  },
];

export const users: User[] = [
  {
    id: 1,
    name: 'Alice Developer',
    email: 'alice@example.com',
    bio: 'Full-stack developer passionate about React and Next.js',
    avatar: '👩‍💻',
    joinDate: '2023-06-15',
    posts: 12,
  },
  {
    id: 2,
    name: 'Bob Engineer',
    email: 'bob@example.com',
    bio: 'Frontend specialist focusing on performance optimization',
    avatar: '👨‍💻',
    joinDate: '2023-08-20',
    posts: 8,
  },
];

// Simulate API delay
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getBlogPosts(): Promise<BlogPost[]> {
  await delay(500); // Simulate network delay
  return blogPosts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  await delay(500);
  return blogPosts.find(post => post.slug === slug);
}

export async function getUser(id: number): Promise<User | undefined> {
  await delay(800); // Longer delay to simulate database query
  return users.find(user => user.id === id);
}
