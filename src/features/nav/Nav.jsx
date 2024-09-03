import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="fixed top-0 left-0 z-50 flex w-full h-14 bg-primary">
      <div className="flex w-full">
        <div className="w-sidebar  flex justify-center items-center bg-[#007d71] font-niconne text-white text-3xl">
          <Link to="index.html">Minky</Link>
        </div>
        {/* Sidebar toggle button */}
        <button className="px-4 text-2xl text-white" aria-label="Hide Sidebar">
          <IoMenuSharp />
        </button>
      </div>
      {/* Navbar Right Menu */}
      <ul className="flex items-center justify-end w-full gap-8 pr-8">
        <div className="flex items-center justify-center p-2 bg-white">
          <input
            className="bg-transparent focus:outline-none"
            type="search"
            placeholder="Search"
          />
          <button className="app-search__button">
            <FaSearch />
          </button>
        </div>
        {/* Notification Menu */}
        <li className="mt-1 dropdown">
          <button
            className="text-xl text-white"
            aria-label="Show notifications"
          >
            <FaBell />
          </button>
        </li>
        {/* User Menu */}
        <li className="mt-1 dropdown">
          <button className="text-xl text-white" aria-label="Open Profile Menu">
            <FaUser />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
