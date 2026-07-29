"use client";

import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";

export default function LessonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const pathname = usePathname();

  const lessonId = useMemo(() => {
    if (params?.id) {
      return parseInt(params.id);
    }
    const match = pathname.match(/\/lessons\/(\d+)/);
    return match ? parseInt(match[1]) : NaN;
  }, [params, pathname]);

  const lessons: Record<
    number,
    {
      title: string;
      level: string;
      description: string;
      objectives: string[];
      vocabulary: Array<{ word: string; meaning: string }>;
      phrases: Array<{ phrase: string; translation: string }>;
    }
  > = {
    1: {
      title: "Pedir Direções",
      level: "B1",
      description: "Aprende como pedir e dar direções em contextos reais.",
      objectives: [
        "Pedir direções de forma clara e educada",
        "Compreender indicações de direção",
        "Usar preposições de lugar corretamente",
      ],
      vocabulary: [
        { word: "Turn left", meaning: "Vira à esquerda" },
        { word: "Intersection", meaning: "Cruzamento" },
        { word: "Straight ahead", meaning: "Em frente" },
        { word: "Traffic light", meaning: "Semáforo" },
      ],
      phrases: [
        {
          phrase: "Could you tell me where the station is?",
          translation: "Podes dizer-me onde fica a estação?",
        },
        {
          phrase: "I'm looking for the nearest café",
          translation: "Estou à procura do café mais perto",
        },
        {
          phrase: "Is it far from here?",
          translation: "Fica longe daqui?",
        },
      ],
    },
    2: {
      title: "Compras",
      level: "A2",
      description: "Conversa prática para compras em lojas e mercados.",
      objectives: [
        "Pedir ajuda na loja",
        "Negociar preços",
        "Pagar e receber troco",
      ],
      vocabulary: [
        { word: "How much does it cost?", meaning: "Quanto custa?" },
        { word: "Discount", meaning: "Desconto" },
        { word: "Checkout", meaning: "Caixa" },
      ],
      phrases: [
        { phrase: "Do you have this in a different size?", translation: "Têm este noutro tamanho?" },
        {
          phrase: "What's the total?",
          translation: "Qual é o total?",
        },
      ],
    },
    3: {
      title: "Restaurante",
      level: "A1",
      description: "Aprende a fazer pedidos e interagir num restaurante.",
      objectives: [
        "Fazer reservas",
        "Pedir pratos",
        "Fazer reclamações educadamente",
      ],
      vocabulary: [
        { word: "Menu", meaning: "Ementa" },
        { word: "Appetizer", meaning: "Entrada" },
        { word: "Main course", meaning: "Prato principal" },
      ],
      phrases: [
        {
          phrase: "A table for two, please",
          translation: "Uma mesa para dois, por favor",
        },
        {
          phrase: "What do you recommend?",
          translation: "O que me recomendas?",
        },
      ],
    },
    4: {
      title: "Viagem",
      level: "B2",
      description: "Conversas avançadas sobre viagens, destinos e planeamento.",
      objectives: [
        "Descrever viagens",
        "Discutir experiências de viagem",
        "Planear itinerários",
      ],
      vocabulary: [
        { word: "Itinerary", meaning: "Itinerário" },
        { word: "Accommodation", meaning: "Alojamento" },
        { word: "Tourist attraction", meaning: "Atração turística" },
      ],
      phrases: [
        {
          phrase: "I would love to visit that destination",
          translation: "Gostaria muito de visitar esse destino",
        },
        {
          phrase: "What was the most memorable part of your trip?",
          translation: "Qual foi a parte mais memorável da tua viagem?",
        },
      ],
    },
  };

  const lesson = lessons[lessonId];

  if (!lesson) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Lição não encontrada
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          ID: {params.id} (convertido para: {lessonId})
        </p>
        <p className="text-sm text-slate-500 mt-4">IDs válidas: 1, 2, 3, 4</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-teal-500 hover:text-teal-600 font-semibold mb-4"
        >
          ← Voltar
        </button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {lesson.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {lesson.description}
            </p>
          </div>
          <span className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-4 py-2 rounded-full font-semibold">
            {lesson.level}
          </span>
        </div>
      </div>

      {/* Objectives */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          🎯 Objetivos
        </h2>
        <ul className="space-y-2">
          {lesson.objectives.map((obj, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
            >
              <span className="text-teal-500 font-bold">✓</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Vocabulary */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          📝 Vocabulário
        </h2>
        <div className="space-y-3">
          {lesson.vocabulary.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg"
            >
              <p className="font-semibold text-slate-900 dark:text-white">
                {item.word}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Phrases */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          💬 Frases Chave
        </h2>
        <div className="space-y-3">
          {lesson.phrases.map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-teal-500 bg-teal-50 dark:bg-teal-900/20 p-4 rounded"
            >
              <p className="font-semibold text-slate-900 dark:text-white mb-1">
                {item.phrase}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.translation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Start Practice Button */}
      <button
        onClick={() => router.push(`/practice/speak?lesson=${lessonId}`)}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-xl text-lg transition-colors"
      >
        🎤 Iniciar Prática de Fala
      </button>
    </div>
  );
}
