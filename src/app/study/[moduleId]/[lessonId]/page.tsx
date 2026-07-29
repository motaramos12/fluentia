"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import curriculumA1 from "@/lib/curriculum/curriculum-a1";

export default function LessonPage({
  params,
}: {
  params: { moduleId: string; lessonId: string };
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState(0);

  // Find lesson
  const module = curriculumA1.modules.find((m) => m.id === params.moduleId);
  const lesson = module?.lessons.find((l) => l.id === params.lessonId);

  if (!lesson || !module) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Aula não encontrada
        </h1>
      </div>
    );
  }

  const moduleIndex = curriculumA1.modules.indexOf(module);
  const lessonIndex = module.lessons.indexOf(lesson);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header Pegajoso */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2"
          >
            ← Voltar
          </button>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {module.title} → {lesson.title}
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            ⏱️ {lesson.duration} min
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all"
            style={{ width: `${Math.min(scrollPosition * 2, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Conteúdo da Aula */}
      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Professor Avatar */}
        <div className="mb-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white text-center">
          <div className="text-8xl mb-4">👨‍🏫</div>
          <h1 className="text-4xl font-bold mb-3">{lesson.title}</h1>
          <p className="text-lg opacity-90">{lesson.content.intro}</p>
        </div>

        {/* Explicação */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            📖 Explicação
          </h2>

          <div className="prose dark:prose-invert max-w-none">
            <pre className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap text-slate-900 dark:text-slate-100 font-mono">
              {lesson.content.explanation}
            </pre>
          </div>
        </div>

        {/* Exemplos */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            💡 Exemplos
          </h2>

          <div className="grid gap-4">
            {lesson.content.examples.map((example, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-700 border-l-4 border-teal-500 p-4 rounded"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">
                      {example.english}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {example.portuguese}
                    </p>
                    <button className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 hover:dark:text-teal-300 font-semibold flex items-center gap-1">
                      🔊 Ouvir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vocabulário Chave */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            📚 Vocabulário Chave
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.content.keyVocabulary.map((vocab, idx) => (
              <div
                key={idx}
                className="bg-orange-50 dark:bg-slate-700/50 p-4 rounded-lg border border-orange-200 dark:border-slate-600"
              >
                <div className="font-semibold text-slate-900 dark:text-white">
                  {vocab.word}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {vocab.meaning}
                </div>
                <div className="text-xs text-slate-500 mt-1 italic">
                  ({vocab.partOfSpeech})
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Próxima Ação */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-3">✅ Pronto para praticar?</h3>
          <p className="mb-6 text-lg">
            Agora faz os exercícios para consolidar o que aprendeste.
          </p>
          <button
            onClick={() =>
              router.push(
                `/study/${module.id}/${lesson.id}/exercises`
              )
            }
            className="w-full bg-white text-teal-600 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors"
          >
            🎯 Ir para Exercícios
          </button>
        </div>

        {/* Navegação entre Lições */}
        <div className="flex gap-4 mt-12 mb-8">
          {lessonIndex > 0 && (
            <button
              onClick={() => {
                const prevLesson = module.lessons[lessonIndex - 1];
                router.push(
                  `/study/${module.id}/${prevLesson.id}`
                );
              }}
              className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold py-3 rounded-lg transition-colors"
            >
              ← Aula Anterior
            </button>
          )}

          {lessonIndex < module.lessons.length - 1 && (
            <button
              onClick={() => {
                const nextLesson = module.lessons[lessonIndex + 1];
                router.push(
                  `/study/${module.id}/${nextLesson.id}`
                );
              }}
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Próxima Aula →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
