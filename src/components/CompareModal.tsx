"use client";

import { type FC, useEffect } from "react";
import type { Model } from "@/lib/types";
import { useAppContext } from "@/lib/app-context";
import ModelCard from "./ModelCard";

interface CompareModalProps {
  models: Model[];
  open: boolean;
  onClose: () => void;
}

const CompareModal: FC<CompareModalProps> = ({ models, open, onClose }) => {
  const { state, toggleCompare } = useAppContext();
  const selectedModels = state.compare
    .map((id) => models.find((m) => m.id === id))
    .filter(Boolean) as Model[];

  // ESC key to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 遮罩 */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 弹窗 */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] mx-4 flex flex-col overflow-hidden">
        {/* 头部 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-lg font-bold m-0">快速对比</h2>
            <p className="text-gray-500 text-xs mt-0.5 mb-0">
              已选 {selectedModels.length}/3 款 · 点击车型卡片加入对比
            </p>
          </div>
          <div className="flex items-center gap-2">
            {selectedModels.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  state.compare.forEach((id) => toggleCompare(id));
                }}
                className="text-xs text-gray-400 hover:text-red-500 font-bold px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
              >
                清空
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="grid place-items-center w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L12 13.4l-6.3 6.3-1.4-1.4L10.6 12 4.3 5.7l1.4-1.4L12 10.6l6.3-6.3 1.4 1.4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 对比列表 */}
        <div className="flex-1 overflow-y-auto p-6">
          {selectedModels.length === 0 ? (
            <div className="grid place-items-center min-h-[200px] border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-sm">
              还没有选择对比车型
              <br />
              <span className="text-xs mt-1">
                在车型卡片上点击「对比」按钮加入
              </span>
            </div>
          ) : (
            <div className="space-y-4">
              {/* 对比表头 */}
              <div className="grid gap-3" style={{ gridTemplateColumns: `140px repeat(${selectedModels.length}, 1fr)` }}>
                {/* 空左上角 */}
                <div />

                {/* 车型名称行 */}
                {selectedModels.map((model) => (
                  <div key={model.id} className="text-center">
                    <span className="text-xs text-gray-500">{model.brand}</span>
                    <h3 className="text-sm font-bold m-0">{model.name}</h3>
                    <button
                      type="button"
                      onClick={() => toggleCompare(model.id)}
                      className="text-[11px] text-gray-400 hover:text-red-500 mt-1"
                    >
                      移除
                    </button>
                  </div>
                ))}
              </div>

              {/* 对比数据行 */}
              {[
                { label: "参考价", field: "price" as const, fmt: (v: unknown) => `¥${(v as number).toLocaleString("zh-CN")}` },
                { label: "续航", field: "range" as const, fmt: (v: unknown) => `${v} km` },
                { label: "极速", field: "topSpeed" as const, fmt: (v: unknown) => `${v} km/h` },
                { label: "评分", field: "score" as const, fmt: (v: unknown) => `${v}` },
                { label: "电池", field: "battery" as const, fmt: (v: unknown) => String(v) },
                { label: "充电", field: "charge" as const, fmt: (v: unknown) => String(v) },
              ].map((row) => (
                <div
                  key={row.field}
                  className="grid gap-3 items-center"
                  style={{ gridTemplateColumns: `140px repeat(${selectedModels.length}, 1fr)` }}
                >
                  <span className="text-xs font-bold text-gray-500">{row.label}</span>
                  {selectedModels.map((model) => {
                    const val = model[row.field as keyof Model];
                    return (
                      <div key={model.id} className="text-center bg-gray-50 rounded-lg px-3 py-2.5">
                        <span className="text-sm font-bold">
                          {row.fmt(val)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* 标签 */}
              <div
                className="grid gap-3 items-start"
                style={{ gridTemplateColumns: `140px repeat(${selectedModels.length}, 1fr)` }}
              >
                <span className="text-xs font-bold text-gray-500 mt-1">特点</span>
                {selectedModels.map((model) => (
                  <div key={model.id} className="flex flex-wrap gap-1 justify-center">
                    {model.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 底部提示 */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 text-center text-[11px] text-gray-400 shrink-0">
          最多对比 3 款车型 · 点击车型卡片上的「对比」按钮添加
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
