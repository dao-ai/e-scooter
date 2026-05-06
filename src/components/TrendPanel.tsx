"use client";

import { type FC } from "react";
import type { Model } from "@/lib/types";

interface TrendPanelProps {
  models: Model[];
}

const barColors = ["bg-blue-600", "bg-green-600", "bg-amber-500", "bg-blue-600", "bg-green-600"];

const TrendPanel: FC<TrendPanelProps> = ({ models }) => {
  const trending = [...models].sort((a, b) => b.heat - a.heat).slice(0, 5);

  return (
    <section className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="mb-3.5">
        <span className="block text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Trend</span>
        <h2 className="text-[22px] leading-[1.18] font-bold m-0">热度趋势</h2>
      </div>
      <div className="grid gap-2.5">
        {trending.map((model, i) => (
          <div key={model.id} className="grid gap-2 p-2.5 rounded-lg bg-gray-50">
            <header className="flex items-center justify-between gap-2.5">
              <b className="text-sm">{model.name}</b>
              <span className="text-xs font-bold text-gray-500">{model.heat}</span>
            </header>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full ${barColors[i] ?? "bg-blue-600"}`}
                style={{ width: `${model.heat}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendPanel;
