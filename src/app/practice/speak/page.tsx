"use client";

import { useState } from "react";

export default function SpeakPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      speaker: "avatar",
      text: "Olá! Como posso ajudar-te hoje?",
      timestamp: new Date(),
    },
  ]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          speaker: "user",
          text: "Olá! Quero praticar inglês contigo.",
          timestamp: new Date(),
        },
        {
          id: messages.length + 2,
          speaker: "avatar",
          text: "Excelente! Vamos começar. O que gostarias de aprender hoje?",
          timestamp: new Date(),
        },
      ]);
    }, 2000);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
        🎤 Prática de Fala
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Avatar & Video */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl aspect-square flex flex-col items-center justify-center text-white shadow-lg mb-6">
            <div className="text-8xl mb-4">🤖</div>
            <div className={`text-sm font-semibold ${isRecording ? "animate-pulse" : ""}`}>
              {isRecording ? "🔴 A ouvir..." : "✅ Pronto"}
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleStartRecording}
              className={`w-full font-semibold py-3 rounded-xl transition-all text-lg ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-teal-500 hover:bg-teal-600 text-white"
              }`}
            >
              {isRecording ? "⏹️ Parar" : "🎙️ Começar a Falar"}
            </button>
            <button className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              ❌ Terminar Sessão
            </button>
          </div>

          <div className="mt-6 bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
              <strong>Tempo:</strong> 2:45 / 20:00
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <strong>Erros detetados:</strong> 2
            </p>
          </div>
        </div>

        {/* Conversation */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex-1 min-h-96 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.speaker === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.speaker === "user"
                        ? "bg-teal-500 text-white rounded-br-none"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Transcription Display */}
            <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 text-sm text-slate-600 dark:text-slate-300 italic">
              {isRecording
                ? "🎤 A gravar... Fala agora..."
                : "Última transcrição será mostrada aqui"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
