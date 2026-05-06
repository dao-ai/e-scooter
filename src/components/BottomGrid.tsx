"use client";

import { type FC } from "react";
import type { CityCharge } from "@/lib/types";

interface BottomGridProps {
  cities: CityCharge[];
}

const barColors = ["bg-blue-600", "bg-green-600", "bg-amber-500", "bg-blue-600"];

const BottomGrid: FC<BottomGridProps> = ({ cities }) => (
  <div className="grid grid-cols-[1.3fr_0.7fr] gap-4 mt-4 max-lg:grid-cols-1" id="charging">
    {/* 城市补能指数 */}
    <section className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="mb-3.5">
        <span className="block text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Charging</span>
        <h2 className="text-[22px] leading-[1.18] font-bold m-0">城市补能指数</h2>
      </div>
      <div className="grid gap-2.5">
        {cities.map((city, i) => (
          <div key={city.city} className="grid gap-2 p-2.5 rounded-lg bg-gray-50">
            <header className="flex items-center justify-between gap-2.5">
              <b className="text-sm">{city.city}</b>
              <span className="text-xs text-gray-500">{city.note}</span>
            </header>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full ${barColors[i] ?? "bg-blue-600"}`}
                style={{ width: `${city.index}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* 数据源队列 */}
    <section className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="mb-3.5">
        <span className="block text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Sources</span>
        <h2 className="text-[22px] leading-[1.18] font-bold m-0">数据源队列</h2>
      </div>
      <div className="grid gap-2.5">
        {[
          { label: "厂商公告", count: 16 },
          { label: "试驾内容", count: 42 },
          { label: "社区口碑", count: 128 },
          { label: "补能站点", count: 76 },
        ].map((src) => (
          <div
            key={src.label}
            className="flex items-center justify-between gap-2.5 p-2.5 rounded-lg bg-gray-50"
          >
            <span className="text-sm">{src.label}</span>
            <b className="text-sm">{src.count}</b>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default BottomGrid;
