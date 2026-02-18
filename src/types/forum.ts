export interface User {
  id: string;
  username: string;
  avatar?: string;
  joinDate: string;
  postCount: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  likes: number;
  isLiked?: boolean;
}

export interface Thread {
  id: string;
  title: string;
  author: User;
  category: string;
  createdAt: string;
  lastActivity: string;
  posts: Post[];
  postCount: number;
  views: number;
  isPinned?: boolean;
  isLocked?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  threadCount: number;
  icon: string;
}
