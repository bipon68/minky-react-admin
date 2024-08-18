import React from "react";
import DashboardBox from "./DashboardBox";
import DashboardCharts from "./DashboardCharts";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";

const DashboardPage = () => {
  return (
    <div className="mt-20 ml-56 ">
      <main className="app-content">
        <DashboardHeader />
        <DashboardBox />
        <DashboardCharts />
        <DashboardContent />
      </main>
    </div>
  );
};

export default DashboardPage;
