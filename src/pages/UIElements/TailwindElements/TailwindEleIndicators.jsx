import React from "react";
import IndicatorsAlerts from "./TailwindEleIndicators/IndicatorsAlerts";
import IndicatorsDism from "./TailwindEleIndicators/IndicatorsDism";
import IndicatorsBadge from "./TailwindEleIndicators/IndicatorsBadge";

const TailwindEleIndicators = () => {
  return (
    <div>
      <div className="tile mx-6 mb-4">
        <div className="page-header">
          <h2
            className="mb-3 line-head text-4xl font-semibold border-b"
            id="indicators"
          >
            Indicators
          </h2>
        </div>
        <div>
          <IndicatorsAlerts />
        </div>
        <div>
          <IndicatorsDism />
        </div>
        <IndicatorsBadge />
      </div>
    </div>
  );
};

export default TailwindEleIndicators;
