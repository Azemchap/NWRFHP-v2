/**
 * Database Seeding Script
 * Run this to populate the database with initial data
 *
 * Usage: npm run db:seed
 */

import { TeamMemberRepository } from "./repositories/teamRepository";
import teamData from "../data/team.json";

async function seed() {
  try {
    console.log("🌱 Starting database seeding...");

    // Seed team members
    console.log("📝 Seeding team members...");
    await TeamMemberRepository.seedFromJSON(teamData);
    console.log(`✅ Successfully seeded ${teamData.length} team members`);

    console.log("🎉 Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
