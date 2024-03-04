import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Data } from "../../../utils/Data";
import Sidebar from "../../../components/Sidebar";
import PieChart from "../../../components/PieChart";
import iconRawatJalan from "../../../assets/icons/rawat-jalan.svg";

const Outpatient = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.poli),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#12586B",
          "#AFD3E2",
          "#19A7CE",
          "#146C94",
          "#262626",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="bg-background flex">
        <Sidebar />
        <div className="px-10 py-10 w-full">
          <h1 className="font-bold text-2xl">Selamat datang, Admin</h1>
          <div className="mt-10">
            <div className="flex gap-2 items-center font-bold">
              <img className="w-10" src={iconRawatJalan} alt="iconrawatjalan" />
              <p className="text-lg">Rawat Jalan</p>
            </div>
            <div className="flex mt-10 gap-3">
              <div className="bg-white p-5 rounded-lg flex-1 shadow-lg">
                <PieChart chartData={chartData} />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <div className="p-5 bg-white shadow-lg rounded-lg">
                  <p className="text-lg font-bold">Pria</p>
                </div>
                <div className="p-5 bg-white shadow-lg rounded-lg">
                  <p className="text-lg font-bold">Wanita</p>
                </div>
                <div className="py-5 bg-white shadow-lg rounded-lg">
                  <div className="px-5 mb-5 text-lg font-bold">
                    <p>Status</p>
                  </div>
                  <div className="bg-lime-300 w-full px-5 py-3">
                    <p>Proses</p>
                  </div>
                  <div className="bg-red-400 w-full px-5 py-3">
                    <p>Batal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outpatient;
