import React from "react";
import { Link } from "react-router-dom";

const NavsPill = () => {
  return (
    <div>
      <div className="w-full">
        <h3 className=" text-3xl font-semibold">Pills</h3>
        <div className="bs-component">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                Active
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href="#">
                  Separated link
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#">
                Disabled
              </Link>
            </li>
          </ul>
        </div>
        <br />
        <div className="bs-component">
          <ul className="nav nav-pills nav-stacked">
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                Active
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href="#">
                  Separated link
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#">
                Disabled
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavsPill;
