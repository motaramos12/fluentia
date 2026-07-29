/**
 * Drizzle Migrations for Fluentia
 * Run: npm run db:push
 */

import { pgTable, text, integer, timestamp, boolean, jsonb, decimal } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

// ============ AUTH ============
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  nativeLanguage: text("native_language").default("pt"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ============ PROGRESS ============
export const userProgress = pgTable("user_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull().references(() => users.id),
  currentLevel: text("current_level").notNull().default("A1"),
  totalXP: integer("total_xp").notNull().default(0),
  currentStreak: integer("current_streak").notNull().default(0),
  bestStreak: integer("best_streak").notNull().default(0),
  lastPracticeDate: timestamp("last_practice_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const moduleProgress = pgTable("module_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull().references(() => users.id),
  moduleId: text("module_id").notNull(),
  level: text("level").notNull(),
  isCompleted: boolean("is_completed").notNull().default(false),
  completionPercentage: integer("completion_percentage").notNull().default(0),
  xpEarned: integer("xp_earned").notNull().default(0),
  lastAttemptDate: timestamp("last_attempt_date"),
  completedDate: timestamp("completed_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const lessonProgress = pgTable("lesson_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull().references(() => users.id),
  moduleId: text("module_id").notNull(),
  lessonId: text("lesson_id").notNull(),
  isCompleted: boolean("is_completed").notNull().default(false),
  exercisesCompleted: integer("exercises_completed").notNull().default(0),
  totalExercises: integer("total_exercises").notNull().default(0),
  bestScore: integer("best_score").notNull().default(0),
  xpEarned: integer("xp_earned").notNull().default(0),
  completedDate: timestamp("completed_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const exerciseResults = pgTable("exercise_results", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull().references(() => users.id),
  lessonId: text("lesson_id").notNull(),
  exerciseId: text("exercise_id").notNull(),
  exerciseType: text("exercise_type").notNull(),
  userAnswer: text("user_answer").notNull(),
  correctAnswer: text("correct_answer").notNull(),
  isCorrect: boolean("is_correct").notNull(),
  score: integer("score").notNull(),
  timeSpent: integer("time_spent").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const achievements = pgTable("achievements", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull().references(() => users.id),
  badgeId: text("badge_id").notNull(),
  badgeTitle: text("badge_title").notNull(),
  badgeDescription: text("badge_description").notNull(),
  icon: text("icon").notNull(),
  unlockedDate: timestamp("unlocked_date").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const vocabulary = pgTable("vocabulary", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull().references(() => users.id),
  word: text("word").notNull(),
  translation: text("translation").notNull(),
  level: text("level").notNull(),
  lessonId: text("lesson_id").notNull(),
  timesEncountered: integer("times_encountered").notNull().default(1),
  masteryLevel: integer("mastery_level").notNull().default(0),
  lastReviewDate: timestamp("last_review_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const errorPatterns = pgTable("error_patterns", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull().references(() => users.id),
  errorType: text("error_type").notNull(),
  errorDescription: text("error_description").notNull(),
  frequencyCount: integer("frequency_count").notNull().default(1),
  lastOccurredDate: timestamp("last_occurred_date").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ============ RELATIONS ============
export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, {
    fields: [userProgress.userId],
    references: [users.id],
  }),
}));

export const moduleProgressRelations = relations(moduleProgress, ({ one }) => ({
  user: one(users, {
    fields: [moduleProgress.userId],
    references: [users.id],
  }),
}));
