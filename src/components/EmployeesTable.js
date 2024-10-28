//src\components\EmployeesTable.js
import React from "react";

function EmployeesTable({ employees }) {
  return (
    <table className="employees-table">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Employee ID</th>
          <th>User ID</th>
          <th>Hire Date</th>
          <th>Event</th>
          <th>Position</th>
          <th>Net Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.fullName}</td>
            <td>{employee.employeeId}</td>
            <td>{employee.userId}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.event}</td>
            <td>{employee.position}</td>
            <td>{employee.netSalary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeesTable;
