"use client";

import { type FC } from "react";
import type { Model } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import BrandPanel from "@/components/BrandPanel";

export const BrandsClient: FC<{ models: Model[] }> = ({ models }) => {
  const { state, toggleCompare } = useAppContext();

  return (
    <div className="mt-4">
      <div className="mb-4">
        <span className="text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Brands</span>
        <h1 className="text-[28px] font-bold m-0">品牌大全</h1>
        <p className="text-gray-500 text-sm mt-1 mb-0">{models.length} 款车型 · {new Set(models.map(m => m.brand)).size} 个品牌</p>
      </div>
      <BrandPanel
        models={models}
        compare={state.compare}
        onToggleCompare={toggleCompare}
        onViewModel={() => {}}
      />
    </div>
  );
};
