import {
  pgTable,
  text,
  integer,
  timestamp,
  uuid,
  date,
  boolean,
  jsonb,
  index,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Reference to Supabase auth.users table (not created by Drizzle)
export const authUsers = pgTable("auth.users", {
  id: uuid("id").primaryKey(),
});

export const profiles = pgTable(
  "profiles",
  {
    userId: uuid("user_id").primaryKey().references(() => authUsers.id),
    displayName: text("display_name"),
    currentLevel: text("current_level").default("A1"),
    streakCount: integer("streak_count").default(0),
    longestStreak: integer("longest_streak").default(0),
    lastPracticeDate: date("last_practice_date"),
    totalMinutesSpoken: integer("total_minutes_spoken").default(0),
    totalWordsLearned: integer("total_words_learned").default(0),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [index("idx_user_id").on(table.userId)]
);

export const lessons = pgTable(
  "lessons",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    level: text("level").notNull(),
    orderIndex: integer("order_index").notNull(),
    title: text("title").notNull(),
    topic: text("topic"),
    objectives: text("objectives").array(),
    contentJson: jsonb("content_json"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [index("idx_level").on(table.level)]
);

export const lessonProgress = pgTable(
  "lesson_progress",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => profiles.userId),
    lessonId: uuid("lesson_id").references(() => lessons.id),
    status: text("status").default("not_started"),
    score: integer("score"),
    completedAt: timestamp("completed_at"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [
    index("idx_user_lesson").on(table.userId, table.lessonId),
  ]
);

export const conversationSessions = pgTable(
  "conversation_sessions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => profiles.userId),
    mode: text("mode").notNull(),
    lessonId: uuid("lesson_id").references(() => lessons.id),
    startedAt: timestamp("started_at").defaultNow(),
    endedAt: timestamp("ended_at"),
    durationSeconds: integer("duration_seconds"),
    avgScore: integer("avg_score"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [index("idx_user_sessions").on(table.userId)]
);

export const conversationTurns = pgTable(
  "conversation_turns",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    sessionId: uuid("session_id").references(() => conversationSessions.id),
    speaker: text("speaker").notNull(),
    transcriptText: text("transcript_text").notNull(),
    correctedText: text("corrected_text"),
    errorTags: jsonb("error_tags"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [index("idx_session_turns").on(table.sessionId)]
);

export const writingSubmissions = pgTable(
  "writing_submissions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => profiles.userId),
    prompt: text("prompt").notNull(),
    originalText: text("original_text").notNull(),
    correctedText: text("corrected_text").notNull(),
    feedbackJson: jsonb("feedback_json"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [index("idx_user_writings").on(table.userId)]
);

export const vocabularyLog = pgTable(
  "vocabulary_log",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => profiles.userId),
    word: text("word").notNull(),
    firstSeenAt: timestamp("first_seen_at").defaultNow(),
    timesUsed: integer("times_used").default(1),
    mastered: boolean("mastered").default(false),
  },
  (table) => [index("idx_user_vocab").on(table.userId)]
);

export const errorPatterns = pgTable(
  "error_patterns",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => profiles.userId),
    errorType: text("error_type").notNull(),
    example: text("example"),
    frequency: integer("frequency").default(1),
    lastSeenAt: timestamp("last_seen_at").defaultNow(),
  },
  (table) => [index("idx_user_errors").on(table.userId)]
);

// Relations
export const profilesRelations = relations(profiles, ({ many }) => ({
  lessonProgress: many(lessonProgress),
  conversationSessions: many(conversationSessions),
  writingSubmissions: many(writingSubmissions),
  vocabularyLog: many(vocabularyLog),
  errorPatterns: many(errorPatterns),
}));

export const lessonsRelations = relations(lessons, ({ many }) => ({
  lessonProgress: many(lessonProgress),
  conversationSessions: many(conversationSessions),
}));

export const conversationSessionsRelations = relations(
  conversationSessions,
  ({ one, many }) => ({
    user: one(profiles, {
      fields: [conversationSessions.userId],
      references: [profiles.userId],
    }),
    lesson: one(lessons, {
      fields: [conversationSessions.lessonId],
      references: [lessons.id],
    }),
    turns: many(conversationTurns),
  })
);

export const conversationTurnsRelations = relations(conversationTurns, ({ one }) => ({
  session: one(conversationSessions, {
    fields: [conversationTurns.sessionId],
    references: [conversationSessions.id],
  }),
}));
