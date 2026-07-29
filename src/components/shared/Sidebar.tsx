"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Estudar", href: "/study", icon: "👨‍🏫" },
  { label: "Meu Progresso", href: "/progress", icon: "📈" },
  { label: "Lições", href: "/lessons", icon: "📚" },
  { label: "Falar", href: "/practice/speak", icon: "🎤" },
  { label: "Escrever", href: "/practice/write", icon: "✍️" },
  { label: "Definições", href: "/settings", icon: "⚙️" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6 flex flex-col">
      {/* Logo */}
      <Link href="/dashboard" className="mb-8">
        <h2 className="text-2xl font-bold text-teal-500">Fluentia</h2>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-teal-500 text-white font-semibold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <button className="w-full px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-left">
          Logout
        </button>
      </div>
    </aside>
  );
}
