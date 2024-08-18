import React from "react";
import BtnDropdownItem from "./BtnDropdownItem";

const BtnDropdown = () => {
  return (
    <div>
      <div class="mb-3 bs-component flex gap-1">
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button class="btn btn-primary" type="button">
            Primary
          </button>
          <div class="btn-group" role="group">
            <button
              class="btn btn-primary dropdown-toggle"
              id="btnGroupDrop1"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <BtnDropdownItem />
          </div>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button class="btn btn-success" type="button">
            Success
          </button>
          <div class="btn-group" role="group">
            <button
              class="btn btn-success dropdown-toggle"
              id="btnGroupDrop2"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <BtnDropdownItem />
          </div>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button class="btn btn-info" type="button">
            Info
          </button>
          <div class="btn-group" role="group">
            <button
              class="btn btn-info dropdown-toggle"
              id="btnGroupDrop3"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <BtnDropdownItem />
          </div>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button class="btn btn-danger" type="button">
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
            <BtnDropdownItem />
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
