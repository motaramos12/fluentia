"use client";

import { useState } from "react";

export default function WritePage() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState<{
    corrected: string;
    corrections: Array<{
      original: string;
      suggested: string;
      reason: string;
    }>;
    score: number;
  } | null>(null);

  const handleCorrect = () => {
    if (text.trim().length === 0) return;

    // Simulated feedback
    setFeedback({
      corrected:
        "I had a very productive day today. I woke up early and started working on my English lessons.",
      corrections: [
        {
          original: "Tive um dia muito produtivo",
          suggested: "I had a very productive day",
          reason: "Use past tense 'had' instead of 'tive'",
        },
        {
          original: "comecei a trabalhar",
          suggested: "I started working",
          reason: "Use 'started' for past actions",
        },
      ],
      score: 78,
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
        ✍️ Prática de Escrita
      </h1>

      <div className="space-y-6">
        {/* Input Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Tema: Descreve o teu dia
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Escreve um parágrafo sobre o teu dia em inglês. A IA vai corrigir
              e dar feedback gramatical.
            </p>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escreve aqui em inglês..."
            className="w-full h-40 p-4 border-2 border-slate-200 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:border-teal-500 outline-none resize-none"
          />

          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {text.length} caracteres
            </span>
            <button
              onClick={handleCorrect}
              disabled={text.trim().length === 0}
              className="bg-teal-500 hover:bg-teal-600 disabled:bg-slate-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              ✨ Corrigir com IA
            </button>
          </div>
        </div>

        {/* Feedback Section */}
        {feedback && (
          <div className="space-y-6">
            {/* Score Card */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-center">
                <p className="text-sm font-medium mb-2">Fluência</p>
                <p className="text-5xl font-bold">{feedback.score}%</p>
                <p className="text-sm mt-2 text-orange-100">
                  Bom! Continue a praticar.
                </p>
              </div>
            </div>

            {/* Corrected Text */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                ✏️ Texto Corrigido
              </h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-slate-900 dark:text-white">
                  {feedback.corrected}
                </p>
              </div>
            </div>

            {/* Corrections */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                📋 Correções
              </h3>
              <div className="space-y-4">
                {feedback.corrections.map((correction, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded"
                  >
                    <p className="text-sm mb-2">
                      <strong className="text-slate-900 dark:text-white">
                        Original:
                      </strong>{" "}
                      <span className="line-through text-red-600">
                        {correction.original}
                      </span>
                    </p>
                    <p className="text-sm mb-2">
                      <strong className="text-slate-900 dark:text-white">
                        Sugestão:
                      </strong>{" "}
                      <span className="text-green-600 dark:text-green-400">
                        {correction.suggested}
                      </span>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Explicação:</strong> {correction.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
