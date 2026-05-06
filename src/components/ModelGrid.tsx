"use client";

import { type FC } from "react";
import type { Model, FilterState } from "@/lib/types";
import { filterModels } from "@/lib/types";
import ModelCard from "./ModelCard";

interface ModelGridProps {
  models: Model[];
  state: FilterState;
  onToggleCompare: (id: string) => void;
}

const ModelGrid: FC<ModelGridProps> = ({ models, state, onToggleCompare }) => {
  const visible = filterModels(models, state);

  return (
    <section id="models">
      <div className="flex items-end justify-between gap-3.5 mb-3.5">
        <div>
          <span className="block text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">
            Model Library
          </span>
          <h2 className="text-[22px] leading-[1.18] font-bold m-0">车型库</h2>
        </div>
        <span className="text-gray-500 text-xs font-bold">{visible.length} 款</span>
      </div>

      {visible.length === 0 ? (
        <div className="grid place-items-center min-h-[110px] border-2 border-dashed border-gray-200 rounded-lg text-gray-400 text-xs">
          没有匹配车型
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {visible.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              selected={state.compare.includes(model.id)}
              onToggleCompare={onToggleCompare}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ModelGrid;
