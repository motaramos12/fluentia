"use client";

import { useState } from "react";

const WRITING_PROMPTS = [
  {
    id: "about-me",
    title: "Sobre Mim",
    level: "A1",
    prompt: "Escreve um parágrafo sobre ti. Inclui: nome, idade, país, profissão e um hobby.",
    minWords: 50,
    feedback:
      "Verifica se usaste: 'I am', 'I work as', 'I enjoy' corretamente. Prova adicionar mais detalhes!",
  },
  {
    id: "daily-routine",
    title: "Minha Rotina",
    level: "A1",
    prompt:
      "Descreve como é o teu dia típico. Que horas acordas? O que fazes de manhã? À tarde? À noite?",
    minWords: 60,
    feedback:
      "Bom! Tenta usar: 'In the morning', 'After lunch', 'Before bed' para melhorar a estrutura.",
  },
  {
    id: "favorite-food",
    title: "Comida Favorita",
    level: "A1",
    prompt:
      "Qual é o teu prato favorito? Onde costumas comê-lo? Por que te agrada tanto?",
    minWords: 50,
    feedback:
      "Excelente! Considera adicionar descrições: 'It tastes delicious', 'The ingredients are...'",
  },
  {
    id: "weekend-plans",
    title: "Planos para o Fim de Semana",
    level: "A2",
    prompt:
      "O que tens planeado fazer no próximo fim de semana? Vai com alguém? Que atividades?",
    minWords: 70,
    feedback:
      "Ótimo trabalho! Tenta usar 'will', 'going to' ou 'planning to' para falar do futuro.",
  },
  {
    id: "travel-experience",
    title: "Viagem Memorável",
    level: "A2",
    prompt:
      "Descreve uma viagem que fizeste. Quando foi? Para onde? O que viste? Qual foi o melhor momento?",
    minWords: 100,
    feedback:
      "Incrível! Para melhorar, usa mais past tense: 'I visited', 'It was', 'I enjoyed'.",
  },
  {
    id: "dream-job",
    title: "Emprego dos Sonhos",
    level: "B1",
    prompt:
      "Qual é o emprego dos teus sonhos? Que qualificações são necessárias? Por que te atrai essa profissão?",
    minWords: 100,
    feedback:
      "Bom! Agora tenta adicionar: 'I would like to', 'This job requires', 'I believe that'.",
  },
];

export default function WritePracticePage() {
  const [selectedPrompt, setSelectedPrompt] = useState<(typeof WRITING_PROMPTS)[0] | null>(null);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    const wordCount = text.trim().split(/\s+/).length;

    if (!selectedPrompt) return;

    if (wordCount < selectedPrompt.minWords) {
      alert(`Precisa de pelo menos ${selectedPrompt.minWords} palavras. Tens ${wordCount}.`);
      return;
    }

    // Calcular score simples
    let points = 0;
    if (wordCount >= selectedPrompt.minWords) points += 25;
    if (wordCount >= selectedPrompt.minWords * 1.5) points += 25;
    if (text.includes(".")) points += 20;
    if (text.match(/[A-Z]/g)?.length || 0 > 3) points += 20;
    if (text.toLowerCase().includes("i ") || text.includes("I'm")) points += 10;

    setScore(Math.min(points, 100));
    setSubmitted(true);
  };

  const handleReset = () => {
    setText("");
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            ✍️ Prática de Escrita
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Escolhe um tema e escreve sobre ele
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Prompts */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Temas
            </h2>
            <div className="space-y-2">
              {WRITING_PROMPTS.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => {
                    setSelectedPrompt(prompt);
                    setText("");
                    setSubmitted(false);
                  }}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedPrompt?.id === prompt.id
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-orange-300"
                  }`}
                >
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {prompt.title}
                  </div>
                  <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                    {prompt.level} • {prompt.minWords}+ palavras
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Editor */}
          <div className="lg:col-span-2">
            {selectedPrompt ? (
              <div className="space-y-6">
                {/* Tema */}
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
                  <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-3">
                    {selectedPrompt.title}
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 text-lg leading-relaxed">
                    {selectedPrompt.prompt}
                  </p>
                  <p className="text-sm text-orange-700 dark:text-orange-400 mt-4">
                    📝 Mínimo: {selectedPrompt.minWords} palavras
                  </p>
                </div>

                {/* Textarea */}
                {!submitted ? (
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Escreve aqui:
                    </label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Começa a escrever..."
                      className="w-full h-64 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none font-mono text-sm"
                    />

                    {/* Contador */}
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {text.trim().split(/\s+/).filter(Boolean).length}
                        </span>{" "}
                        / {selectedPrompt.minWords} palavras
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={text.trim().length === 0}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ✅ Submeter
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Resultados */
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          Resultado
                        </h3>
                        <div className="text-5xl font-bold text-orange-500">{score}%</div>
                      </div>

                      {/* Feedback */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                        <p className="text-blue-700 dark:text-blue-300">
                          💡 <strong>Feedback:</strong> {selectedPrompt.feedback}
                        </p>
                      </div>
                    </div>

                    {/* Texto Submetido */}
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        O que escreveste:
                      </p>
                      <p className="text-slate-900 dark:text-white whitespace-pre-wrap">
                        {text}
                      </p>
                    </div>

                    {/* Botões */}
                    <div className="flex gap-4">
                      <button
                        onClick={handleReset}
                        className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold py-2 px-6 rounded-lg transition-all"
                      >
                        Tentar de Novo
                      </button>
                      <button
                        onClick={() => setSelectedPrompt(null)}
                        className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
                      >
                        Escolher Outro Tema
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">✍️</div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Escolhe um tema à esquerda para começar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
