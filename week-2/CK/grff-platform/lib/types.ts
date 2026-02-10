export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  joinDate: string;
  posts: number;
}
