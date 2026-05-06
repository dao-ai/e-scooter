"use client";

import { type FC, type ReactNode, useState, useCallback } from "react";
import { AppProvider, useAppContext } from "@/lib/app-context";
import Rail from "@/components/Rail";
import Topbar from "@/components/Topbar";
import CompareModal from "@/components/CompareModal";

const InnerLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [compareOpen, setCompareOpen] = useState(false);
  const { models, patchState } = useAppContext();

  const refresh = useCallback(() => {
    patchState({});
  }, [patchState]);

  return (
    <div className="flex min-h-screen bg-[#eef1f4]">
      <Rail />
      <main className="flex-1 min-w-0 px-6 pb-10 max-md:px-3.5">
        <Topbar
          onJumpCompare={() => setCompareOpen(true)}
          onRefresh={refresh}
        />
        {children}
      </main>
      <CompareModal
        models={models}
        open={compareOpen}
        onClose={() => setCompareOpen(false)}
      />
    </div>
  );
};

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <AppProvider>
    <InnerLayout>{children}</InnerLayout>
  </AppProvider>
);

export default MainLayout;
