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
        className="flex items-center gap-4 px-4 py-3 text-xl text-white"
        onClick={handleTreeview}
      >
        <FaEdit />
        <span className="text-base text-whitewhite">Forms</span>
        <div className="treeview-indicator">
          <FaAngleRight
            className={`transition-all duration-300 ease-in-out ${
              showTreeview === "forms" ? "rotate-90" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`text-white text-sm bg-[#2a383e] transition-all duration-500 ease-in-out overflow-hidden ${
          showTreeview === "forms" ? "max-h-[150px]" : "max-h-0 opacity-0"
        }`}
      >
        {forms.map((items) => (
          <div key={items.id}>
            <Link
              className="flex pl-4 w-full items-center gap-4 py-2 hover:bg-[#222d32]"
              to={items.link}
            >
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
