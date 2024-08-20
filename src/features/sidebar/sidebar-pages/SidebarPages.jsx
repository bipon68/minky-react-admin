import React from "react";
import { FaAngleRight, FaCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

import { pages } from "../Sidebar";

function SidebarPages({ setShowTreeview, showTreeview }) {
  const handleTreeview = () => {
    // Toggle between "pages" and an empty string
    setShowTreeview((prevState) => (prevState === "pages" ? "" : "pages"));
  };
  return (
    <div>
      <div>
        <button
          onClick={() => handleTreeview()}
          className="app-menu__item"
          href="#"
        >
          <FiFileText />
          <span className="app-menu__label">Pages</span>
          <FaAngleRight
            className={`transition-all duration-300 ease-in-out ${
              showTreeview === "pages" ? "rotate-90  " : ""
            }`}
          />
        </button>
        <div className={`treeview ${showTreeview === "pages" ? "" : "hidden"}`}>
          {pages.map((items) => (
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

export default SidebarPages;
