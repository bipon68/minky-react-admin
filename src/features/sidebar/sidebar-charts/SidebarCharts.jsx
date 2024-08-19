import React from "react";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarCharts() {
  return (
    <div>
      <div>
        <Link className="app-menu__item" href="charts.html">
          <FaChartPie />
          <span className="app-menu__label">Charts</span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarCharts;
