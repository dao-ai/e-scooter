"use client";

import { type FC } from "react";
import Link from "next/link";
import type { Model } from "@/lib/types";
import { formatPrice } from "@/lib/types";

interface ModelCardProps {
  model: Model;
  selected: boolean;
  onToggleCompare: (id: string) => void;
}

const ModelCard: FC<ModelCardProps> = ({ model, selected, onToggleCompare }) => (
  <article className="grid gap-3.5 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
    <Link
      href={`/models/${model.slug ?? model.id}`}
      className="no-underline text-inherit"
    >
      <div className="flex justify-between gap-3">
        <div>
          <p className="text-gray-500 text-xs font-bold mb-0">{model.brand}</p>
          <h3 className="text-lg leading-[1.2] font-bold mt-0 mb-0">{model.name}</h3>
        </div>
        <span className="shrink-0 min-w-[50px] px-2 py-1 rounded-lg bg-green-50 text-green-600 text-center text-xs font-extrabold">
          {model.score}
        </span>
      </div>
    </Link>

    <Link
      href={`/models/${model.slug ?? model.id}`}
      className="no-underline text-inherit"
    >
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "参考价", value: formatPrice(model.price) },
          { label: "续航", value: `${model.range} km` },
          { label: "极速", value: `${model.topSpeed} km/h` },
        ].map((s) => (
          <div key={s.label} className="p-2 rounded-lg bg-gray-50">
            <b className="block text-[15px]">{s.value}</b>
            <span className="block text-gray-500 text-[11px]">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {model.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
            {tag}
          </span>
        ))}
      </div>
    </Link>

    <div className="flex justify-between gap-2.5 items-center">
      <span className="text-gray-500 text-xs">
        {model.battery} · {model.charge}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleCompare(model.id);
        }}
        className={`min-h-[34px] px-2.5 rounded-lg border text-xs font-extrabold transition-colors ${
          selected
            ? "border-blue-200 bg-blue-50 text-blue-600"
            : "border-gray-200 text-gray-400 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        }`}
      >
        {selected ? "已加入" : "对比"}
      </button>
    </div>
  </article>
);

export default ModelCard;
