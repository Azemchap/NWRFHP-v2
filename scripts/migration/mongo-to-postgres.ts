/**
 * MongoDB to PostgreSQL Data Migration Script
 *
 * This script migrates all data from MongoDB to Neon PostgreSQL
 * Run with: npm run db:migrate:mongo-to-pg
 *
 * Prerequisites:
 * 1. Neon database must be created and migrations applied
 * 2. Both DATABASE_URL (PostgreSQL) and MONGODB_URL must be set in .env.local
 * 3. MongoDB instance must be accessible
 */

import { MongoClient } from 'mongodb';
import { db } from '../../src/db/drizzle/client';
import {
  teamMembers,
  contactSubmissions,
  newsletterSubscriptions,
  programs,
  blogPosts,
} from '../../src/db/drizzle/schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// MongoDB connection
const MONGODB_URL = process.env.MONGODB_URL || process.env.DATABASE_URL_MONGODB || '';
const MONGODB_DB_NAME = process.env.DATABASE_NAME || 'nwrfhp';

if (!MONGODB_URL) {
  console.error('❌ MONGODB_URL or DATABASE_URL_MONGODB not found in environment variables');
  process.exit(1);
}

interface MongoTeamMember {
  _id?: any;
  name: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
  bio?: string;
  slug: string;
  order?: number;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MongoContactSubmission {
  _id?: any;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MongoNewsletterSubscription {
  _id?: any;
  email: string;
  name?: string;
  isActive?: boolean;
  subscribedAt?: Date;
  unsubscribedAt?: Date;
}

interface MongoProgram {
  _id?: any;
  title: string;
  description: string;
  image?: string;
  slug: string;
  category?: string;
  isActive?: boolean;
  order?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MongoBlogPost {
  _id?: any;
  title: string;
  content: string;
  excerpt?: string;
  image?: string;
  slug: string;
  author?: string;
  category?: string;
  tags?: string[];
  isPublished?: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

async function migrateTeamMembers(mongoDb: any) {
  console.log('\n📋 Migrating team members...');
  const collection = mongoDb.collection('team_members');
  const count = await collection.countDocuments();
  console.log(`   Found ${count} team members in MongoDB`);

  if (count === 0) {
    console.log('   ⚠️  No team members to migrate');
    return 0;
  }

  const members = await collection.find({}).toArray() as MongoTeamMember[];

  for (const member of members) {
    await db.insert(teamMembers).values({
      name: member.name,
      role: member.role,
      image: member.image,
      email: member.email || null,
      phone: member.phone || null,
      bio: member.bio || null,
      slug: member.slug,
      order: member.order || null,
      isActive: member.isActive ?? true,
      createdAt: member.createdAt || new Date(),
      updatedAt: member.updatedAt || new Date(),
    });
  }

  console.log(`   ✅ Migrated ${members.length} team members`);
  return members.length;
}

async function migrateContactSubmissions(mongoDb: any) {
  console.log('\n📋 Migrating contact submissions...');
  const collection = mongoDb.collection('contact_submissions');
  const count = await collection.countDocuments();
  console.log(`   Found ${count} contact submissions in MongoDB`);

  if (count === 0) {
    console.log('   ⚠️  No contact submissions to migrate');
    return 0;
  }

  const submissions = await collection.find({}).toArray() as MongoContactSubmission[];

  for (const submission of submissions) {
    await db.insert(contactSubmissions).values({
      name: submission.name,
      email: submission.email,
      phone: submission.phone || null,
      subject: submission.subject,
      message: submission.message,
      status: submission.status || 'new',
      createdAt: submission.createdAt || new Date(),
      updatedAt: submission.updatedAt || new Date(),
    });
  }

  console.log(`   ✅ Migrated ${submissions.length} contact submissions`);
  return submissions.length;
}

async function migrateNewsletterSubscriptions(mongoDb: any) {
  console.log('\n📋 Migrating newsletter subscriptions...');
  const collection = mongoDb.collection('newsletter_subscriptions');
  const count = await collection.countDocuments();
  console.log(`   Found ${count} newsletter subscriptions in MongoDB`);

  if (count === 0) {
    console.log('   ⚠️  No newsletter subscriptions to migrate');
    return 0;
  }

  const subscriptions = await collection.find({}).toArray() as MongoNewsletterSubscription[];

  for (const subscription of subscriptions) {
    await db.insert(newsletterSubscriptions).values({
      email: subscription.email,
      name: subscription.name || null,
      isActive: subscription.isActive ?? true,
      subscribedAt: subscription.subscribedAt || new Date(),
      unsubscribedAt: subscription.unsubscribedAt || null,
    });
  }

  console.log(`   ✅ Migrated ${subscriptions.length} newsletter subscriptions`);
  return subscriptions.length;
}

async function migratePrograms(mongoDb: any) {
  console.log('\n📋 Migrating programs...');
  const collection = mongoDb.collection('programs');
  const count = await collection.countDocuments();
  console.log(`   Found ${count} programs in MongoDB`);

  if (count === 0) {
    console.log('   ⚠️  No programs to migrate');
    return 0;
  }

  const programsList = await collection.find({}).toArray() as MongoProgram[];

  for (const program of programsList) {
    await db.insert(programs).values({
      title: program.title,
      description: program.description,
      image: program.image || null,
      slug: program.slug,
      category: program.category || null,
      isActive: program.isActive ?? true,
      order: program.order || null,
      createdAt: program.createdAt || new Date(),
      updatedAt: program.updatedAt || new Date(),
    });
  }

  console.log(`   ✅ Migrated ${programsList.length} programs`);
  return programsList.length;
}

async function migrateBlogPosts(mongoDb: any) {
  console.log('\n📋 Migrating blog posts...');
  const collection = mongoDb.collection('blog_posts');
  const count = await collection.countDocuments();
  console.log(`   Found ${count} blog posts in MongoDB`);

  if (count === 0) {
    console.log('   ⚠️  No blog posts to migrate');
    return 0;
  }

  const posts = await collection.find({}).toArray() as MongoBlogPost[];

  for (const post of posts) {
    await db.insert(blogPosts).values({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || null,
      image: post.image || null,
      slug: post.slug,
      author: post.author || null,
      category: post.category || null,
      tags: post.tags ? JSON.stringify(post.tags) : null,
      isPublished: post.isPublished ?? false,
      publishedAt: post.publishedAt || null,
      createdAt: post.createdAt || new Date(),
      updatedAt: post.updatedAt || new Date(),
    });
  }

  console.log(`   ✅ Migrated ${posts.length} blog posts`);
  return posts.length;
}

async function validateMigration(mongoDb: any, migrationCounts: Record<string, number>) {
  console.log('\n🔍 Validating migration...');

  const collections = [
    { name: 'team_members', table: teamMembers },
    { name: 'contact_submissions', table: contactSubmissions },
    { name: 'newsletter_subscriptions', table: newsletterSubscriptions },
    { name: 'programs', table: programs },
    { name: 'blog_posts', table: blogPosts },
  ];

  let validationPassed = true;

  for (const { name, table } of collections) {
    const mongoCount = await mongoDb.collection(name).countDocuments();
    const pgCount = (await db.select().from(table)).length;
    const migrated = migrationCounts[name] || 0;

    console.log(`   ${name}:`);
    console.log(`     MongoDB: ${mongoCount} | PostgreSQL: ${pgCount} | Migrated: ${migrated}`);

    if (pgCount !== migrated) {
      console.log(`     ❌ Count mismatch!`);
      validationPassed = false;
    } else {
      console.log(`     ✅ Counts match`);
    }
  }

  return validationPassed;
}

async function main() {
  console.log('🚀 Starting MongoDB to PostgreSQL migration...\n');
  console.log(`📍 MongoDB: ${MONGODB_URL.replace(/\/\/.*@/, '//*****@')}`);
  console.log(`📍 PostgreSQL: ${process.env.DATABASE_URL?.replace(/\/\/.*@/, '//*****@')}\n`);

  let mongoClient: MongoClient | null = null;
  const migrationCounts: Record<string, number> = {};

  try {
    // Connect to MongoDB
    console.log('🔌 Connecting to MongoDB...');
    mongoClient = new MongoClient(MONGODB_URL);
    await mongoClient.connect();
    const mongoDb = mongoClient.db(MONGODB_DB_NAME);
    console.log('   ✅ MongoDB connected\n');

    // Run migrations
    migrationCounts['team_members'] = await migrateTeamMembers(mongoDb);
    migrationCounts['contact_submissions'] = await migrateContactSubmissions(mongoDb);
    migrationCounts['newsletter_subscriptions'] = await migrateNewsletterSubscriptions(mongoDb);
    migrationCounts['programs'] = await migratePrograms(mongoDb);
    migrationCounts['blog_posts'] = await migrateBlogPosts(mongoDb);

    // Validate migration
    const validationPassed = await validateMigration(mongoDb, migrationCounts);

    if (validationPassed) {
      console.log('\n✅ Migration completed successfully!');
      console.log('\n📊 Summary:');
      Object.entries(migrationCounts).forEach(([name, count]) => {
        console.log(`   ${name}: ${count} records`);
      });
      console.log('\n💡 Next steps:');
      console.log('   1. Verify data in Drizzle Studio: npm run db:studio');
      console.log('   2. Test application with PostgreSQL');
      console.log('   3. Update .env.local to use PostgreSQL exclusively');
    } else {
      console.log('\n❌ Migration completed with validation errors');
      console.log('   Please review the counts above and investigate discrepancies');
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  } finally {
    // Close MongoDB connection
    if (mongoClient) {
      await mongoClient.close();
      console.log('\n🔌 MongoDB connection closed');
    }
  }
}

main();
