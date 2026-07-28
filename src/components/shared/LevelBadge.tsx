export function LevelBadge({ level }: { level: string }) {
  const levelColors = {
    A1: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
    A2: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200",
    B1: "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200",
    B2: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200",
  };

  const color = levelColors[level as keyof typeof levelColors] || levelColors.A1;

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
      Nível {level}
    </span>
  );
}
