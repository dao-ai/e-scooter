"use client";

import { type FC } from "react";
import type { FilterState, NewsItem } from "@/lib/types";

const tabs: { value: FilterState["newsType"]; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "launch", label: "新车" },
  { value: "policy", label: "政策" },
  { value: "tech", label: "技术" },
];

interface NewsSectionProps {
  newsItems: NewsItem[];
  newsType: FilterState["newsType"];
  onNewsTypeChange: (t: FilterState["newsType"]) => void;
}

const NewsSection: FC<NewsSectionProps> = ({ newsItems, newsType, onNewsTypeChange }) => {
  const visible = newsItems.filter((item) => newsType === "all" || item.type === newsType);

  return (
    <section id="news" className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm mt-4">
      <div className="flex items-end justify-between gap-3.5 mb-3.5 flex-wrap">
        <div>
          <span className="block text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">News Feed</span>
          <h2 className="text-[22px] leading-[1.18] font-bold m-0">资讯流</h2>
        </div>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="资讯分类">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => onNewsTypeChange(tab.value)}
              className={`min-h-[34px] px-3 rounded-lg border text-xs font-bold transition-colors ${
                newsType === tab.value
                  ? "border-blue-200 bg-blue-50 text-blue-600"
                  : "border-gray-200 text-gray-400 bg-white hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
        {visible.map((item, i) => (
          <article
            key={i}
            className="grid content-between gap-3.5 min-h-[170px] p-4 border border-gray-200 rounded-lg bg-white shadow-sm"
          >
            <div>
              <div className="flex flex-wrap gap-2 text-gray-500 text-xs font-bold mb-1">
                <span>{item.source}</span>
                <span>{item.time}</span>
              </div>
              <h3 className="text-[17px] leading-[1.25] font-bold m-0">{item.title}</h3>
              <p className="text-gray-500 text-xs mt-1.5 mb-0">{item.summary}</p>
            </div>
            <span className="w-fit px-2 py-1 rounded-full bg-indigo-50 text-blue-600 text-xs font-extrabold">
              {item.label}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
