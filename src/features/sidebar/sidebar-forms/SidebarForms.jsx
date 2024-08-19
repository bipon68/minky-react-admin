import React from "react";
import { FaAngleRight, FaCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarForms({ handleTreeview, showTreeview }) {
  return (
    <div>
      <button className="app-menu__item" onClick={() => handleTreeview()}>
        <FaEdit />
        <span className="app-menu__label">Forms</span>
        <div className="treeview-indicator">
          <FaAngleRight />
        </div>
      </button>
      <div className={`treeview ${showTreeview === false ? "hidden" : ""}`}>
        <div>
          <Link className="treeview-item" href="form-components.html">
            <FaCircle /> Form Components
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="form-custom.html">
            <FaCircle /> Custom Components
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="form-samples.html">
            <FaCircle /> Form Samples
          </Link>
        </div>
        <div>
          <Link className="treeview-item" href="form-notifications.html">
            <FaCircle /> Form Notifications
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarForms;
