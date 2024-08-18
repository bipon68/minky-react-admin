import React from "react";
import NavsTabs from "./TailwindEleNavs/NavsTabs";
import NavsPill from "./TailwindEleNavs/NavsPill";
import NavsBreadCrumbs from "./TailwindEleNavs/NavsBreadCrumbs";
import NavsPagination from "./TailwindEleNavs/NavsPagination";

const TailwindEleNavs = () => {
  return (
    <div>
      <div className="tile mb-4 mx-6">
        <div className="page-header">
          <h2
            className="mb-3 line-head text-3xl font-semibold border-b"
            id="navs"
          >
            Navs
          </h2>
        </div>
        <div className="flex gap-6 w-full mb-28 justify-between">
          <div className="w-full">
            <NavsTabs />
          </div>
          <div className="w-full">
            <NavsPill />
          </div>
        </div>
        <div className="flex  gap-6">
          <div className="w-full ">
            <NavsBreadCrumbs />
          </div>
          <div className="w-full">
            <NavsPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindEleNavs;
