import React from "react";
import { Link } from "react-router-dom";

const TailwindEleBtn = () => {
  return (
    <div className=" px-6">
      <div className=" tile">
        <div class="page-header  ">
          <h2 class="text-3xl mb-3 border-b " id="buttons">
            Buttons
          </h2>
        </div>
        <div class=" mb-4 flex w-full justify-between ">
          <div class="  w-full">
            <div class="">
              <div class="bs-component pb-1 flex gap-1">
                <button class="btn btn-primary" type="button">
                  Primary
                </button>
                <button class="btn btn-secondary" type="button">
                  Secondary
                </button>
                <button class="btn btn-success" type="button">
                  Success
                </button>
                <button class="btn btn-info" type="button">
                  Info
                </button>
                <button class="btn btn-warning" type="button">
                  Warning
                </button>
                <button class="btn btn-danger" type="button">
                  Danger
                </button>
                <button class="btn btn-link" type="button">
                  Link
                </button>
              </div>
              <div class="bs-component pb-1 flex gap-1">
                <button class="btn btn-primary disabled" type="button">
                  Primary
                </button>
                <button class="btn btn-secondary disabled" type="button">
                  Secondary
                </button>
                <button class="btn btn-success disabled" type="button">
                  Success
                </button>
                <button class="btn btn-info disabled" type="button">
                  Info
                </button>
                <button class="btn btn-warning disabled" type="button">
                  Warning
                </button>
                <button class="btn btn-danger disabled" type="button">
                  Danger
                </button>
                <button class="btn btn-link disabled" type="button" disabled="">
                  Link
                </button>
              </div>
              <div class="bs-component pb-1 flex gap-1">
                <button class="btn btn-outline-primary" type="button">
                  Primary
                </button>
                <button class="btn btn-outline-secondary" type="button">
                  Secondary
                </button>
                <button class="btn btn-outline-success" type="button">
                  Success
                </button>
                <button class="btn btn-outline-info" type="button">
                  Info
                </button>
                <button class="btn btn-outline-warning" type="button">
                  Warning
                </button>
                <button class="btn btn-outline-danger" type="button">
                  Danger
                </button>
              </div>
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
                    <div class="dropdown-menu dropdown-menu-right">
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
                    </div>
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
                    <div class="dropdown-menu dropdown-menu-right">
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
                    </div>
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
                    <div class="dropdown-menu dropdown-menu-right">
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
                    </div>
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
                    <div class="dropdown-menu dropdown-menu-right">
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Dropdown link
                      </Link>
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
          </div>
          <div className=" w-full">
            <div class=" grid gap-2">
              <p class="bs-component pb-1">
                <button
                  class="btn btn-primary text-2xl btn-block"
                  type="button"
                >
                  Block level button
                </button>
              </p>
              <div class="bs-component">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-primary active">
                    <input type="checkbox" checked="" autocomplete="off" />{" "}
                    Active
                  </label>
                  <label class="btn btn-primary">
                    <input type="checkbox" autocomplete="off" /> Check
                  </label>
                  <label class="btn btn-primary">
                    <input type="checkbox" autocomplete="off" /> Check
                  </label>
                </div>
              </div>
              <div class="bs-component">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-primary active">
                    <input
                      id="option1"
                      type="radio"
                      name="options"
                      autocomplete="off"
                      checked=""
                    />
                    Active
                  </label>
                  <label class="btn btn-primary">
                    <input
                      id="option2"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    />
                    Radio
                  </label>
                  <label class="btn btn-primary">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    />
                    Radio
                  </label>
                </div>
              </div>
              <div class="bs-component">
                <div
                  class=" btn-group-vertical grid w-fit"
                  data-toggle="buttons"
                >
                  <button class="btn btn-primary" type="button">
                    Button
                  </button>
                  <button class="btn btn-primary" type="button">
                    Button
                  </button>
                  <button class="btn btn-primary" type="button">
                    Button
                  </button>
                  <button class="btn btn-primary" type="button">
                    Button
                  </button>
                  <button class="btn btn-primary" type="button">
                    Button
                  </button>
                  <button class="btn btn-primary" type="button">
                    Button
                  </button>
                </div>
              </div>
              <div class="bs-component">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-secondary" type="button">
                    Left
                  </button>
                  <button class="btn btn-secondary" type="button">
                    Middle
                  </button>
                  <button class="btn btn-secondary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div class="bs-component">
                <div
                  class="btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    class="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button class="btn btn-secondary" type="button">
                      1
                    </button>
                    <button class="btn btn-secondary" type="button">
                      2
                    </button>
                    <button class="btn btn-secondary" type="button">
                      3
                    </button>
                    <button class="btn btn-secondary" type="button">
                      4
                    </button>
                  </div>
                  <div
                    class="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <button class="btn btn-secondary" type="button">
                      5
                    </button>
                    <button class="btn btn-secondary" type="button">
                      6
                    </button>
                    <button class="btn btn-secondary" type="button">
                      7
                    </button>
                  </div>
                  <div class="btn-group" role="group" aria-label="Third group">
                    <button class="btn btn-secondary" type="button">
                      8
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindEleBtn;
