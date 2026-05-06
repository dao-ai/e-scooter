"use client";

import { type FC } from "react";
import type { Model } from "@/lib/types";

interface OverviewProps {
  models: Model[];
}

const Overview: FC<OverviewProps> = ({ models }) => {
  const avgRange = Math.round(models.reduce((s, m) => s + m.range, 0) / models.length);
  const fastShare = Math.round((models.filter((m) => m.charge !== "慢充").length / models.length) * 100);

  return (
    <section className="grid grid-cols-[0.92fr_1.08fr] gap-5 mb-4 max-lg:grid-cols-1">
      <div className="p-[clamp(22px,4vw,38px)] border border-gray-200 rounded-lg bg-white shadow-sm min-h-[332px]">
        <span className="block text-teal-600 text-[11px] font-extrabold tracking-widest uppercase mb-1">
          Electric Moto Intelligence
        </span>
        <h1 className="text-[clamp(34px,5vw,58px)] leading-[1.02] font-bold max-w-[660px] mb-3.5">
          电动摩托车信息聚合看板
        </h1>
        <p className="text-gray-500 text-base max-w-[600px] mb-0">
          聚合车型参数、价格带、口碑趋势、补能网络和政策动态，适合做选购、内容发布与渠道监控。
        </p>
        <div className="grid grid-cols-3 gap-3 mt-7 max-sm:grid-cols-1">
          {[
            { label: "收录车型", value: models.length, suffix: "" },
            { label: "平均续航 km", value: avgRange, suffix: "" },
            { label: "快充覆盖", value: fastShare, suffix: "%" },
          ].map((m) => (
            <div key={m.label} className="p-3.5 border border-gray-200 rounded-lg bg-gray-50">
              <strong className="block text-[27px] leading-[1.1]">{m.value}{m.suffix}</strong>
              <span className="block text-gray-500 text-xs">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
      <figure className="relative m-0 min-h-[332px] overflow-hidden rounded-lg bg-gray-300">
        <img
          src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Can-Am_electric_motorcycle_EICMA_2024.jpg"
          alt="展台上的 Can-Am 电动摩托车"
          className="block w-full h-full min-h-[332px] object-cover"
        />
        <figcaption className="absolute right-3 bottom-2.5 max-w-[calc(100%-24px)] px-2 py-1 rounded-md bg-black/70 text-gray-100 text-[11px]">
          Photo:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Can-Am_electric_motorcycle_EICMA_2024.jpg" className="text-white">
            AVMOTO / Wikimedia Commons
          </a>
          , <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-white">CC BY-SA 4.0</a>
        </figcaption>
      </figure>
    </section>
  );
};

export default Overview;
