import { ObjectId } from "mongodb";

/**
 * Database Schema Definitions using Drizzle ORM
 *
 * Note: MongoDB with Drizzle uses a different approach than SQL databases.
 * We define TypeScript interfaces for type safety.
 */

// Team Member Schema
export interface TeamMember {
  _id?: ObjectId;
  id: string;
  name: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
  bio?: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  order?: number; // For sorting team members
}

// Contact Form Submission Schema
export interface ContactSubmission {
  _id?: ObjectId;
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "new" | "read" | "responded" | "archived";
  createdAt: Date;
  updatedAt: Date;
}

// Newsletter Subscription Schema
export interface NewsletterSubscription {
  _id?: ObjectId;
  id: string;
  email: string;
  name?: string;
  status: "active" | "unsubscribed";
  subscribedAt: Date;
  unsubscribedAt?: Date;
}

// Program Schema
export interface Program {
  _id?: ObjectId;
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  slug: string;
  category?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Blog/News Post Schema
export interface BlogPost {
  _id?: ObjectId;
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  slug: string;
  author: string;
  category?: string;
  tags?: string[];
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Export collection names as constants
export const COLLECTIONS = {
  TEAM_MEMBERS: "team_members",
  CONTACT_SUBMISSIONS: "contact_submissions",
  NEWSLETTER_SUBSCRIPTIONS: "newsletter_subscriptions",
  PROGRAMS: "programs",
  BLOG_POSTS: "blog_posts",
} as const;
