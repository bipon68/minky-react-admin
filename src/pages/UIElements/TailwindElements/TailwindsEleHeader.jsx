import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";

const TailwindsEleHeader = () => {
  return (
    <div>
      <div className="app-title mt-2">
        <div className="div">
          <h1>
            <i className="fa fa-laptop"></i>Tailwind Elements
          </h1>
          <p>Tailwind Components</p>
        </div>
        <ul className="app-breadcrumb breadcrumb flex items-center gap-1">
          <li className="breadcrumb-item">
            <FaLaptop />
          </li>
          <li className="breadcrumb-item">
            <Link href="#">Tailwind Elements</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TailwindsEleHeader;
