import React from "react";
import { FaAngleRight, FaCircle, FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";

import { uiElements } from "../Sidebar";

function SidebarUiElements({ setShowTreeview, showTreeview }) {
  const handleTreeview = () => {
    // Toggle between "uiElements" and an empty string
    setShowTreeview((prevState) =>
      prevState === "uiElements" ? "" : "uiElements"
    );
  };
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
            showTreeview === "uiElements" ? "rotate-90  " : ""
          }`}
        />
      </button>
      <div
        className={`treeview ${showTreeview === "uiElements" ? "" : "hidden"}`}
      >
        {uiElements.map((items) => (
          <div key={items.id}>
            <Link className="treeview-item" to={items.link}>
              <FaCircle />
              {items.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarUiElements;
