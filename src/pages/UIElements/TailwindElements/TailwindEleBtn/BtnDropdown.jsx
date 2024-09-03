import React, { useState } from "react";
import BtnDropdownItem from "./BtnDropdownItem";

const BtnDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (id) => {
    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <div>
      <div class="mb-3 flex gap-2">
        <div class="flex gap-2 px-3 py-2 font-medium text-white  rounded-md bg-primary hover:drop-shadow">
          <button class="  " type="button">
            Primary
          </button>

          <div class="btn-group" role="group">
            <button
              class=" dropdown-toggle"
              id="btnGroupDrop1"
              type="button"
              onClick={handleOpen}
            ></button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen && isOpen === "id" ? "max-h-screen " : "hidden"
              }`}
            >
              <BtnDropdownItem />
            </div>
          </div>
        </div>
        <div class="flex gap-2 px-3 py-2 font-medium text-white  rounded-md bg-success hover:drop-shadow">
          <button class="" type="button">
            Success
          </button>
          <div class="btn-group" role="group">
            <button
              class="btn btn-success dropdown-toggle"
              id="btnGroupDrop2"
              type="button"
              onClick={handleOpen}
            ></button>
            <div
              className={` overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-screen " : "hidden"
              }`}
            >
              <BtnDropdownItem />
            </div>
          </div>
        </div>
        <div class="flex gap-2 px-3 py-2 font-medium text-white  rounded-md bg-info hover:drop-shadow">
          <button class="" type="button">
            Info
          </button>
          <div class="btn-group" role="group">
            <button
              class="btn btn-info dropdown-toggle"
              id="btnGroupDrop3"
              type="button"
              onClick={handleOpen}
            ></button>

            <div
              className={` overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-screen " : "hidden"
              }`}
            >
              <BtnDropdownItem />
            </div>
          </div>
        </div>
        <div class="flex gap-2 px-3 py-2 font-medium text-white  rounded-md bg-danger hover:drop-shadow">
          <button class="" type="button">
            Danger
          </button>
          <div class="btn-group" role="group">
            <button
              class="btn btn-danger dropdown-toggle"
              id="btnGroupDrop4"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div
              className={` overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-screen " : "max-h-0"
              }`}
            >
              <BtnDropdownItem />
            </div>
          </div>
        </div>
      </div>
      <div class="bs-component ">
        <button class="btn btn-primary btn-lg mr-1" type="button">
          Large button
        </button>
        <button class="btn btn-primary mr-1" type="button">
          Default button
        </button>
        <button class="btn btn-primary btn-sm mr-1" type="button">
          Small button
        </button>
      </div>
    </div>
  );
};

export default BtnDropdown;
