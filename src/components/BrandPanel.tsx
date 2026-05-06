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

const BRAND_ORDERS: Record<string, number> = {
  "极核 ZEEHO": 0,
  "巨龙": 1,
  "星驰": 2,
  "凌越": 3,
  "路勤": 4,
  "小境": 5,
  "锐能": 6,
  "即达": 7,
};

const BRAND_COLORS: Record<string, string> = {
  "极核 ZEEHO": "from-blue-600 to-indigo-700",
  "巨龙": "from-red-600 to-orange-700",
  "星驰": "from-teal-500 to-cyan-600",
  "凌越": "from-purple-500 to-violet-600",
  "路勤": "from-amber-500 to-yellow-600",
  "小境": "from-green-500 to-emerald-600",
  "锐能": "from-rose-500 to-pink-600",
  "即达": "from-sky-500 to-blue-600",
};

const BrandPanel: FC<BrandPanelProps> = ({ models, compare, onToggleCompare, onViewModel }) => {
  const brandMap = useMemo(() => {
    const map = new Map<string, Model[]>();
    for (const m of models) {
      const list = map.get(m.brand) ?? [];
      list.push(m);
      map.set(m.brand, list);
    }
    return [...map.entries()].sort(
      (a, b) => (BRAND_ORDERS[a[0]] ?? 99) - (BRAND_ORDERS[b[0]] ?? 99)
    );
  }, [models]);

  return (
    <section id="brands" className="space-y-8">
      {brandMap.map(([brand, brandModels]) => {
        const avgPrice = Math.round(
          brandModels.reduce((s, m) => s + m.price, 0) / brandModels.length
        );
        const avgRange = Math.round(
          brandModels.reduce((s, m) => s + m.range, 0) / brandModels.length
        );
        const bestScore = Math.max(...brandModels.map((m) => m.score));
        const gradient = BRAND_COLORS[brand] ?? "from-gray-500 to-gray-600";

        return (
          <section key={brand}>
            {/* 品牌头 */}
            <div
              className={`bg-gradient-to-r ${gradient} rounded-xl p-6 text-white mb-4 flex items-center justify-between flex-wrap gap-4`}
            >
              <div>
                <h2 className="text-2xl font-bold m-0">{brand}</h2>
                <p className="text-white/80 text-sm mt-1 mb-0">
                  {brandModels.length} 款车型 · 均价 {formatPrice(avgPrice)} · 平均续航 {avgRange}km
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">{brandModels.length}</div>
                  <div className="text-white/70 text-xs">车型</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{bestScore}</div>
                  <div className="text-white/70 text-xs">最高评分</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{avgRange}</div>
                  <div className="text-white/70 text-xs">均续航 km</div>
                </div>
              </div>
            </div>

            {/* 车型列表 */}
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {brandModels.map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  selected={compare.includes(model.id)}
                  onToggleCompare={onToggleCompare}
                />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default BrandPanel;
