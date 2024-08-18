import React from "react";
import { Link } from "react-router-dom";

const TailwindEleJamb = () => {
  return (
    <div>
      <div className="bs-component">
        <div className="jumbotron grid gap-8">
          <h1 className="display-3">Jumbotron</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Link className="btn btn-primary btn-lg" href="#">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TailwindEleJamb;
