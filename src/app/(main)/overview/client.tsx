"use client";

import { useEffect, type FC } from "react";
import type { Model, NewsItem, CityCharge } from "@/lib/types";
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
      <div className="mt-4">
        <ModelGrid models={models} state={state} onToggleCompare={toggleCompare} />
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
