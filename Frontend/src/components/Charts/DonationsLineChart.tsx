"use client";
import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

const DonationsLineChart = () => {
  const series = [
    {
      name: "Doações (R$)",
      data: [1200, 1500, 1100, 1800, 2000, 1700],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    },
    title: {
      text: "Doações por Mês",
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default DonationsLineChart;
