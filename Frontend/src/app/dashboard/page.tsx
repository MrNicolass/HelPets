"use client";

import AdoptionBarChart from "@/components/Charts/AdoptionBarChart";
import AnimalStatusChart from "@/components/Charts/AnimalStatusChart";
import DonationsLineChart from "@/components/Charts/DonationsLineChart";
import HeatMapChart from "@/components/Charts/HeatMapChart";
import VaccinationPieChart from "@/components/Charts/VaccinationPieChart";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

export default function DashboardPage() {
  return (
    <div>
      <PageTitle title="Dashboard" />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 p-8">
        <StatsCard label="Animais Cadastrados" value={123} />
        <StatsCard label="Tutores Cadastrados" value={78} />
        <StatsCard label="Animais Adotados" value={80} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="bg-white dark:bg-stroke-700 rounded-2xl shadow-lg p-4">
          <AnimalStatusChart />
        </div>
        <div className="bg-white dark:bg-stroke-700 rounded-2xl shadow-lg p-4">
          <HeatMapChart />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="bg-white dark:bg-stroke-700 rounded-2xl shadow-lg p-4">
          <AdoptionBarChart />
        </div>
        <div className="bg-white dark:bg-stroke-700 rounded-2xl shadow-lg p-4">
          <DonationsLineChart />
        </div>
        <div className="bg-white dark:bg-stroke-700 rounded-2xl shadow-lg p-4">
          <VaccinationPieChart />
        </div>
      </div>
    </div>
  );
}
