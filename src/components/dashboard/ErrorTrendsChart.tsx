"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { date: "Seg", gramática: 8, vocabulário: 5, pronúncia: 6 },
  { date: "Ter", gramática: 7, vocabulário: 6, pronúncia: 5 },
  { date: "Qua", gramática: 6, vocabulário: 4, pronúncia: 7 },
  { date: "Qui", gramática: 5, vocabulário: 5, pronúncia: 4 },
  { date: "Sex", gramática: 4, vocabulário: 3, pronúncia: 5 },
  { date: "Sab", gramática: 3, vocabulário: 2, pronúncia: 3 },
  { date: "Dom", gramática: 2, vocabulário: 2, pronúncia: 2 },
];

export function ErrorTrendsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="date" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #475569",
            borderRadius: "8px",
          }}
          labelStyle={{ color: "#f1f5f9" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="gramática"
          stroke="#ef4444"
          strokeWidth={2}
          dot={{ fill: "#ef4444", r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="vocabulário"
          stroke="#f97316"
          strokeWidth={2}
          dot={{ fill: "#f97316", r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="pronúncia"
          stroke="#eab308"
          strokeWidth={2}
          dot={{ fill: "#eab308", r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
