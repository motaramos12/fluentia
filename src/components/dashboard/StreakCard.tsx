"use client";

export function StreakCard() {
  const streakCount = 12;
  const longestStreak = 45;

  return (
    <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Streak Atual</h3>
        <span className="text-4xl">🔥</span>
      </div>

      <div className="mb-6">
        <p className="text-5xl font-bold">{streakCount}</p>
        <p className="text-orange-100 text-sm mt-1">dias consecutivos</p>
      </div>

      <div className="bg-white/20 rounded-lg p-4">
        <p className="text-orange-100 text-sm mb-1">Melhor streak</p>
        <p className="text-2xl font-bold">{longestStreak} dias</p>
      </div>
    </div>
  );
}
