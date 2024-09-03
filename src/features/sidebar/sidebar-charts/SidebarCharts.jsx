import React from "react";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarCharts() {
  return (
    <div>
      <div>
        <Link
          className="flex items-center gap-4 px-4 py-3 text-white text-xl"
          href="charts.html"
        >
          <FaChartPie />
          <span className="app-menu__label">Charts</span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarCharts;
