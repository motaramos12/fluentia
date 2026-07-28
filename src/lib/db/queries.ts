import { db } from "@/lib/db";
import { profiles, conversationSessions, lessons, lessonProgress } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

/**
 * Get user profile by user ID
 */
export async function getUserProfile(userId: string) {
  return db.query.profiles.findFirst({
    where: eq(profiles.userId, userId),
  });
}

/**
 * Get all lessons for a given level
 */
export async function getLessonsByLevel(level: string) {
  return db.query.lessons.findMany({
    where: eq(lessons.level, level),
    orderBy: (l) => l.orderIndex,
  });
}

/**
 * Get lesson by ID
 */
export async function getLessonById(lessonId: string) {
  return db.query.lessons.findFirst({
    where: eq(lessons.id, lessonId),
  });
}

/**
 * Get user's recent conversation sessions
 */
export async function getUserConversationSessions(userId: string, limit = 10) {
  return db.query.conversationSessions.findMany({
    where: eq(conversationSessions.userId, userId),
    orderBy: (s) => s.startedAt,
    limit,
    with: {
      turns: true,
    },
  });
}

// Additional queries to be added as needed
