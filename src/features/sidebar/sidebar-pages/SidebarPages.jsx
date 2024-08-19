import React from "react";
import { FaAngleRight, FaCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

function SidebarPages() {
  return (
    <div>
      <Link className="app-menu__item" href="#">
        <FiFileText />
        <span className="app-menu__label">Pages</span>
        <FaAngleRight />
      </Link>
      <div className="treeview hidden">
        <div>
          <Link className="treeview-item" href="blank-page.html">
            <FaCircle /> Blank Page
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="page-login.html">
            <FaCircle /> Login Page
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="page-lockscreen.html">
            <FaCircle /> Lockscreen Page
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="page-user.html">
            <FaCircle /> User Page
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="page-invoice.html">
            <FaCircle /> Invoice Page
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="page-calendar.html">
            <FaCircle /> Calendar Page
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="page-mailbox.html">
            <FaCircle /> Mailbox
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="page-error.html">
            <FaCircle /> Error Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarPages;
