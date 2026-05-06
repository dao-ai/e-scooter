"use client";

import { createContext, useContext, useState, useCallback, type FC, type ReactNode } from "react";
import type { Model, FilterState } from "@/lib/types";

interface AppContextValue {
  models: Model[];
  setModels: (models: Model[]) => void;
  state: FilterState;
  patchState: (patch: Partial<FilterState>) => void;
  toggleCompare: (id: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [state, setState] = useState<FilterState>({
    use: "all",
    price: "all",
    minRange: 60,
    chargingOnly: false,
    query: "",
    newsType: "all",
    compare: [],
  });

  const patchState = useCallback((patch: Partial<FilterState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  const toggleCompare = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      compare: prev.compare.includes(id)
        ? prev.compare.filter((c) => c !== id)
        : prev.compare.length < 3
          ? [...prev.compare, id]
          : prev.compare,
    }));
  }, []);

  return (
    <AppContext.Provider value={{ models, setModels, state, patchState, toggleCompare }}>
      {children}
    </AppContext.Provider>
  );
};
