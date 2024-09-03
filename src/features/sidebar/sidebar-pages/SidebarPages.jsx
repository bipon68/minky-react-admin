import React from "react";
import { FaAngleRight, FaCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

import { pages } from "../SidebarList";

function SidebarPages({ setShowTreeview, showTreeview }) {
  const handleTreeview = () => {
    // Toggle between "pages" and an empty string
    setShowTreeview((prevState) => (prevState === "pages" ? "" : "pages"));
  };

  return (
    <div>
      <button
        onClick={handleTreeview} // Directly use the function reference
        className="flex items-center gap-4 px-4 py-3 text-xl text-white"
      >
        <FiFileText />
        <span className="text-base text-whitewhite">Pages</span>
        <FaAngleRight
          className={`transition-all duration-300 ease-in-out ${
            showTreeview === "pages" ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        className={`text-white text-sm bg-[#2a383e] transition-all duration-500 ease-in-out overflow-hidden ${
          showTreeview === "pages" ? "max-h-[300px]" : "max-h-0 opacity-0"
        }`}
      >
        {pages.map(
          (
            item // Change `items` to `item` for clarity
          ) => (
            <div key={item.id}>
              <Link
                className="flex pl-4 w-full items-center gap-4 py-2 hover:bg-[#222d32]"
                to={item.link}
              >
                <FaCircle />
                {item.title}
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SidebarPages;
