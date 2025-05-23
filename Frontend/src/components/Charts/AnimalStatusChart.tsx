"use client";
import ReactApexChart from "react-apexcharts";

export default function AnimalStatusChart() {
  const options = {
    labels: ["Saudável", "Machucado", "Doente"],
    colors: ["#10B981", "#F59E0B", "#EF4444"],
    legend: { position: "bottom" as "bottom" },
  };

  const series = [45, 25, 30]; // Exemplo fictício

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height={300}
    />
  );
}
