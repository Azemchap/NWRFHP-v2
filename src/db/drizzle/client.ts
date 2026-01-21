import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from './schema';

/**
 * Neon Database Client
 *
 * Uses Neon's serverless driver for edge-compatible database access
 * Works in both Node.js and Edge Runtime environments
 */

// Create lazy-loaded database client to avoid build-time errors
let _db: NeonHttpDatabase<typeof schema> | null = null;

function getDb(): NeonHttpDatabase<typeof schema> {
  if (_db) return _db;

  if (!process.env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL environment variable is not set. Please add it to your .env.local file.'
    );
  }

  const sql = neon(process.env.DATABASE_URL);
  _db = drizzle(sql, { schema });
  return _db;
}

// Export a proxy that lazily initializes the database connection
export const db = new Proxy({} as NeonHttpDatabase<typeof schema>, {
  get(_, prop) {
    return getDb()[prop as keyof NeonHttpDatabase<typeof schema>];
  },
});

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
