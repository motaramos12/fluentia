"use client";

export default function SpeakPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
        🎤 Prática de Fala
      </h1>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Avatar Placeholder */}
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl aspect-square flex items-center justify-center text-white text-6xl">
            🤖
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                Conversa com Avatar
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Fala livremente ou segue a lição. O avatar responde em tempo real.
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-xl text-lg transition-colors">
                🎙️ Iniciar Conversa
              </button>
              <button className="w-full border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-semibold py-4 rounded-xl text-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors">
                📋 Seguir Lição
              </button>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Tempo:</strong> 0:00 / 20:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
