import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";

const TailwindsEleHeader = () => {
  return (
    <div>
      <div class="app-title mt-2">
        <div class="div">
          <h1>
            <i class="fa fa-laptop"></i>Tailwind Elements
          </h1>
          <p>Tailwind Components</p>
        </div>
        <ul class="app-breadcrumb breadcrumb flex items-center gap-1">
          <li class="breadcrumb-item">
            <FaLaptop />
          </li>
          <li class="breadcrumb-item">
            <Link href="#">Tailwind Elements</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TailwindsEleHeader;
