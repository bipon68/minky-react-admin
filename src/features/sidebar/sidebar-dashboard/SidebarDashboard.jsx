import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

function SidebarDashboard() {
  return (
    <div>
      <div>
        <Link
          className="flex items-center gap-4 px-4 py-3 text-white text-xl active"
          to="DashboardPage"
        >
          <AiFillDashboard />
          <span className="app-menu__label">Dashboard</span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarDashboard;
