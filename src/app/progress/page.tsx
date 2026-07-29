"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Mock data - em produção virá do banco de dados
const mockUserStats = {
  totalXP: 450,
  currentLevel: "A1",
  currentStreak: 12,
  bestStreak: 45,
  modulesCompleted: 4,
  lessonsCompleted: 8,
  exercisesCompleted: 32,
  averageScore: 82,
  achievements: [
    { id: "first-lesson", title: "Primeira Lição", icon: "🎯", unlockedDate: "2024-01-15" },
    { id: "5-day-streak", title: "Semana de Prática", icon: "🔥", unlockedDate: "2024-01-20" },
    { id: "100-xp", title: "Centenário", icon: "💯", unlockedDate: "2024-01-25" },
  ],
};

export default function ProgressPage() {
  const [selectedLevel] = useState("A1");

  // Cálculo de progresso para o próximo nível
  const xpThreshold = { A1: 500, A2: 1200, B1: 2000, B2: 3000 };
  const currentThreshold = xpThreshold[selectedLevel as keyof typeof xpThreshold];
  const previousThreshold = selectedLevel === "A1" ? 0 : xpThreshold[selectedLevel === "A2" ? "A1" : selectedLevel === "B1" ? "A2" : "B1"];

  const levelProgress = Math.min(
    100,
    ((mockUserStats.totalXP - previousThreshold) / (currentThreshold - previousThreshold)) * 100
  );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">📊 Meu Progresso</h1>
        <p className="text-slate-600 dark:text-slate-400">Acompanha tua evolução no Fluentia</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* XP Card */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white shadow-lg">
          <div className="text-4xl font-bold mb-2">{mockUserStats.totalXP.toLocaleString()}</div>
          <div className="text-sm opacity-90">XP Total</div>
          <div className="text-xs mt-2 opacity-75">Próximo: {currentThreshold - mockUserStats.totalXP} XP</div>
        </div>

        {/* Streak Card */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-4xl font-bold">{mockUserStats.currentStreak}</div>
            <span className="text-3xl">🔥</span>
          </div>
          <div className="text-sm opacity-90">Dias de Prática</div>
          <div className="text-xs mt-2 opacity-75">Melhor: {mockUserStats.bestStreak} dias</div>
        </div>

        {/* Lessons Card */}
        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg">
          <div className="text-4xl font-bold mb-2">{mockUserStats.lessonsCompleted}</div>
          <div className="text-sm opacity-90">Lições Completadas</div>
          <div className="text-xs mt-2 opacity-75">{mockUserStats.modulesCompleted} módulos</div>
        </div>

        {/* Average Score Card */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-white shadow-lg">
          <div className="text-4xl font-bold mb-2">{mockUserStats.averageScore}%</div>
          <div className="text-sm opacity-90">Média de Acertos</div>
          <div className="text-xs mt-2 opacity-75">{mockUserStats.exercisesCompleted} exercícios</div>
        </div>
      </div>

      {/* Level Progress Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">📈 Progresso do Nível</h2>

        <div className="space-y-8">
          {["A1", "A2", "B1", "B2"].map((level) => {
            const isCurrentLevel = level === selectedLevel;
            const levelXP = { A1: 500, A2: 1200, B1: 2000, B2: 3000 }[level as keyof typeof levelXP];
            const prevLevelXP =
              level === "A1" ? 0 : { A1: 500, A2: 1200, B1: 2000 }[level === "A2" ? "A1" : level === "B1" ? "A2" : "B1"];

            const rangeProgress = Math.min(
              100,
              ((mockUserStats.totalXP - prevLevelXP) / (levelXP - prevLevelXP)) * 100
            );

            return (
              <div key={level}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-bold ${isCurrentLevel ? "text-teal-500" : "text-slate-400"}`}>
                      {level}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {mockUserStats.totalXP >= levelXP ? "✅ Completado" : "🔄 Em Progresso"}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {mockUserStats.totalXP >= prevLevelXP ? `${Math.min(100, rangeProgress).toFixed(0)}%` : "0%"}
                  </span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isCurrentLevel
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500"
                        : "bg-gradient-to-r from-slate-400 to-slate-500"
                    }`}
                    style={{
                      width: `${mockUserStats.totalXP >= prevLevelXP ? Math.min(100, rangeProgress) : 0}%`,
                    }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-2">
                  <span>{prevLevelXP} XP</span>
                  <span>{levelXP} XP</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">🏆 Conquistas Desbloqueadas</h2>

        {mockUserStats.achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockUserStats.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-white">{achievement.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Desbloqueado em {new Date(achievement.unlockedDate).toLocaleDateString("pt-PT")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <p>Nenhuma conquista desbloqueada ainda. Continua a praticar! 💪</p>
          </div>
        )}
      </div>

      {/* Locked Badges Preview */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">🔒 Próximas Conquistas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "⭐", title: "500 XP", desc: "Alcança 500 XP" },
            { icon: "🚀", title: "A2 Master", desc: "Completa nível A2" },
            { icon: "📚", title: "10 Lições", desc: "Completa 10 lições" },
            { icon: "💎", title: "Mês Completo", desc: "30 dias de streak" },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="bg-slate-100 dark:bg-slate-700/50 rounded-lg p-4 text-center opacity-60"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">{badge.title}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
