import { StreakCard } from "@/components/dashboard/StreakCard";
import { LevelProgress } from "@/components/dashboard/LevelProgress";
import { ErrorTrendsChart } from "@/components/dashboard/ErrorTrendsChart";
import { NextLessonCard } from "@/components/dashboard/NextLessonCard";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Bem-vindo de volta! 👋
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Continua o teu progresso em inglês
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Streak & Level */}
          <div className="lg:col-span-1 space-y-6">
            <StreakCard />
            <LevelProgress />
          </div>

          {/* Right Column - Next Lesson & Actions */}
          <div className="lg:col-span-2 space-y-6">
            <NextLessonCard />

            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Prática Rápida
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  asChild
                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-xl h-12 font-medium"
                >
                  <a href="/practice/speak">
                    🎤 Falar Livremente
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-12 font-medium"
                >
                  <a href="/practice/write">
                    ✍️ Escrever
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Error Trends */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
            Tendência de Erros
          </h3>
          <ErrorTrendsChart />
        </div>
      </div>
    </div>
  );
}
