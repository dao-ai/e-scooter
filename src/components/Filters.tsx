"use client";

import { type FC, useCallback } from "react";
import type { FilterState, ModelUse } from "@/lib/types";

interface FiltersProps {
  state: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
}

const uses: { value: ModelUse | "all"; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "commute", label: "通勤" },
  { value: "performance", label: "性能" },
  { value: "delivery", label: "配送" },
];

const Filters: FC<FiltersProps> = ({ state, onChange }) => {
  const handleRangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChange({ minRange: Number(e.target.value) }),
    [onChange]
  );

  return (
    <div className="flex items-center gap-3.5 p-3 border border-gray-200 rounded-lg bg-white mb-4 flex-wrap max-md:flex-col max-md:items-stretch">
      {/* 用途筛选 */}
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="用途筛选">
        {uses.map((u) => (
          <button
            key={u.value}
            type="button"
            onClick={() => onChange({ use: u.value })}
            className={`min-h-[34px] px-3 rounded-lg border text-xs font-bold transition-colors ${
              state.use === u.value
                ? "border-blue-200 bg-blue-50 text-blue-600"
                : "border-gray-200 text-gray-400 bg-white hover:border-gray-300"
            }`}
          >
            {u.label}
          </button>
        ))}
      </div>

      {/* 价格带 */}
      <label className="flex items-center gap-2.5 text-gray-400 text-xs font-bold shrink-0">
        <span>价格带</span>
        <select
          value={state.price}
          onChange={(e) => onChange({ price: e.target.value as FilterState["price"] })}
          className="min-w-[132px] h-[34px] border border-gray-200 rounded-lg bg-gray-50 text-gray-900 text-xs"
        >
          <option value="all">全部</option>
          <option value="low">8000 以下</option>
          <option value="mid">8000-15000</option>
          <option value="high">15000 以上</option>
        </select>
      </label>

      {/* 续航滑块 */}
      <label className="flex items-center gap-2.5 text-gray-400 text-xs font-bold shrink-0">
        <span>
          最低续航 <b className="text-gray-700">{state.minRange}</b> km
        </span>
        <input
          type="range"
          min={40}
          max={180}
          step={10}
          value={state.minRange}
          onChange={handleRangeInput}
          className="w-[170px] accent-blue-600 max-md:w-full"
        />
      </label>

      {/* 仅看快充 */}
      <label className="flex items-center gap-2.5 text-gray-400 text-xs font-bold shrink-0">
        <input
          type="checkbox"
          checked={state.chargingOnly}
          onChange={(e) => onChange({ chargingOnly: e.target.checked })}
          className="w-[18px] h-[18px] accent-green-600"
        />
        <span>仅看快充/换电</span>
      </label>
    </div>
  );
};

export default Filters;
