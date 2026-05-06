"use client";

import { type FC } from "react";
import type { CityCharge } from "@/lib/types";
import BottomGrid from "@/components/BottomGrid";

export const ChargingClient: FC<{ cities: CityCharge[] }> = ({ cities }) => (
  <div className="mt-4">
    <div className="mb-4">
      <span className="text-teal-600 text-[11px] font-extrabold tracking-widest uppercase">Charging</span>
      <h1 className="text-[28px] font-bold m-0">补能网络</h1>
    </div>
    <BottomGrid cities={cities} />
  </div>
);
