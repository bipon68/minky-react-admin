import React from "react";
import { FaAngleRight, FaCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { forms } from "../SidebarList";

function SidebarForms({ setShowTreeview, showTreeview }) {
  const handleTreeview = () => {
    setShowTreeview((prevState) => (prevState === "forms" ? "" : "forms"));
  };

  return (
    <div>
      <button
        className="flex items-center gap-4 px-4 py-3 text-white text-xl"
        onClick={handleTreeview}
      >
        <FaEdit />
        <span className="app-menu__label">Forms</span>
        <div className="treeview-indicator">
          <FaAngleRight
            className={`transition-all duration-300 ease-in-out ${
              showTreeview === "forms" ? "rotate-90" : ""
            }`}
          />
        </div>
      </button>
      <div className={`treeview ${showTreeview === "forms" ? "" : "hidden"}`}>
        {forms.map((items) => (
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

export default SidebarForms;
