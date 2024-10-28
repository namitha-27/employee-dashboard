// // src/App.js
// import React, { useEffect, useState } from "react";
// import StatsCard from "./components/StatsCard";
// import EmployeesTable from "./components/EmployeesTable";
// import FileActions from "./components/FileActions";
// import Sidebar from "./components/Sidebar";
// import { FaBell } from "react-icons/fa"; // Import Font Awesome bell icon
// import './App.css';

// function App() {
//   const [stats, setStats] = useState({});
//   const [employees, setEmployees] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [viewType, setViewType] = useState("Monthly");

//   useEffect(() => {
//     fetch("http://localhost:5000/stats")
//       .then(response => response.json())
//       .then(data => setStats(data));

//     fetch("http://localhost:5000/employees")
//       .then(response => response.json())
//       .then(data => setEmployees(data));
//   }, []);

//   const filteredEmployees = employees.filter(employee =>
//     employee.fullName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const newHiresChartData = {
//     labels: ["New Hires", "Pending", "Resigned"],
//     values: [stats.newHires || 0, 5, 3],
//   };

//   const activePeopleChartData = {
//     labels: ["Active Employees", "Pending", "Resigned"],
//     values: [stats.activePeople || 0, 5, 3],
//   };

//   const salaryRangeChartData = {
//     labels: ["Below Average", "Average", "Above Average"],
//     values: [30, 50, 20], // Example data
//   };

//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="content-container">
//         <header className="header">
//           <h1 className="header-title">Employee Overview</h1>
//           <div className="profile-container">
//             <FaBell className="notification-icon" /> {/* Notification Icon */}
//             <p className="profile-name">Chris Miguel</p>
//             <span className="profile-role">Payroll Admin</span>
//           </div>
//         </header>

//         <div className="stats-cards">
//           <StatsCard
//             label="Newly Hired People"
//             value={stats.newHires}
//             percentage="+5%"
//             chartData={{
//               labels: newHiresChartData.labels,
//               datasets: [{
//                 data: newHiresChartData.values,
//                 backgroundColor: ["#FF6384", "#FFCE56", "#4BC0C0"],
//               }],
//             }}
//           />
//           <StatsCard
//             label="Active People"
//             value={stats.activePeople}
//             percentage="+5%"
//             chartData={{
//               labels: activePeopleChartData.labels,
//               datasets: [{
//                 data: activePeopleChartData.values,
//                 backgroundColor: ["#36A2EB", "#FFCE56", "#4BC0C0"],
//               }],
//             }}
//           />
//           <StatsCard
//             label="New Hires"
//             value="19"
//             chartData={{
//               labels: newHiresChartData.labels,
//               datasets: [{
//                 data: newHiresChartData.values,
//                 backgroundColor: ["#FF6384", "#FFCE56", "#4BC0C0"],
//               }],
//             }}
//           />
//           <StatsCard
//             label="Salary Range"
//             value="See details"
//             chartData={{
//               labels: salaryRangeChartData.labels,
//               datasets: [{
//                 data: salaryRangeChartData.values,
//                 backgroundColor: ["#FFD700", "#8A2BE2", "#00FA9A"],
//               }],
//             }}
//           />
//         </div>

//         <FileActions viewType={viewType} setViewType={setViewType} />

//         <input
//           type="text"
//           placeholder="Search by Employee name"
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//           className="search-input"
//         />

//         <EmployeesTable employees={filteredEmployees} />
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from "react";
import StatsCard from "./components/StatsCard";
import EmployeesTable from "./components/EmployeesTable";
import FileActions from "./components/FileActions";
import Sidebar from "./components/Sidebar";
import { FaBell } from "react-icons/fa"; // Import Font Awesome bell icon
import './App.css';

function App() {
  // Hardcoded data
  const stats = {
    newHires: 10,
    activePeople: 250,
  };

  const employees = [
    {
      id: 1,
      fullName: "John Doe",
      employeeId: "E001",
      userId: "U001",
      hireDate: "2023-01-15",
      event: "Joined",
      position: "Software Engineer",
      netSalary: "$5000",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      employeeId: "E002",
      userId: "U002",
      hireDate: "2022-07-20",
      event: "Promotion",
      position: "Senior Developer",
      netSalary: "$6000",
    },
    {
      id: 3,
      fullName: "Namitha",
      employeeId: "E003",
      userId: "U003",
      hireDate: "2022-07-20",
      event: "Promotion",
      position: "Senior Developer",
      netSalary: "$6000",
    },
    {
      id: 4,
      fullName: "Chinmaye",
      employeeId: "E004",
      userId: "U004",
      hireDate: "2022-07-20",
      event: "Promotion",
      position: "Senior Developer",
      netSalary: "$6000",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("Monthly");

  const filteredEmployees = employees.filter(employee =>
    employee.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const newHiresChartData = {
    labels: ["New Hires", "Pending", "Resigned"],
    values: [stats.newHires, 5, 3],
  };

  const activePeopleChartData = {
    labels: ["Active Employees", "Pending", "Resigned"],
    values: [stats.activePeople, 5, 3],
  };

  const salaryRangeChartData = {
    labels: ["Below Average", "Average", "Above Average"],
    values: [30, 50, 20], // Example data
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <header className="header">
          <h1 className="header-title">Employee Overview</h1>
          <div className="profile-container">
            <FaBell className="notification-icon" /> {/* Notification Icon */}
            <p className="profile-name">Chris Miguel</p>
            <span className="profile-role">Payroll Admin</span>
          </div>
        </header>

        <div className="stats-cards">
          <StatsCard
            label="Newly Hired People"
            value={stats.newHires}
            percentage="+5%"
            chartData={{
              labels: newHiresChartData.labels,
              datasets: [{
                data: newHiresChartData.values,
                backgroundColor: ["#FF6384", "#FFCE56", "#4BC0C0"],
              }],
            }}
          />
          <StatsCard
            label="Active People"
            value={stats.activePeople}
            percentage="+5%"
            chartData={{
              labels: activePeopleChartData.labels,
              datasets: [{
                data: activePeopleChartData.values,
                backgroundColor: ["#36A2EB", "#FFCE56", "#4BC0C0"],
              }],
            }}
          />
          <StatsCard
            label="New Hires"
            value="19"
            chartData={{
              labels: newHiresChartData.labels,
              datasets: [{
                data: newHiresChartData.values,
                backgroundColor: ["#FF6384", "#FFCE56", "#4BC0C0"],
              }],
            }}
          />
          <StatsCard
            label="Salary Range"
            value="See details"
            chartData={{
              labels: salaryRangeChartData.labels,
              datasets: [{
                data: salaryRangeChartData.values,
                backgroundColor: ["#FFD700", "#8A2BE2", "#00FA9A"],
              }],
            }}
          />
        </div>

        <FileActions viewType={viewType} setViewType={setViewType} />

        <input
          type="text"
          placeholder="Search by Employee name"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <EmployeesTable employees={filteredEmployees} />
      </div>
    </div>
  );
}

export default App;
