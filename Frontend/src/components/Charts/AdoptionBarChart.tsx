"use client";
import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

const AdoptionBarChart = () => {
  const series = [
    {
      name: "Adoções",
      data: [10, 15, 12, 20, 18, 25],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    },
    title: {
      text: "Adoções por Mês",
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};

export default AdoptionBarChart;
