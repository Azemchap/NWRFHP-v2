import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mongodb",
  dbCredentials: {
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/nwrfhp",
  },
} satisfies Config;
