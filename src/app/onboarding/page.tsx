"use client";

import { useState } from "react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState("");

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleFinish = () => {
    if (level) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Bem-vindo! 👋
            </h1>
            <p className="text-slate-600">Passo {step} de 3</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Step 1 - Welcome */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  🎯 Qual é o teu objetivo?
                </h2>
                <p className="text-slate-600 mb-6">
                  Vamos ajustar a experiência de acordo com o teu nível.
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Continuar →
              </button>
            </div>
          )}

          {/* Step 2 - Level Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  📚 Qual é o teu nível de inglês?
                </h2>
              </div>

              <div className="space-y-3">
                {["A1", "A2", "B1", "B2"].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevel(lvl)}
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all border-2 ${
                      level === lvl
                        ? "bg-teal-500 text-white border-teal-600"
                        : "bg-slate-100 text-slate-900 border-slate-200 hover:border-teal-500"
                    }`}
                  >
                    {lvl === "A1" && "A1 - Iniciante"}
                    {lvl === "A2" && "A2 - Elementar"}
                    {lvl === "B1" && "B1 - Intermédio"}
                    {lvl === "B2" && "B2 - Independente"}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={!level}
                className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-slate-300 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Continuar →
              </button>
            </div>
          )}

          {/* Step 3 - Confirmation */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <div>
                <div className="text-6xl mb-4">✨</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Pronto para começar!
                </h2>
                <p className="text-slate-600 mb-6">
                  Nível selecionado: <strong>{level}</strong>
                </p>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 space-y-2 text-left text-sm text-slate-700">
                <p>✓ Conversas com avatar de IA</p>
                <p>✓ Correção de escrita em tempo real</p>
                <p>✓ Acompanhamento de progresso</p>
                <p>✓ Lições personalizadas</p>
              </div>

              <button
                onClick={handleFinish}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Ir para Dashboard 🚀
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
