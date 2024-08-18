import React from "react";
import TailwindEleJamb from "./TailwindEleContainers/TailwindEleJamb";
import TailwindEleList from "./TailwindEleContainers/TailwindEleList";
import TailwindEleCards from "./TailwindEleContainers/TailwindEleCards";

const TailwindEleContainers = () => {
  return (
    <div>
      <div className="tile mb-4 mx-6">
        <div className="page-header">
          <h2
            className="mb-3 line-head text-4xl font-semibold border-b"
            id="containers"
          >
            Containers
          </h2>
        </div>
        <TailwindEleJamb />
        <TailwindEleList />
        <div className="w-full">
          <h3 className="text-3xl font-semibold mb-3">Cards</h3>
        </div>
        <TailwindEleCards />
      </div>
    </div>
  );
};

export default TailwindEleContainers;
