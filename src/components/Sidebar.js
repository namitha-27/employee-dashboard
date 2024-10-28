import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/assets/logo.jpeg" alt="Company Logo" className="company-logo" />
      </div>
      <div className="sidebar-icons">
        <div className="icon">&#128100;</div> {/* 👤 */}
        <div className="icon">&#128181;</div> {/* 💲 */}
        <div className="icon">&#128188;</div> {/* 💼 */}
        <div className="icon">&#128200;</div> {/* 📈 */}
      </div>
      <div className="gap"></div> {/* Gap between the two groups of icons */}
      <div className="sidebar-icons end-icons">
        <div className="icon">&#128202;</div> {/* 📈 */}
        <div className="icon">&#9881;</div>   {/* ⚙ */}
      </div>
    </div>
  );
}

export default Sidebar;
