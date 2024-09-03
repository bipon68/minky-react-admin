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
        className="flex items-center gap-4 px-4 py-3 text-xl text-white"
      >
        <FaList />
        <span className="text-base text-whitewhite">Tables</span>
        <FaAngleRight
          className={`transition-all duration-300 ease-in-out ${
            showTreeview === "tables" ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        className={`text-white text-sm bg-[#2a383e] transition-all duration-500 ease-in-out overflow-hidden ${
          showTreeview === "tables" ? "max-h-[75px]" : "max-h-0 opacity-0"
        }`}
      >
        {tables.map((items) => (
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

export default SidebarTables;
