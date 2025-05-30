"use client";
import ReactApexChart from "react-apexcharts";

const VaccinationPieChart = () => {
  const series = [80, 30]; // Vacinados, não vacinados
  const options = {
    labels: ["Vacinados", "Não Vacinados"],
    title: {
      text: "Status de Vacinação",
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="pie" height={350} />
  );
};

export default VaccinationPieChart;
