"use client";

import { useRouter } from "next/navigation";

export default function LessonsPage() {
  const router = useRouter();

  const lessons = [
    {
      id: 1,
      title: "Pedir Direções",
      level: "B1",
      progress: 65,
      description: "Aprende vocabulário e frases para pedir direções.",
    },
    {
      id: 2,
      title: "Compras",
      level: "A2",
      progress: 100,
      description: "Pratica diálogos no contexto de compras.",
    },
    {
      id: 3,
      title: "Restaurante",
      level: "A1",
      progress: 45,
      description: "Aprende a fazer pedidos e ler um cardápio.",
    },
    {
      id: 4,
      title: "Viagem",
      level: "B2",
      progress: 0,
      description: "Conversa avançada sobre viagens e planeamento.",
    },
  ];

  const handleStart = (lessonId: number) => {
    // Navega para a página de prática de fala com a lição selecionada
    router.push(`/practice/speak?lesson=${lessonId}`);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
        📚 Lições
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleStart(lesson.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {lesson.title}
              </h3>
              <span className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-full text-sm font-medium">
                {lesson.level}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {lesson.description}
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600 dark:text-slate-400">
                  Progresso
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {lesson.progress}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-teal-500 h-full rounded-full transition-all"
                  style={{ width: `${lesson.progress}%` }}
                />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStart(lesson.id);
              }}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              {lesson.progress === 100 ? "Repetir" : "Começar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
