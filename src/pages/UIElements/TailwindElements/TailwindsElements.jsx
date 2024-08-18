import React from "react";
import TailwindsEleHeader from "./TailwindsEleHeader";
import TailwindEleBtn from "./TailwindEleBtn";
import TailwindEleTypo from "./TailwindEleTypo";
import TailwindEleNavs from "./TailwindEleNavs";
import TailwindEleIndicators from "./TailwindEleIndicators";
import TailwindEleProgress from "./TailwindEleProgress";
import TailwindEleContainers from "./TailwindEleContainers";
import TailwindEleDialogs from "./TailwindEleDialogs/TailwindEleDialogs";

const TailwindsElements = () => {
  return (
    <div className="mt-14 ml-56 ">
      <main className="app-content">
        <TailwindsEleHeader />

        <TailwindEleBtn />
        <TailwindEleTypo />

        <TailwindEleNavs />
        <TailwindEleIndicators />
        <TailwindEleProgress />

        <TailwindEleContainers />

        <TailwindEleDialogs />
      </main>
    </div>
  );
};

export default TailwindsElements;
