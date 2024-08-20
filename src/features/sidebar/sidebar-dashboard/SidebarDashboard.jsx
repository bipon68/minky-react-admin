import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

function SidebarDashboard() {
  return (
    <div>
      <div>
        <Link className="app-menu__item active" to="DashboardPage">
          <AiFillDashboard />
          <span className="app-menu__label">Dashboard</span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarDashboard;
