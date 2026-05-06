"use client";

import { useEffect, useMemo, type FC } from "react";
import type { Model } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import ModelCard from "@/components/ModelCard";

export const DeliveryClient: FC<{ models: Model[] }> = ({ models }) => {
  const { setModels, state, toggleCompare } = useAppContext();
  useEffect(() => { setModels(models); }, [models, setModels]);

  const deliveryModels = useMemo(() => models.filter((m) => m.use === "delivery"), [models]);

  return (
    <div className="mt-4">
      <div className="mb-4">
        <span className="text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Delivery</span>
        <h1 className="text-[28px] font-bold m-0">外卖配送车</h1>
        <p className="text-gray-500 text-sm mt-1 mb-0">
          专为外卖骑手打造的配送车型 · {deliveryModels.length} 款可选
        </p>
      </div>

      {deliveryModels.length === 0 ? (
        <div className="grid place-items-center min-h-[200px] border-2 border-dashed border-gray-200 rounded-lg bg-white text-gray-400 text-sm">
          暂无外卖车型数据
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {deliveryModels.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              selected={state.compare.includes(model.id)}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>
      )}
    </div>
  );
};
