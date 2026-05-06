"use client";

import { type FC } from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/lib/app-context";

interface TopbarProps {
  onJumpCompare: () => void;
  onRefresh: () => void;
}

const breadcrumbLabels: Record<string, string> = {
  "/overview": "总览",
  "/models": "车型库",
  "/brands": "品牌大全",
  "/delivery": "外卖车",
  "/news": "资讯流",
  "/charging": "补能网络",
};

const Topbar: FC<TopbarProps> = ({ onJumpCompare, onRefresh }) => {
  const pathname = usePathname();
  const { state, patchState } = useAppContext();
  const label = breadcrumbLabels[pathname] ?? "电摩情报站";

  return (
    <header className="sticky top-0 z-20 bg-[#eef1f4]/95 backdrop-blur-sm">
      {/* 面包屑 */}
      <div className="flex items-center justify-between pt-3 pb-2 border-b border-gray-200/60">
        <nav className="text-xs text-gray-400">
          <span className="text-gray-600 font-medium">电摩情报站</span>
          <span className="mx-1.5">/</span>
          <span className="text-gray-900 font-bold">{label}</span>
        </nav>
        <span className="text-[11px] text-gray-400 font-medium">
          {new Date().toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })}
        </span>
      </div>

      {/* 搜索栏 + 操作区 */}
      <div className="flex items-center justify-between gap-4 pt-2 pb-2">
        <div className="flex items-center gap-2.5 w-full max-w-[520px] h-10 px-3.5 border border-gray-200 rounded-lg bg-white">
          <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-gray-400 shrink-0" aria-hidden="true">
            <path d="m21 19.6-4.7-4.7a7.2 7.2 0 1 0-1.4 1.4l4.7 4.7 1.4-1.4ZM5 10.7a5.7 5.7 0 1 1 11.4 0A5.7 5.7 0 0 1 5 10.7Z" />
          </svg>
          <input
            type="search"
            placeholder="搜索车型、品牌、关键词"
            value={state.query}
            onChange={(e) => patchState({ query: e.target.value })}
            className="w-full border-0 outline-none bg-transparent text-gray-900 text-sm"
            autoComplete="off"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onRefresh}
            className="grid place-items-center w-9 h-9 border border-transparent rounded-lg bg-white text-gray-400 hover:border-gray-200"
            aria-label="刷新数据"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M20 12a8 8 0 0 1-13.7 5.7l1.4-1.4A6 6 0 1 0 6 12H3l4-4 4 4H8a4 4 0 1 1 1.2 2.8l-1.4 1.4A6 6 0 1 0 18 12h2Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onJumpCompare}
            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-transparent bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M5 4h6v16H5V4Zm8 4h6v12h-6V8Z" />
            </svg>
            对比
            <span className="grid place-items-center min-w-[18px] h-4.5 px-1 rounded-full bg-white/20 text-[10px]">
              {state.compare.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
