import React from "react";

const TailwindEleProgress = () => {
  return (
    <div>
      <div className="tile mb-4 mx-6">
        <div className="page-header">
          <h2 className="mb-3 line-head text-3xl font-semibold border-b">
            Progress
          </h2>
        </div>
        <h5 id="progress-basic " className="text-2xl font-semibold">
          Basic
        </h5>
        <div className="bs-component mb-2">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <h5 id="progress-alternatives" className="text-2xl font-semibold">
          Contextual alternatives
        </h5>
        <div className="bs-component">
          <div className="progress mb-2">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <h5 id="progress-multiple" className="text-2xl font-semibold">
          Multiple bars
        </h5>
        <div className="bs-component">
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <h5 id="progress-striped" className="text-2xl font-semibold">
          Striped
        </h5>
        <div className="bs-component">
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-info"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-warning"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <h5 id="progress-animated" className="text-2xl font-semibold">
          Animated
        </h5>
        <div className="bs-component">
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindEleProgress;
