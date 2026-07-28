"use client";

import { Button } from "@/components/ui/button";

export function NextLessonCard() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white shadow-lg">
      <div className="mb-6">
        <p className="text-teal-100 text-sm font-medium mb-2">Próxima Lição</p>
        <h2 className="text-3xl font-bold">Pedir Direções</h2>
        <p className="text-teal-100 mt-2">Nível B1 • 15 minutos</p>
      </div>

      <p className="text-teal-50 mb-6">
        Aprende vocabulário e frases essenciais para pedir direções em inglês. Prática com o avatar incluída.
      </p>

      <div className="flex gap-3">
        <Button
          asChild
          className="bg-white text-teal-600 hover:bg-slate-50 font-semibold rounded-xl px-6"
        >
          <a href="/lessons/1">
            Começar Lição →
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-white text-white hover:bg-white/10 rounded-xl px-6"
        >
          <a href="/lessons">
            Ver Todas
          </a>
        </Button>
      </div>
    </div>
  );
}
