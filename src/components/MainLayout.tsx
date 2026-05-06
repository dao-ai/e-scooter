"use client";

import { type FC, type ReactNode } from "react";
import { AppProvider } from "@/lib/app-context";
import Rail from "@/components/Rail";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <AppProvider>
    <div className="flex min-h-screen bg-[#eef1f4]">
      <Rail />
      <main className="flex-1 min-w-0 px-6 pb-10 max-md:px-3.5">{children}</main>
    </div>
  </AppProvider>
);

export default MainLayout;
