// // src/components/PieChart.js
// import React from "react";
// import { Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   Title,
// } from "chart.js"; // Import necessary components from chart.js

// // Register the necessary components
// ChartJS.register(ArcElement, Tooltip, Legend, Title);

// const PieChart = ({ data }) => {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         data: data.values,
//         backgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#4BC0C0",
//           "#9966FF",
//         ],
//         hoverBackgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#4BC0C0",
//           "#9966FF",
//         ],
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Employee Status Overview',
//       },
//     },
//   };

//   return (
//     <div style={{ width: "100%", height: "300px" }}>
//       <Pie data={chartData} options={options} />
//     </div>
//   );
// };

// export default PieChart;
