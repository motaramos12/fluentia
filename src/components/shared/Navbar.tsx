"use client";

import Link from "next/link";
import { LevelBadge } from "./LevelBadge";

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-teal-500">Fluentia</h1>
      </div>

      <div className="flex items-center gap-6">
        <LevelBadge level="B1" />

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold">
            W
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-slate-900 dark:text-white">Willes</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Utilizador</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
