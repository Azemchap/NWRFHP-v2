import { getCollection } from "../client";
import { TeamMember, COLLECTIONS } from "../schema";
import { ObjectId } from "mongodb";

/**
 * Team Member Repository
 * Handles all database operations for team members
 */
export class TeamMemberRepository {
  /**
   * Get all active team members, sorted by order
   */
  static async getAll(activeOnly = true): Promise<TeamMember[]> {
    const collection = await getCollection<TeamMember>(COLLECTIONS.TEAM_MEMBERS);
    const filter = activeOnly ? { isActive: true } : {};

    return collection
      .find(filter)
      .sort({ order: 1, name: 1 })
      .toArray();
  }

  /**
   * Get a single team member by slug
   */
  static async getBySlug(slug: string): Promise<TeamMember | null> {
    const collection = await getCollection<TeamMember>(COLLECTIONS.TEAM_MEMBERS);
    return collection.findOne({ slug, isActive: true });
  }

  /**
   * Get a single team member by ID
   */
  static async getById(id: string): Promise<TeamMember | null> {
    const collection = await getCollection<TeamMember>(COLLECTIONS.TEAM_MEMBERS);
    return collection.findOne({ id });
  }

  /**
   * Create a new team member
   */
  static async create(data: Omit<TeamMember, "_id" | "createdAt" | "updatedAt">): Promise<TeamMember> {
    const collection = await getCollection<TeamMember>(COLLECTIONS.TEAM_MEMBERS);

    const teamMember: TeamMember = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await collection.insertOne(teamMember as any);
    return { ...teamMember, _id: result.insertedId };
  }

  /**
   * Update a team member
   */
  static async update(
    id: string,
    data: Partial<Omit<TeamMember, "_id" | "id" | "createdAt">>
  ): Promise<boolean> {
    const collection = await getCollection<TeamMember>(COLLECTIONS.TEAM_MEMBERS);

    const result = await collection.updateOne(
      { id },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      }
    );

    return result.modifiedCount > 0;
  }

  /**
   * Delete a team member (soft delete by setting isActive to false)
   */
  static async delete(id: string): Promise<boolean> {
    return this.update(id, { isActive: false });
  }

  /**
   * Permanently delete a team member
   */
  static async hardDelete(id: string): Promise<boolean> {
    const collection = await getCollection<TeamMember>(COLLECTIONS.TEAM_MEMBERS);
    const result = await collection.deleteOne({ id });
    return result.deletedCount > 0;
  }

  /**
   * Seed team members from JSON data
   */
  static async seedFromJSON(teamData: any[]): Promise<void> {
    const collection = await getCollection<TeamMember>(COLLECTIONS.TEAM_MEMBERS);

    // Clear existing data
    await collection.deleteMany({});

    // Transform and insert team data
    const teamMembers: TeamMember[] = teamData.map((member, index) => ({
      id: member.id,
      name: member.name,
      role: member.role,
      image: member.image,
      slug: member.slug,
      isActive: true,
      order: index + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    if (teamMembers.length > 0) {
      await collection.insertMany(teamMembers as any);
    }
  }
}
