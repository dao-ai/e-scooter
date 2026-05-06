"use client";

import { type FC } from "react";
import type { Model } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import Filters from "@/components/Filters";
import ModelGrid from "@/components/ModelGrid";
import ComparePanel from "@/components/ComparePanel";
import TrendPanel from "@/components/TrendPanel";

export const ModelsClient: FC<{ models: Model[] }> = ({ models }) => {
  const { state, patchState, toggleCompare } = useAppContext();

  return (
    <>
      <div className="mb-1 mt-4">
        <span className="text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Model Library</span>
        <h1 className="text-[28px] font-bold m-0">车型库</h1>
      </div>
      <Filters state={state} onChange={patchState} />
      <div className="grid grid-cols-[1fr_356px] gap-4 mt-4 max-lg:grid-cols-1">
        <ModelGrid models={models} state={state} onToggleCompare={toggleCompare} />
        <aside className="grid content-start gap-4">
          <ComparePanel
            models={models}
            compare={state.compare}
            onRemove={(id) => toggleCompare(id)}
            onClear={() => patchState({ compare: [] })}
          />
          <TrendPanel models={models} />
        </aside>
      </div>
    </>
  );
};
