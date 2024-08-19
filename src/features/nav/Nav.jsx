import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="app-header">
      <div className="app-header__left">
        <div className="app-header__logo">
          <Link to="index.html">Minky</Link>
        </div>
        {/* Sidebar toggle button */}
        <button className="app-sidebar__toggle" aria-label="Hide Sidebar">
          <IoMenuSharp />
        </button>
      </div>
      {/* Navbar Right Menu */}
      <ul className="app-nav">
        <div className="app-search">
          <input
            className="app-search__input"
            type="search"
            placeholder="Search"
          />
          <button className="app-search__button">
            <FaSearch />
          </button>
        </div>
        {/* Notification Menu */}
        <li className="dropdown mt-1">
          <button className="app-nav__item" aria-label="Show notifications">
            <FaBell />
          </button>
        </li>
        {/* User Menu */}
        <li className="dropdown mt-1">
          <button className="app-nav__item" aria-label="Open Profile Menu">
            <FaUser />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
