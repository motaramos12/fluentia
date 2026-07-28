"use client";

export function LevelProgress() {
  const currentLevel = "B1";
  const progress = 65;

  const levels = ["A1", "A2", "B1", "B2"];
  const currentLevelIndex = levels.indexOf(currentLevel);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
        Nível: <span className="text-teal-500">{currentLevel}</span>
      </h3>

      {/* Level Indicator */}
      <div className="flex gap-2 mb-6">
        {levels.map((level, index) => (
          <div
            key={level}
            className={`flex-1 h-2 rounded-full transition-colors ${
              index <= currentLevelIndex
                ? "bg-teal-500"
                : "bg-slate-200 dark:bg-slate-700"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-600 dark:text-slate-400">Progresso no nível</span>
          <span className="font-semibold text-slate-900 dark:text-white">{progress}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-teal-500 h-full rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        Faltam {100 - progress}% para B2 🎯
      </p>
    </div>
  );
}
