import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Nav({ handleSidebar }) {
  return (
    <div className="app-header">
      <a className="app-header__logo" href="index.html">
        Minky
      </a>
      {/* Sidebar toggle button */}
      <button
        className="app-sidebar__toggle"
        aria-label="Hide Sidebar"
        onClick={handleSidebar}
      >
        <IoMenuSharp />
      </button>
      {/* Navbar Right Menu */}
      <ul className="app-nav">
        <li className="app-search">
          <input
            className="app-search__input"
            type="search"
            placeholder="Search"
          />
          <button className="app-search__button">
            <FaSearch />
          </button>
        </li>
        {/* Notification Menu */}
        <li className="dropdown mt-1">
          <button
            className="app-nav__item"
            aria-label="Show notifications"
            onClick={() => {
              /* Handle notifications click */
            }}
          >
            <FaBell />
          </button>
        </li>
        {/* User Menu */}
        <li className="dropdown mt-1">
          <button
            className="app-nav__item"
            aria-label="Open Profile Menu"
            onClick={() => {
              /* Handle profile menu click */
            }}
          >
            <FaUser />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
