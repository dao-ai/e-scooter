"use client";

import { type FC, useMemo } from "react";
import type { Model } from "@/lib/types";
import { formatPrice } from "@/lib/types";
import ModelCard from "./ModelCard";

interface BrandPanelProps {
  models: Model[];
  compare: string[];
  onToggleCompare: (id: string) => void;
  onViewModel: () => void;
}

const BRAND_STYLES: Record<string, { gradient: string; badge: string }> = {
  "极核 ZEEHO": { gradient: "from-violet-500 via-purple-600 to-indigo-700", badge: "bg-violet-100 text-violet-700" },
  "巨龙": { gradient: "from-orange-500 via-red-500 to-rose-600", badge: "bg-orange-100 text-orange-700" },
  "小牛 NIU": { gradient: "from-blue-500 via-cyan-500 to-teal-500", badge: "bg-blue-100 text-blue-700" },
  "九号 Ninebot": { gradient: "from-emerald-500 via-green-500 to-teal-600", badge: "bg-emerald-100 text-emerald-700" },
  "赛鸽": { gradient: "from-amber-500 via-yellow-500 to-orange-500", badge: "bg-amber-100 text-amber-700" },
  "小刀": { gradient: "from-sky-500 via-blue-500 to-indigo-600", badge: "bg-sky-100 text-sky-700" },
  "绿佳": { gradient: "from-green-500 via-emerald-500 to-teal-500", badge: "bg-green-100 text-green-700" },
  "雅迪 Yadea": { gradient: "from-red-500 via-rose-500 to-pink-600", badge: "bg-red-100 text-red-700" },
  "爱玛 AIMA": { gradient: "from-pink-400 via-rose-400 to-red-400", badge: "bg-pink-100 text-pink-700" },
  "台铃 TAILG": { gradient: "from-cyan-500 via-sky-500 to-blue-500", badge: "bg-cyan-100 text-cyan-700" },
  "绿源 LUYUAN": { gradient: "from-lime-500 via-green-500 to-emerald-500", badge: "bg-lime-100 text-lime-700" },
  "新日 SUNRA": { gradient: "from-amber-400 via-orange-400 to-yellow-500", badge: "bg-amber-100 text-amber-700" },
  "五星钻豹": { gradient: "from-yellow-500 via-amber-500 to-orange-500", badge: "bg-yellow-100 text-yellow-700" },
  "深远 SYUAN": { gradient: "from-teal-500 via-cyan-500 to-sky-500", badge: "bg-teal-100 text-teal-700" },
  "智迈": { gradient: "from-indigo-500 via-purple-500 to-violet-500", badge: "bg-indigo-100 text-indigo-700" },
};

const defaultStyle = { gradient: "from-gray-500 to-gray-600", badge: "bg-gray-100 text-gray-700" };

const BrandPanel: FC<BrandPanelProps> = ({ models, compare, onToggleCompare }) => {
  const brandMap = useMemo(() => {
    const map = new Map<string, Model[]>();
    for (const m of models) {
      const list = map.get(m.brand) ?? [];
      list.push(m);
      map.set(m.brand, list);
    }
    return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [models]);

  return (
    <section id="brands" className="space-y-8">
      {brandMap.map(([brand, brandModels]) => {
        const avgPrice = Math.round(brandModels.reduce((s, m) => s + m.price, 0) / brandModels.length);
        const avgRange = Math.round(brandModels.reduce((s, m) => s + m.range, 0) / brandModels.length);
        const bestScore = Math.max(...brandModels.map((m) => m.score));
        const style = BRAND_STYLES[brand] ?? defaultStyle;

        return (
          <section key={brand}>
            <div className={`bg-gradient-to-r ${style.gradient} rounded-xl p-6 text-white mb-4 flex items-center justify-between flex-wrap gap-4 shadow-sm`}>
              <div>
                <h2 className="text-2xl font-bold m-0">{brand}</h2>
                <p className="text-white/80 text-sm mt-1 mb-0">
                  {brandModels.length} 款车型 · 均价 {formatPrice(avgPrice)} · 平均续航 {avgRange}km
                </p>
              </div>
              <div className="flex items-center gap-5 text-sm">
                <div className="text-center"><div className="text-2xl font-bold">{brandModels.length}</div><div className="text-white/70 text-xs">车型</div></div>
                <div className="text-center"><div className="text-2xl font-bold">{bestScore}</div><div className="text-white/70 text-xs">最高评分</div></div>
                <div className="text-center"><div className="text-2xl font-bold">{avgRange}</div><div className="text-white/70 text-xs">均续航 km</div></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
              {brandModels.map((model) => (
                <ModelCard key={model.id} model={model} selected={compare.includes(model.id)} onToggleCompare={onToggleCompare} />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default BrandPanel;
