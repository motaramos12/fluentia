"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As palavras-passe não coincidem!");
      return;
    }
    // Simulated signup - redirect to onboarding
    window.location.href = "/onboarding";
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
          onSubmit={handleSignup}
          className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Criar Conta</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Willes"
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-colors"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Palavra-passe
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-colors"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Confirmar Palavra-passe
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-colors"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Criar Conta
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-slate-400">
            Já tens conta?{" "}
            <Link href="/login" className="text-teal-400 hover:text-teal-300">
              Entrar aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
