"use client";

import { useState, useRef } from "react";
import { useSpeech } from "@/lib/hooks/useSpeech";

const SPEAKING_TOPICS = [
  {
    id: "greetings",
    title: "Cumprimentos",
    level: "A1",
    description: "Aprende a cumprimentar em diferentes situações",
    prompt: "Olá! Como te chamas? De onde és?",
    example: "Hello! My name is John. I'm from Portugal.",
  },
  {
    id: "daily-routine",
    title: "Rotina Diária",
    level: "A1",
    description: "Fala sobre as tuas atividades diárias",
    prompt: "O que fazes normalmente durante o dia?",
    example: "I wake up at 7 AM. I eat breakfast, then I go to work.",
  },
  {
    id: "hobbies",
    title: "Hobbies",
    level: "A1",
    description: "Descreve os teus hobbies e interesses",
    prompt: "Quais são os teus hobbies favoritos?",
    example: "I enjoy reading, playing football, and watching movies.",
  },
  {
    id: "food",
    title: "Comida",
    level: "A2",
    description: "Conversa sobre comida e restaurantes",
    prompt: "Qual é a tua comida favorita? Por quê?",
    example: "My favorite food is pasta. I love Italian cuisine.",
  },
  {
    id: "travel",
    title: "Viagens",
    level: "A2",
    description: "Fala sobre viagens e destinos",
    prompt: "Qual foi o teu último destino de férias?",
    example: "I went to Spain last summer. It was amazing!",
  },
];

export default function SpeakPracticePage() {
  const [selectedTopic, setSelectedTopic] = useState<typeof SPEAKING_TOPICS[0] | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState("");
  const recognitionRef = useRef<any>(null);
  const { speak, isPlaying } = useSpeech();

  const startRecording = () => {
    if (!selectedTopic) return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback("❌ Web Speech API não suportado no teu navegador.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.continuous = true;

    recognitionRef.current.onstart = () => {
      setIsRecording(true);
      setTranscript("");
      setFeedback("");
    };

    recognitionRef.current.onresult = (event: any) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + " " + transcript);
        } else {
          interim += transcript;
        }
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      setFeedback(`❌ Erro: ${event.error}`);
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
      if (transcript) {
        setFeedback("✅ Gravação concluída! Bom trabalho!");
      }
    };

    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handlePlayPrompt = (text: string) => {
    speak(text, "en-US");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            🎤 Prática de Fala
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Escolhe um tópico e pratica a tua pronúncia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tópicos */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Tópicos
            </h2>
            <div className="space-y-2">
              {SPEAKING_TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setTranscript("");
                    setFeedback("");
                  }}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedTopic?.id === topic.id
                      ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-300"
                  }`}
                >
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {topic.title}
                  </div>
                  <div className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                    {topic.level}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Prática */}
          <div className="lg:col-span-2">
            {selectedTopic ? (
              <div className="space-y-6">
                {/* Card Tópico */}
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedTopic.title}</h3>
                  <p className="opacity-90 mb-6">{selectedTopic.description}</p>

                  {/* Prompt */}
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
                    <p className="text-sm opacity-75 mb-2">Tópico para conversação:</p>
                    <p className="text-lg font-semibold mb-4">{selectedTopic.prompt}</p>
                    <button
                      onClick={() => handlePlayPrompt(selectedTopic.prompt)}
                      disabled={isPlaying}
                      className="flex items-center gap-2 text-white hover:bg-white/20 px-3 py-2 rounded transition-all disabled:opacity-50"
                    >
                      <span className="text-xl">🔊</span>
                      {isPlaying ? "Tocando..." : "Ouvir"}
                    </button>
                  </div>

                  {/* Exemplo */}
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <p className="text-sm opacity-75 mb-2">Exemplo:</p>
                    <p className="italic opacity-90">{selectedTopic.example}</p>
                  </div>
                </div>

                {/* Gravação */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Grava a tua resposta
                  </h3>

                  {/* Botão Gravar */}
                  <div className="text-center mb-6">
                    {!isRecording ? (
                      <button
                        onClick={startRecording}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition-all"
                      >
                        <span className="text-2xl">🎤</span>
                        Começar Gravação
                      </button>
                    ) : (
                      <button
                        onClick={stopRecording}
                        className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all animate-pulse"
                      >
                        <span className="text-2xl">⏹️</span>
                        Parar Gravação
                      </button>
                    )}
                  </div>

                  {/* Transcrição */}
                  {transcript && (
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        O que disseste:
                      </p>
                      <p className="text-slate-900 dark:text-white font-semibold">
                        {transcript}
                      </p>
                    </div>
                  )}

                  {/* Feedback */}
                  {feedback && (
                    <div
                      className={`p-4 rounded-lg ${
                        feedback.includes("✅")
                          ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                          : "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      }`}
                    >
                      {feedback}
                    </div>
                  )}

                  {/* Dicas */}
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      💡 <strong>Dica:</strong> Fala claramente, devagar, e tenta seguir o exemplo.
                      A tua pronunciação será melhorando com a prática!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🎤</div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Escolhe um tópico à esquerda para começar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
