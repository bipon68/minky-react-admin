import React from "react";
import { Link } from "react-router-dom";

const IndicatorsAlerts = () => {
  return (
    <div>
      <div className="">
        <h4 className="text-xl font-semibold">Alerts</h4>
        <div className="bs-component">
          <div className="alert alert-dismissible alert-warning">
            <button className="close" type="button" data-dismiss="alert">
              ×
            </button>
            <h4 className="text-xl font-semibold">Warning!</h4>
            <p>
              Best check yo self, you're not looking too good. Nulla vitae elit
              libero, a pharetra augue. Praesent commodo cursus magna,
              <Link className="alert-link" href="#">
                vel scelerisque nisl consectetur et
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorsAlerts;
