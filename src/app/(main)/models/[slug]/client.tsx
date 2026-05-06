"use client";

import { type FC } from "react";
import Link from "next/link";
import type { Model } from "@/lib/types";
import { formatPrice } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";

interface Props {
  model: Model;
  body: string | null;
}

const ModelDetailClient: FC<Props> = ({ model, body }) => {
  const { state, toggleCompare } = useAppContext();
  const selected = state.compare.includes(model.id);

  return (
    <div className="mt-4 max-w-5xl">
      {/* 面包屑 */}
      <nav className="text-xs text-gray-400 mb-6">
        <Link href="/overview" className="text-gray-500 hover:text-gray-700 no-underline">
          电摩情报站
        </Link>
        <span className="mx-1.5">/</span>
        <Link href="/models" className="text-gray-500 hover:text-gray-700 no-underline">
          车型库
        </Link>
        <span className="mx-1.5">/</span>
        <Link
          href="/brands"
          className="text-gray-500 hover:text-gray-700 no-underline"
        >
          {model.brand}
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-900 font-bold">{model.name}</span>
      </nav>

      {/* 车型头部 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <span className="text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">
              {model.brand}
            </span>
            <h1 className="text-[32px] font-bold m-0 mt-0.5">{model.name}</h1>
            {body && (
              <p className="text-gray-500 text-sm mt-2 max-w-2xl leading-relaxed">{body}</p>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => toggleCompare(model.id)}
              className={`h-9 px-4 rounded-lg border text-xs font-bold transition-colors ${
                selected
                  ? "border-blue-200 bg-blue-50 text-blue-600"
                  : "border-gray-200 text-gray-500 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {selected ? "✓ 已加入对比" : "+ 加入对比"}
            </button>
          </div>
        </div>

        {/* 核心指标 */}
        <div className="grid grid-cols-4 gap-3 mt-6 max-md:grid-cols-2">
          {[
            { label: "参考价", value: formatPrice(model.price) },
            { label: "续航", value: `${model.range} km` },
            { label: "极速", value: `${model.topSpeed} km/h` },
            { label: "电池", value: model.battery },
          ].map((s) => (
            <div key={s.label} className="p-3.5 rounded-lg bg-gray-50 border border-gray-100">
              <span className="block text-gray-500 text-[11px] font-bold mb-0.5">{s.label}</span>
              <strong className="text-lg">{s.value}</strong>
            </div>
          ))}
        </div>

        {/* 标签 */}
        {model.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {model.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 详细规格 */}
      {model.specs && model.specs.length > 0 ? (
        <div className="space-y-5">
          {model.specs.map((group) => (
            <div key={group.title} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-3.5 bg-gray-50 border-b border-gray-200">
                <h2 className="text-sm font-bold m-0">{group.title}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {group.specs.map((spec) => (
                  <div key={spec.key} className="grid grid-cols-[200px_1fr] gap-4 px-6 py-3 max-md:grid-cols-1 max-md:gap-1">
                    <span className="text-gray-500 text-sm font-medium">{spec.key}</span>
                    <span className="text-gray-900 text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="grid place-items-center min-h-[120px] border-2 border-dashed border-gray-200 rounded-lg text-gray-400 text-sm">
            暂无详细规格数据
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelDetailClient;
