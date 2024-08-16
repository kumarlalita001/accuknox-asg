import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Charts = () => {
  const cloudAccountData = {
    labels: [],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ["#4F46E5", "#E5E7EB"],
        hoverBackgroundColor: ["#4338CA", "#D1D5DB"],
      },
    ],
  };

  const riskAssessmentData = {
    labels: [],
    datasets: [
      {
        data: [1689, 681, 36, 7253],
        backgroundColor: ["#EF4444", "#F59E0B", "#9CA3AF", "#10B981"],
        hoverBackgroundColor: ["#DC2626", "#D97706", "#6B7280", "#059669"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-xl font-semibold mb-4">CSPM Executive Dashboard</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CSPM Executive Dashboard */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-lg font-bold">Cloud Accounts</div>
          <div className="flex justify-between items-center mt-4">
            <div className="w-48 h-48 relative">
              <Doughnut data={cloudAccountData} />

              <div className="absolute inset-0 top-5 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold">2</span>
                <span className="text-sm text-gray-500">Total</span>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 inline-block mr-2"></span>
                Connected (2)
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gray-500 inline-block mr-2"></span>
                Not Connected (2)
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-lg font-semibold">
            Cloud Account Risk Assessment
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="w-48 h-48 relative">
              <Doughnut data={riskAssessmentData} />
              <div className="absolute inset-0 top-5 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold">9659</span>
                <span className="text-sm text-gray-500">Total</span>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-red-500 inline-block mr-2"></span>
                Warning (681)
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 inline-block mr-2"></span>
                Failed (1689)
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gray-300 inline-block mr-2"></span>
                Not Available (36)
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 inline-block mr-2"></span>
                Passed (7253)
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex justify-center items-center">
          <div className="flex items-center justify-center h-32 text-gray-500">
            No Graph data available!
          </div>
        </div>

        {/* <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-lg font-semibold">Workload Alerts</div>
          <div className="flex items-center justify-center h-32 text-gray-500">
            No Graph data available!
          </div>
        </div> */}
      </div>

      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-14 rounded-lg shadow flex justify-center items-center">
          <div className="flex items-center justify-center h-32 text-gray-500">
            No Graph data available!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
