"use client";

import { useEffect, type FC } from "react";
import type { Model, NewsItem, CityCharge, FilterState } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import Overview from "@/components/Overview";
import Filters from "@/components/Filters";
import ModelGrid from "@/components/ModelGrid";
import NewsSection from "@/components/NewsSection";
import BottomGrid from "@/components/BottomGrid";

interface Props {
  models: Model[];
  newsItems: NewsItem[];
  cities: CityCharge[];
}

export const OverviewClient: FC<Props> = ({ models, newsItems, cities }) => {
  const { setModels, state, patchState, toggleCompare } = useAppContext();

  useEffect(() => { setModels(models); }, [models, setModels]);

  return (
    <>
      <Overview models={models} />
      <Filters state={state} onChange={patchState} />
      <div className="grid grid-cols-[1fr_356px] gap-4 mt-4 max-lg:grid-cols-1">
        <ModelGrid models={models} state={state} onToggleCompare={toggleCompare} />
        <aside className="grid content-start gap-4">
          <div className="hidden">
            <div id="compare-anchor" />
          </div>
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
