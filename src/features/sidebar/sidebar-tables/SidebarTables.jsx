import React from "react";
import { FaAngleRight, FaCircle, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarTables() {
  return (
    <div>
      <Link className="app-menu__item" href="#">
        <FaList />
        <span className="app-menu__label">Tables</span>
        <FaAngleRight />
      </Link>
      <ul className="treeview hidden">
        <div>
          <Link className="treeview-item" href="table-basic.html">
            <FaCircle /> Basic Tables
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="table-data-table.html">
            <FaCircle /> Data Tables
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default SidebarTables;
