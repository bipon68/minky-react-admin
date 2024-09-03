import React from "react";
import { FaAngleRight, FaCircle, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tables } from "../SidebarList";

function SidebarTables({ setShowTreeview, showTreeview }) {
  const handleTreeview = () => {
    setShowTreeview((prevState) => (prevState === "tables" ? "" : "tables"));
  };

  return (
    <div>
      <button
        onClick={handleTreeview}
        className="flex items-center gap-4 px-4 py-3 text-white text-xl"
      >
        <FaList />
        <span className="app-menu__label">Tables</span>
        <FaAngleRight
          className={`transition-all duration-300 ease-in-out ${
            showTreeview === "tables" ? "rotate-90" : ""
          }`}
        />
      </button>
      <div className={`treeview ${showTreeview === "tables" ? "" : "hidden"}`}>
        {tables.map((items) => (
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

export default SidebarTables;
