"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import curriculumA1 from "@/lib/curriculum/curriculum-a1";

export default function StudyPage() {
  const router = useRouter();
  const [selectedLevel] = useState("A1");
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const curriculum = curriculumA1;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header com Professor */}
      <div className="mb-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
        <div className="flex items-start gap-6">
          {/* Avatar do Professor */}
          <div className="text-6xl bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
            👨‍🏫
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">Bem-vindo ao Professor!</h1>
            <p className="text-lg opacity-90 mb-4">
              Vou ensinar-te inglês passo a passo, do zero à fluência.
            </p>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
              <p className="text-sm">
                📚 <strong>{curriculum.modules.length} módulos</strong> estruturados •
                ✅ Aprende gramática, vocabulário e conversação •
                🎯 Exercícios para cada conceito
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de Níveis (para futuro) */}
      <div className="flex gap-4 mb-8">
        {["A1", "A2", "B1", "B2"].map((level) => (
          <button
            key={level}
            onClick={() => console.log(`Level ${level}`)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedLevel === level
                ? "bg-teal-500 text-white"
                : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Módulos */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          📖 {curriculum.title}
        </h2>

        {curriculum.modules.map((module) => (
          <div
            key={module.id}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
          >
            {/* Header do Módulo */}
            <button
              onClick={() =>
                setExpandedModule(
                  expandedModule === module.id ? null : module.id
                )
              }
              className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">
                      {module.order === 1 && "🎤"}
                      {module.order === 2 && "📌"}
                      {module.order === 3 && "📋"}
                      {module.order === 4 && "⚡"}
                      {module.order === 5 && "👨‍👩‍👧"}
                      {module.order === 6 && "🎯"}
                      {module.order === 7 && "🔢"}
                      {module.order === 8 && "💬"}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Módulo {module.order}: {module.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                      {module.xpReward} XP
                    </div>
                    {!module.unlocked && (
                      <div className="text-xs text-slate-500">Bloqueado</div>
                    )}
                    {module.unlocked && (
                      <div className="text-xs text-green-600">Desbloqueado</div>
                    )}
                  </div>

                  <div
                    className={`text-2xl transition-transform ${
                      expandedModule === module.id ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </div>
                </div>
              </div>
            </button>

            {/* Conteúdo Expandido */}
            {expandedModule === module.id && (
              <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-700/30 space-y-4">
                {/* Lições */}
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {lesson.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          ⏱️ {lesson.duration} minutos • {lesson.exercises.length} exercícios
                        </p>
                      </div>
                    </div>

                    {/* Preview do Conteúdo */}
                    <div className="bg-slate-100 dark:bg-slate-700/50 rounded p-3 mb-3 text-sm text-slate-700 dark:text-slate-300 line-clamp-3">
                      <p className="font-mono text-xs">
                        {lesson.content.intro}
                      </p>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          router.push(`/study/${module.id}/${lesson.id}`)
                        }
                        className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        📚 Ver Aula
                      </button>
                      <button
                        onClick={() =>
                          router.push(
                            `/study/${module.id}/${lesson.id}/exercises`
                          )
                        }
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        ✏️ Exercícios
                      </button>
                    </div>
                  </div>
                ))}

                {/* Botão de Começar Módulo */}
                {module.unlocked && (
                  <button
                    onClick={() =>
                      router.push(
                        `/study/${module.id}/${module.lessons[0].id}`
                      )
                    }
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 rounded-lg transition-all"
                  >
                    🚀 Começar Módulo
                  </button>
                )}

                {!module.unlocked && (
                  <div className="w-full bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300 font-bold py-3 rounded-lg text-center cursor-not-allowed opacity-50">
                    🔒 Completa o módulo anterior para desbloquear
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer com Info */}
      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          💡 <strong>Dica:</strong> Completa cada módulo na ordem para desbloquear o próximo.
          Cada módulo tem explicações detalhadas, exemplos com áudio e exercícios para praticar.
        </p>
      </div>
    </div>
  );
}
