import React from "react";
import DashboardBox from "./DashboardBox";
import DashboardCharts from "./DashboardCharts";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";

const DashboardPage = () => {
  return (
    <div className="mt-16 ml-sidebar  ">
      <DashboardHeader />
      <DashboardBox />
      <DashboardCharts />
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
