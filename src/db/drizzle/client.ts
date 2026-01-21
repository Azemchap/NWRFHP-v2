import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

/**
 * Neon Database Client
 *
 * Uses Neon's serverless driver for edge-compatible database access
 * Works in both Node.js and Edge Runtime environments
 */

if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL environment variable is not set. Please add it to your .env.local file.'
  );
}

// Create Neon HTTP client
const sql = neon(process.env.DATABASE_URL);

// Create Drizzle instance with schema
export const db = drizzle(sql, { schema });

/**
 * Type-safe database instance with full schema
 * Use this for all database operations
 *
 * Example usage:
 * ```typescript
 * import { db } from '@/db/drizzle/client';
 * import { teamMembers } from '@/db/drizzle/schema';
 *
 * const members = await db.select().from(teamMembers);
 * ```
 */
export default db;
