"use client";

import { useState } from "react";

export default function WritePage() {
  const [text, setText] = useState("");

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
        ✍️ Prática de Escrita
      </h1>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
            Tema: Descreve o teu dia
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Escreve um parágrafo sobre o teu dia em inglês. O assistente vai corrigir e dar feedback.
          </p>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escreve aqui em inglês..."
          className="w-full h-40 p-4 border-2 border-slate-200 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:border-teal-500 outline-none resize-none"
        />

        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          {text.length} caracteres
        </div>

        <button className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors">
          ✨ Corrigir com IA
        </button>

        {/* Feedback placeholder */}
        {text.length > 10 && (
          <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              Feedback
            </h3>
            <p className="text-green-600 dark:text-green-300 text-sm">
              Clica em "Corrigir com IA" para receber feedback detalhado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
