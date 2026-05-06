"use client";

import { type FC } from "react";
import type { NewsItem } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import NewsSection from "@/components/NewsSection";

export const NewsClient: FC<{ newsItems: NewsItem[] }> = ({ newsItems }) => {
  const { state, patchState } = useAppContext();

  return (
    <div className="mt-4">
      <div className="mb-4">
        <span className="text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">News Feed</span>
        <h1 className="text-[28px] font-bold m-0">资讯流</h1>
      </div>
      <NewsSection
        newsItems={newsItems}
        newsType={state.newsType}
        onNewsTypeChange={(t) => patchState({ newsType: t })}
      />
    </div>
  );
};
