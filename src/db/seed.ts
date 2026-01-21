/**
 * Database Seeding Script
 * Run this to populate the database with initial data
 *
 * Usage: npm run db:seed
 */

import { db } from "./drizzle/client";
import { teamMembers } from "./drizzle/schema";
import teamData from "../data/team.json";

async function seed() {
  try {
    console.log("🌱 Starting database seeding...");

    // Clear existing team members
    console.log("🗑️  Clearing existing team members...");
    await db.delete(teamMembers);

    // Seed team members
    console.log("📝 Seeding team members...");
    for (const [index, member] of teamData.entries()) {
      await db.insert(teamMembers).values({
        name: member.name,
        role: member.role,
        image: member.image,
        slug: member.slug,
        order: index + 1,
        isActive: true,
      });
    }
    console.log(`✅ Successfully seeded ${teamData.length} team members`);

    console.log("🎉 Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
