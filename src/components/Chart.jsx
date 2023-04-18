import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

export default function BarSection() {
   const [chartData, setChartData] = useState({ datasets: [] });
   const [chartOptions, setChartOptions] = useState({});

   useEffect(() => {
      setChartData({
         labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
         datasets: [
            {
               label: "Sales($)",
               data: [18354, 22687, 26895, 21587, 22287, 28596, 30059],
               borderColor: "rgb(226, 232, 240)",
               backgroundColor: "rgb(5, 150, 105)",
            },
         ],
      });
      setChartOptions({
         plugins: {
            legend: {
               position: "top",
            },
            title: {
               display: true,
               text: "Daily Revenue",
            },
         },
         maintainAspectRatio: false,
         responsive: true,
      });
   }, []);

   return (
      <div className="h-[50vh] md:h-[60vh] min-w-[279.2px] p-4 border-2 border-slate-700 rounded-md bg-slate-900">
         <Bar data={chartData} options={chartOptions} />
      </div>
   );
}
