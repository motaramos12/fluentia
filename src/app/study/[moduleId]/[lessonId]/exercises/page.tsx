"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import curriculumA1 from "@/lib/curriculum/curriculum-a1";

export default function ExercisesPage({
  params,
}: {
  params: { moduleId: string; lessonId: string };
}) {
  const router = useRouter();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Find lesson
  const module = curriculumA1.modules.find((m) => m.id === params.moduleId);
  const lesson = module?.lessons.find((l) => l.id === params.lessonId);

  if (!lesson || !module) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Exercícios não encontrados
        </h1>
      </div>
    );
  }

  const exercises = lesson.exercises;
  const currentExercise = exercises[currentExerciseIndex];
  const isLastExercise = currentExerciseIndex === exercises.length - 1;

  const handleAnswer = (value: string | string[]) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentExercise.id]: value,
    }));
  };

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      // Calcular score
      let correctCount = 0;
      exercises.forEach((exercise) => {
        const userAnswer = userAnswers[exercise.id];
        if (exercise.type === "multiple-choice") {
          const selectedOption = exercise.options.find(
            (opt) => opt.text === userAnswer
          );
          if (selectedOption?.correct) correctCount++;
        } else if (exercise.type === "translation" || exercise.type === "fill-the-blank") {
          if (
            userAnswer?.toString().toLowerCase().trim() ===
            exercise.answer.toLowerCase().trim()
          ) {
            correctCount++;
          }
        } else if (exercise.type === "listening") {
          const selectedOption = exercise.options.find(
            (opt) => opt.text === userAnswer
          );
          if (selectedOption?.correct) correctCount++;
        }
      });

      setScore(Math.round((correctCount / exercises.length) * 100));
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  if (showResults) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-12 text-white text-center mb-8">
          <div className="text-8xl mb-4">
            {score >= 80 ? "🎉" : score >= 60 ? "👍" : "💪"}
          </div>
          <h1 className="text-4xl font-bold mb-4">
            {score >= 80
              ? "Excelente! 🚀"
              : score >= 60
              ? "Bom trabalho! 📚"
              : "Continua a praticar! 💡"}
          </h1>
          <div className="text-6xl font-bold mb-4">{score}%</div>
          <p className="text-xl opacity-90 mb-8">
            {Math.round((Object.keys(userAnswers).length / exercises.length) * 100)}% das questões
            respondidas
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
              <div className="text-3xl font-bold">
                {Object.keys(userAnswers).filter((id) => {
                  const exercise = exercises.find((e) => e.id === id);
                  const userAnswer = userAnswers[id];
                  if (exercise?.type === "multiple-choice") {
                    return exercise.options.find((opt) => opt.text === userAnswer)?.correct;
                  }
                  return false;
                }).length}
              </div>
              <div className="text-sm">Corretas</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
              <div className="text-3xl font-bold">{exercises.length}</div>
              <div className="text-sm">Total</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
              <div className="text-3xl font-bold">+{Math.round(score / 10) * 10} XP</div>
              <div className="text-sm">Ganho</div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => router.push(`/study/${module.id}/${lesson.id}`)}
              className="flex-1 bg-white text-teal-600 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              📖 Ver Aula de Novo
            </button>
            <button
              onClick={() => router.push("/study")}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-lg transition-colors backdrop-blur"
            >
              🏠 Voltar ao Estudo
            </button>
          </div>
        </div>

        {/* Análise de Respostas */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            📊 Análise das Respostas
          </h2>

          <div className="space-y-4">
            {exercises.map((exercise, idx) => {
              const userAnswer = userAnswers[exercise.id];
              let isCorrect = false;

              if (exercise.type === "multiple-choice" || exercise.type === "listening") {
                isCorrect = exercise.options.find((opt) => opt.text === userAnswer)
                  ?.correct;
              } else if (
                exercise.type === "translation" ||
                exercise.type === "fill-the-blank"
              ) {
                isCorrect =
                  userAnswer?.toString().toLowerCase().trim() ===
                  exercise.answer.toLowerCase().trim();
              }

              return (
                <div
                  key={exercise.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    isCorrect
                      ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                      : "bg-red-50 dark:bg-red-900/20 border-red-500"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">
                      {isCorrect ? "✅" : "❌"}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">
                        {idx + 1}. {exercise.question}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Tua resposta: <span className="font-mono">{userAnswer}</span>
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          Resposta correta:{" "}
                          <span className="font-mono text-green-700 dark:text-green-400">
                            {exercise.answer}
                          </span>
                        </p>
                      )}
                      <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                        {exercise.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-teal-600 hover:text-teal-700 font-semibold mb-4"
        >
          ← Voltar
        </button>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Exercícios: {lesson.title}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-slate-600 dark:text-slate-400">
              Pergunta {currentExerciseIndex + 1} de {exercises.length}
            </p>
            <div className="w-48 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-cyan-500 h-full transition-all"
                style={{
                  width: `${((currentExerciseIndex + 1) / exercises.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercício Atual */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="mb-6">
          <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {currentExercise.type === "multiple-choice" && "Múltipla Escolha"}
            {currentExercise.type === "translation" && "Tradução"}
            {currentExercise.type === "fill-the-blank" && "Preencher Espaço"}
            {currentExercise.type === "listening" && "Listening"}
          </span>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {currentExercise.question}
          </h2>
        </div>

        {/* Rendering by Type */}
        {currentExercise.type === "multiple-choice" && (
          <div className="space-y-3">
            {currentExercise.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.text)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all font-semibold ${
                  userAnswers[currentExercise.id] === option.text
                    ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:border-teal-300 dark:hover:border-teal-600"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}

        {(currentExercise.type === "translation" ||
          currentExercise.type === "fill-the-blank") && (
          <div>
            <input
              type="text"
              value={userAnswers[currentExercise.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentExercise.hint || "Escreve a resposta..."}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-colors text-lg font-semibold"
            />
          </div>
        )}

        {currentExercise.type === "listening" && (
          <div>
            <div className="bg-slate-100 dark:bg-slate-700/50 rounded-lg p-8 text-center mb-6">
              <button className="text-6xl mb-4 hover:scale-110 transition-transform">
                🔊
              </button>
              <p className="text-slate-600 dark:text-slate-400">
                Clica no botão para ouvir o áudio
              </p>
            </div>

            <div className="space-y-3">
              {currentExercise.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.text)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all font-semibold ${
                    userAnswers[currentExercise.id] === option.text
                      ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:border-teal-300 dark:hover:border-teal-600"
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dica */}
        {(currentExercise.type === "translation" ||
          currentExercise.type === "fill-the-blank") &&
          currentExercise.hint && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                💡 <strong>Dica:</strong> {currentExercise.hint}
              </p>
            </div>
          )}
      </div>

      {/* Navegação */}
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentExerciseIndex === 0}
          className="flex-1 px-6 py-3 rounded-lg font-semibold bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Anterior
        </button>

        <button
          onClick={handleNext}
          disabled={!userAnswers[currentExercise.id]}
          className="flex-1 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isLastExercise ? "✅ Concluir" : "Próximo →"}
        </button>
      </div>
    </div>
  );
}
