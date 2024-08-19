import React from "react";
import { FaAngleRight, FaCircle, FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarUiElements({ handleTreeview, showTreeview }) {
  console.log(showTreeview);
  return (
    <div>
      <button
        onClick={() => handleTreeview()}
        className="app-menu__item"
        href="#"
      >
        <FaLaptop />
        <span className="app-menu__label">UI Elements</span>
        <FaAngleRight
          className={`transition-all duration-300 ease-in-out ${
            showTreeview === false ? "" : "rotate-90"
          }`}
        />
      </button>
      <ul className={`treeview ${showTreeview === false ? "hidden" : ""}`}>
        <div>
          <Link className="treeview-item" to="tailwindElements">
            <FaCircle /> Tailwind Elements
          </Link>
        </div>
        <div>
          <Link
            className="treeview-item"
            to="https://fontawesome.com/v4.7.0/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCircle /> Font Icons
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="ui-cards.html">
            <FaCircle /> Cards
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="widgets.html">
            <FaCircle /> Widgets
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default SidebarUiElements;
