// src/components/StatsCard.js
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"; // Import necessary components from chart.js

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

function StatsCard({ label, value, percentage, chartData }) {
  return (
    <div className="stats-card">
      <h3>{label}</h3>
      <p className="value">{value}</p>
      {percentage && <span className="percentage">{percentage}</span>}
      {chartData && (
        <div style={{ width: "100%", height: "200px" }}>
          <Pie data={chartData} />
        </div>
      )}
    </div>
  );
}

export default StatsCard;
