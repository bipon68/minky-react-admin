import React from "react";
import { Link } from "react-router-dom";

const IndicatorsDism = () => {
  return (
    <div className="flex gap-6">
      <div className="col-lg-4">
        <div className="bs-component">
          <div className="alert alert-dismissible alert-danger">
            <button className="close" type="button" data-dismiss="alert">
              ×
            </button>
            <strong>Oh snap!</strong>
            <Link className="alert-link" href="#">
              Change a few things up
            </Link>
            and try submitting again.
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="bs-component">
          <div className="alert alert-dismissible alert-success">
            <button className="close" type="button" data-dismiss="alert">
              ×
            </button>
            <strong>Well done!</strong> You successfully read
            <Link className="alert-link" href="#">
              this important alert message
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="bs-component">
          <div className="alert alert-dismissible alert-info">
            <button className="close" type="button" data-dismiss="alert">
              ×
            </button>
            <strong>Heads up!</strong> This
            <Link className="alert-link" href="#">
              alert needs your attention
            </Link>
            , but it's not super important.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorsDism;
