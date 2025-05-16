"use client";

import PageTitle from "@/components/PageTitle";
import PieChartPage from "../piechart/page";

export default function LoremPage() {
  return (
    <div>
      <PageTitle title="Home" />
      <div className="grid grid-cols-4 gap-4 p-8">
        <div className="bg-stroke-200 dark:bg-stroke-700 rounded-2xl shadow-lg">
          <PieChartPage />
        </div>
        <div className="bg-stroke-200 dark:bg-stroke-700 rounded-2xl shadow-lg"></div>
        <div className="bg-stroke-200 dark:bg-stroke-700 rounded-2xl shadow-lg"></div>
        <div className="bg-stroke-200 dark:bg-stroke-700 rounded-2xl shadow-lg"></div>
      </div>
    </div>
  );
}
