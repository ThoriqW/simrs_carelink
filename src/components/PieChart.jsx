import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 className="text-lg font-bold" style={{ textAlign: "center" }}>Pasien Poliklinik</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
