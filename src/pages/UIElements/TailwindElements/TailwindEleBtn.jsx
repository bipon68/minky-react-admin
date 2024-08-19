import React from "react";
import BtnButton from "./TailwindEleBtn/BtnButton";
import BtnDisabled from "./TailwindEleBtn/BtnDisabled";
import BtnOutline from "./TailwindEleBtn/BtnOutline";
import BtnDropdown from "./TailwindEleBtn/BtnDropdown";
import BtnActive from "./TailwindEleBtn/BtnActive";
import BtnToolbar from "./TailwindEleBtn/BtnToolbar";

const TailwindEleBtn = () => {
  return (
    <div className=" px-6">
      <div className=" tile">
        <div className="page-header  ">
          <h2 className="text-3xl mb-3 border-b " id="buttons">
            Buttons
          </h2>
        </div>
        <div className=" mb-4 flex w-full justify-between ">
          <div className="  w-full">
            <div className="">
              <BtnButton />
              <BtnDisabled />
              <BtnOutline />
              <BtnDropdown />
            </div>
          </div>
          <div className=" w-full">
            <div className=" grid gap-2">
              <p className="bs-component pb-1">
                <button
                  className="btn btn-primary text-2xl btn-block"
                  type="button"
                >
                  Block level button
                </button>
              </p>
              <BtnActive />
              <BtnToolbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindEleBtn;
