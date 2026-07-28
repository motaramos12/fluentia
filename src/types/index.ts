/**
 * Core application types
 */

export type Level = "A1" | "A2" | "B1" | "B2";

export interface UserProfile {
  userId: string;
  displayName: string;
  currentLevel: Level;
  streakCount: number;
  longestStreak: number;
  lastPracticeDate: Date | null;
  totalMinutesSpoken: number;
  totalWordsLearned: number;
  createdAt: Date;
}

export interface Lesson {
  id: string;
  level: Level;
  orderIndex: number;
  title: string;
  topic: string;
  objectives: string[];
  contentJson: unknown;
  createdAt: Date;
}

export interface ConversationSession {
  id: string;
  userId: string;
  mode: "lesson" | "free";
  lessonId: string | null;
  startedAt: Date;
  endedAt: Date | null;
  durationSeconds: number | null;
  avgScore: number | null;
  createdAt: Date;
}

export interface ConversationTurn {
  id: string;
  sessionId: string;
  speaker: "user" | "tutor";
  transcriptText: string;
  correctedText: string | null;
  errorTags: string[] | null;
  createdAt: Date;
}

export interface WritingSubmission {
  id: string;
  userId: string;
  prompt: string;
  originalText: string;
  correctedText: string;
  feedbackJson: unknown;
  createdAt: Date;
}

export interface ErrorPattern {
  id: string;
  userId: string;
  errorType: string;
  example: string | null;
  frequency: number;
  lastSeenAt: Date;
}
