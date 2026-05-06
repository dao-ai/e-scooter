"use client";

import { useEffect, type FC } from "react";
import type { Model } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import Filters from "@/components/Filters";
import ModelGrid from "@/components/ModelGrid";

export const ModelsClient: FC<{ models: Model[] }> = ({ models }) => {
  const { setModels, state, patchState, toggleCompare } = useAppContext();
  useEffect(() => { setModels(models); }, [models, setModels]);

  return (
    <>
      <div className="mb-1 mt-4">
        <span className="text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Model Library</span>
        <h1 className="text-[28px] font-bold m-0">车型库</h1>
      </div>
      <Filters state={state} onChange={patchState} />
      <div className="grid grid-cols-[1fr_356px] gap-4 mt-4 max-lg:grid-cols-1">
        <ModelGrid models={models} state={state} onToggleCompare={toggleCompare} />
        <aside className="grid content-start gap-4" />
      </div>
    </>
  );
};
