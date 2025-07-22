import React from "react";
import { DashboardSubsection } from "./sections/DashboardSubsection";
import { ElementUserManagerSubsection } from "./sections/ElementUserManagerSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";

export const Box = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="w-full bg-[#9db2ce] py-4 px-6 sticky top-0 z-10">
        <h1 className="font-medium text-white text-2xl">Admin</h1>
      </header>

      <main className="flex flex-col w-full">
        <DashboardSubsection />
        <ElementUserManagerSubsection />
        <FrameSubsection />
      </main>
    </div>
  );
};
