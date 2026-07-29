import {
  userProgress,
  moduleProgress,
  lessonProgress,
  exerciseResults,
  achievements,
  streakLog,
  vocabulary,
} from "./schema-progress";

// Tipos para type-safety
export interface UserProgressData {
  userId: string;
  currentLevel: string;
  totalXP: number;
  currentStreak: number;
  bestStreak: number;
  lastPracticeDate?: Date;
}

export interface ModuleProgressData {
  userId: string;
  moduleId: string;
  level: string;
  isCompleted: boolean;
  completionPercentage: number;
  xpEarned: number;
}

// ============ LEITURA ============

/**
 * Obtém o progresso geral do utilizador
 */
export async function getUserProgress(userId: string): Promise<UserProgressData | null> {
  // TODO: Implementar com Drizzle ORM quando DB estiver conectada
  // const result = await db.select().from(userProgress).where(eq(userProgress.userId, userId));
  return null;
}

/**
 * Obtém progresso de um módulo específico
 */
export async function getModuleProgress(userId: string, moduleId: string) {
  // TODO: Implementar
  return null;
}

/**
 * Obtém progresso de uma lição específica
 */
export async function getLessonProgress(userId: string, lessonId: string) {
  // TODO: Implementar
  return null;
}

/**
 * Obtém todas as lições completadas do utilizador
 */
export async function getCompletedLessons(userId: string) {
  // TODO: Implementar
  return [];
}

/**
 * Obtém estatísticas do utilizador
 */
export async function getUserStats(userId: string) {
  return {
    totalXP: 0,
    currentStreak: 0,
    bestStreak: 0,
    levelsCompleted: [],
    totalModulesCompleted: 0,
    totalLessonsCompleted: 0,
    averageScore: 0,
  };
}

/**
 * Obtém badges desbloqueados
 */
export async function getUserAchievements(userId: string) {
  // TODO: Implementar
  return [];
}

// ============ ATUALIZAÇÃO ============

/**
 * Atualiza XP do utilizador
 */
export async function addUserXP(userId: string, xpAmount: number) {
  // TODO: Implementar
  return { success: true, newTotalXP: 0 };
}

/**
 * Marca módulo como completado
 */
export async function completeModule(userId: string, moduleId: string, xpEarned: number) {
  // TODO: Implementar
  return { success: true };
}

/**
 * Marca lição como completada
 */
export async function completeLesson(
  userId: string,
  lessonId: string,
  moduleId: string,
  score: number,
  xpEarned: number
) {
  // TODO: Implementar
  return { success: true };
}

/**
 * Regista resultado de exercício
 */
export async function recordExerciseResult(
  userId: string,
  lessonId: string,
  exerciseId: string,
  exerciseType: string,
  userAnswer: string,
  correctAnswer: string,
  isCorrect: boolean,
  timeSpent: number
) {
  // TODO: Implementar
  return { success: true };
}

/**
 * Atualiza streak do utilizador
 */
export async function updateStreak(userId: string, practiceCompleted: boolean) {
  // TODO: Implementar
  return { currentStreak: 0, bestStreak: 0 };
}

/**
 * Desbloqueia uma badge/achievement
 */
export async function unlockAchievement(
  userId: string,
  badgeId: string,
  badgeTitle: string,
  badgeDescription: string,
  icon: string
) {
  // TODO: Implementar
  return { success: true };
}

/**
 * Regista palavra no vocabulário do utilizador
 */
export async function addToVocabulary(
  userId: string,
  word: string,
  translation: string,
  level: string,
  lessonId: string
) {
  // TODO: Implementar
  return { success: true };
}

/**
 * Atualiza nível de mestria de uma palavra
 */
export async function updateVocabularyMastery(userId: string, wordId: string, masteryLevel: number) {
  // TODO: Implementar
  return { success: true };
}

/**
 * Regista padrão de erro do utilizador
 */
export async function recordErrorPattern(
  userId: string,
  errorType: string,
  errorDescription: string
) {
  // TODO: Implementar
  return { success: true };
}

// ============ UTILITÁRIOS ============

/**
 * Calcula quando é o próximo nível desbloqueado
 */
export function getNextLevelThreshold(currentXP: number): {
  nextLevel: string;
  xpNeeded: number;
  progressPercentage: number;
} {
  // A1 = 0-500
  // A2 = 501-1200
  // B1 = 1201-2000
  // B2 = 2001+

  if (currentXP < 500) {
    return { nextLevel: "A1", xpNeeded: 500 - currentXP, progressPercentage: (currentXP / 500) * 100 };
  } else if (currentXP < 1200) {
    return {
      nextLevel: "A2",
      xpNeeded: 1200 - currentXP,
      progressPercentage: ((currentXP - 500) / 700) * 100,
    };
  } else if (currentXP < 2000) {
    return {
      nextLevel: "B1",
      xpNeeded: 2000 - currentXP,
      progressPercentage: ((currentXP - 1200) / 800) * 100,
    };
  } else {
    return { nextLevel: "B2", xpNeeded: 0, progressPercentage: 100 };
  }
}

/**
 * Determina se utilizador desbloqueou uma nova badge
 */
export function checkBadgeUnlock(stats: any): string[] {
  const unlockedBadges: string[] = [];

  // Badges baseadas em XP
  if (stats.totalXP >= 100) unlockedBadges.push("first-100-xp");
  if (stats.totalXP >= 500) unlockedBadges.push("first-500-xp");
  if (stats.totalXP >= 1000) unlockedBadges.push("millionaire");

  // Badges baseadas em streak
  if (stats.currentStreak >= 5) unlockedBadges.push("5-day-streak");
  if (stats.currentStreak >= 30) unlockedBadges.push("monthly-warrior");

  // Badges baseadas em módulos completados
  if (stats.totalModulesCompleted >= 1) unlockedBadges.push("first-module");
  if (stats.totalModulesCompleted >= 5) unlockedBadges.push("half-way-a1");
  if (stats.totalModulesCompleted >= 16) unlockedBadges.push("a1-master");

  return unlockedBadges;
}

/**
 * Calcula percentage de completion de um nível
 */
export function getLevelCompletion(
  level: string,
  modulesCompleted: number,
  totalModulesInLevel: number = 8
): number {
  return Math.round((modulesCompleted / totalModulesInLevel) * 100);
}
