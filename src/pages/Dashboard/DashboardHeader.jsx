import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="app-title mx-6">
      <div>
        <h1 className="flex items-center">
          <AiFillDashboard />
          Dashboard
        </h1>
        <p>A free and open source Tailwind admin template</p>
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item">
          <Link href="DashboardPage" className=" flex items-center">
            <span>
              <AiFillDashboard />
            </span>
            <span>/Dashboard</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
