import { pgTable, text, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

// User Progress Tracking
export const userProgress = pgTable("user_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  currentLevel: text("current_level").notNull().default("A1"), // A1, A2, B1, B2
  totalXP: integer("total_xp").notNull().default(0),
  currentStreak: integer("current_streak").notNull().default(0),
  bestStreak: integer("best_streak").notNull().default(0),
  lastPracticeDate: timestamp("last_practice_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Module Completion Tracking
export const moduleProgress = pgTable("module_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  moduleId: text("module_id").notNull(), // e.g., "a1-m1", "a2-m2"
  level: text("level").notNull(), // A1, A2, B1, B2
  isCompleted: boolean("is_completed").notNull().default(false),
  completionPercentage: integer("completion_percentage").notNull().default(0), // 0-100
  xpEarned: integer("xp_earned").notNull().default(0),
  lastAttemptDate: timestamp("last_attempt_date"),
  completedDate: timestamp("completed_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Lesson Completion Tracking
export const lessonProgress = pgTable("lesson_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  moduleId: text("module_id").notNull(),
  lessonId: text("lesson_id").notNull(), // e.g., "a1-m1-l1"
  isCompleted: boolean("is_completed").notNull().default(false),
  exercisesCompleted: integer("exercises_completed").notNull().default(0),
  totalExercises: integer("total_exercises").notNull().default(0),
  bestScore: integer("best_score").notNull().default(0), // 0-100
  xpEarned: integer("xp_earned").notNull().default(0),
  completedDate: timestamp("completed_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Exercise Results
export const exerciseResults = pgTable("exercise_results", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  lessonId: text("lesson_id").notNull(),
  exerciseId: text("exercise_id").notNull(),
  exerciseType: text("exercise_type").notNull(), // "multiple-choice", "translation", "fill-the-blank", "listening"
  userAnswer: text("user_answer").notNull(),
  correctAnswer: text("correct_answer").notNull(),
  isCorrect: boolean("is_correct").notNull(),
  score: integer("score").notNull(), // 0-100
  timeSpent: integer("time_spent").notNull(), // segundos
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Badges/Achievements
export const achievements = pgTable("achievements", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  badgeId: text("badge_id").notNull(), // e.g., "first-lesson", "5-day-streak", "100-xp"
  badgeTitle: text("badge_title").notNull(),
  badgeDescription: text("badge_description").notNull(),
  icon: text("icon").notNull(), // emoji
  unlockedDate: timestamp("unlocked_date").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Daily Streaks
export const streakLog = pgTable("streak_log", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  date: timestamp("date").notNull(), // data do dia
  practiceCompleted: boolean("practice_completed").notNull().default(false),
  xpEarned: integer("xp_earned").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Vocabulary Learning
export const vocabulary = pgTable("vocabulary", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  word: text("word").notNull(),
  translation: text("translation").notNull(),
  level: text("level").notNull(), // A1, A2, B1, B2
  lessonId: text("lesson_id").notNull(),
  timesEncountered: integer("times_encountered").notNull().default(1),
  masteryLevel: integer("mastery_level").notNull().default(0), // 0-5 stars
  lastReviewDate: timestamp("last_review_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Error Patterns (para análise)
export const errorPatterns = pgTable("error_patterns", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("user_id").notNull(),
  errorType: text("error_type").notNull(), // "grammar", "vocabulary", "pronunciation"
  errorDescription: text("error_description").notNull(),
  frequencyCount: integer("frequency_count").notNull().default(1),
  lastOccurredDate: timestamp("last_occurred_date").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
