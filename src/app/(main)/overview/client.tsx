"use client";

import { type FC } from "react";
import type { Model, NewsItem, CityCharge } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import Overview from "@/components/Overview";
import Filters from "@/components/Filters";
import ModelGrid from "@/components/ModelGrid";
import ComparePanel from "@/components/ComparePanel";
import TrendPanel from "@/components/TrendPanel";
import NewsSection from "@/components/NewsSection";
import BottomGrid from "@/components/BottomGrid";

interface Props {
  models: Model[];
  newsItems: NewsItem[];
  cities: CityCharge[];
}

export const OverviewClient: FC<Props> = ({ models, newsItems, cities }) => {
  const { state, patchState, toggleCompare } = useAppContext();

  return (
    <>
      <Overview models={models} />
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
      <NewsSection
        newsItems={newsItems}
        newsType={state.newsType}
        onNewsTypeChange={(t) => patchState({ newsType: t })}
      />
      <BottomGrid cities={cities} />
    </>
  );
};
