"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login - redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-teal-500 mb-2">Fluentia</h1>
          <p className="text-slate-400">Aprende inglês com um tutor de IA</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Entrar</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-colors"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Palavra-passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-colors"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors mb-4"
          >
            Entrar
          </button>

          {/* Demo Button */}
          <button
            type="button"
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 font-semibold py-3 rounded-lg transition-colors"
          >
            Demo (sem login)
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-6">
          <p className="text-slate-400">
            Não tens conta?{" "}
            <Link href="/signup" className="text-teal-400 hover:text-teal-300">
              Criar agora
            </Link>
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="text-2xl">🎤</span>
            <p>Pratica fala com avatar de IA</p>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="text-2xl">✍️</span>
            <p>Correção de escrita em tempo real</p>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="text-2xl">📈</span>
            <p>Acompanha o teu progresso</p>
          </div>
        </div>
      </div>
    </div>
  );
}
