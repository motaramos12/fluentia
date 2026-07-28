"use client";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
        ⚙️ Definições
      </h1>

      <div className="space-y-6">
        {/* Perfil */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Perfil
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                defaultValue="Willes"
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="willes@example.com"
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Nível */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Nível Atual
          </h2>
          <div className="flex gap-2">
            {["A1", "A2", "B1", "B2"].map((level) => (
              <button
                key={level}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  level === "B1"
                    ? "bg-teal-500 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Preferências */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Preferências
          </h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-slate-700 dark:text-slate-300">
                Notificações de streak
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-slate-700 dark:text-slate-300">
                Modo escuro
              </span>
            </label>
          </div>
        </div>

        {/* Ações */}
        <div className="space-y-3">
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors">
            💾 Guardar Alterações
          </button>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-colors">
            🗑️ Apagar Conta
          </button>
        </div>
      </div>
    </div>
  );
}
