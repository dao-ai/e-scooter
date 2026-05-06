"use client";

import { type FC } from "react";
import type { Model } from "@/lib/types";

interface ComparePanelProps {
  models: Model[];
  compare: string[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const ComparePanel: FC<ComparePanelProps> = ({ models, compare, onRemove, onClear }) => {
  const selectedModels = compare.map((id) => models.find((m) => m.id === id)).filter(Boolean) as Model[];

  return (
    <section className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3.5 mb-3.5">
        <div>
          <span className="block text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Compare</span>
          <h2 className="text-[22px] leading-[1.18] font-bold m-0">快速对比</h2>
        </div>
        {selectedModels.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="min-h-[34px] px-2.5 rounded-lg border border-gray-200 text-gray-400 text-xs font-extrabold hover:border-blue-200 hover:text-blue-600"
          >
            清空
          </button>
        )}
      </div>

      <div className="grid gap-2.5">
        {selectedModels.length === 0 ? (
          <div className="grid place-items-center min-h-[110px] border-2 border-dashed border-gray-200 rounded-lg text-gray-400 text-xs">
            选择车型后显示参数差异
          </div>
        ) : (
          selectedModels.map((model) => (
            <div key={model.id} className="grid gap-2 p-2.5 rounded-lg bg-gray-50">
              <header className="flex items-center justify-between gap-2.5">
                <b className="text-sm">{model.name}</b>
                <button
                  type="button"
                  onClick={() => onRemove(model.id)}
                  className="min-h-[34px] px-2.5 rounded-lg border border-gray-200 text-gray-400 text-xs font-extrabold hover:border-red-200 hover:text-red-500"
                >
                  移除
                </button>
              </header>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "km", value: model.range },
                  { label: "km/h", value: model.topSpeed },
                  { label: "评分", value: model.score },
                ].map((s) => (
                  <div key={s.label} className="p-2 rounded-lg bg-white">
                    <b className="block text-[15px]">{s.value}</b>
                    <span className="block text-gray-500 text-[11px]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ComparePanel;
