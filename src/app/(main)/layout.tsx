"use client";

import { type FC, type ReactNode, useRef, useCallback } from "react";
import { AppProvider, useAppContext } from "@/lib/app-context";
import Rail from "@/components/Rail";
import Topbar from "@/components/Topbar";

const InnerLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const compareRef = useRef<HTMLDivElement>(null);
  const { patchState } = useAppContext();

  const refresh = useCallback(() => {
    patchState({});
  }, [patchState]);

  return (
    <div className="flex min-h-screen bg-[#eef1f4]">
      <Rail />
      <main className="flex-1 min-w-0 px-6 pb-10 max-md:px-3.5">
        <Topbar
          onJumpCompare={() =>
            compareRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onRefresh={refresh}
        />
        <div ref={compareRef} />
        {children}
      </main>
    </div>
  );
};

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <AppProvider>
    <InnerLayout>{children}</InnerLayout>
  </AppProvider>
);

export default MainLayout;
