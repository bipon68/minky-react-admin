import React from "react";

const DashboardCharts = () => {
  return (
    <div>
      <div className="flex w-full gap-6 px-6">
        <div className="w-full">
          <div className="tile">
            <h3 className="tile-title">Monthly Sales</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <canvas
                className="embed-responsive-item"
                id="lineChartDemo"
              ></canvas>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="tile">
            <h3 className="tile-title">Support Requests</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <canvas
                className="embed-responsive-item"
                id="pieChartDemo"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
