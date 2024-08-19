import React, { useState } from "react";
import userphoto from "../../assests/img/profile.jpg";
import {
  FaAngleRight,
  FaChartPie,
  FaCircle,
  FaEdit,
  FaLaptop,
  FaList,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

function SideBar({ isSidebarOpen }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

<<<<<<< Updated upstream
  const handleTreeviewToggle = (index) => {
    setExpandedMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <aside className={`app-sidebar ${isSidebarOpen ? "sidenav-toggled" : ""}`}>
      <div className="app-sidebar__user">
        <img className="size-14 rounded-full" src={userphoto} alt="User" />
        <div>
          <p className="app-sidebar__user-name">John Doe</p>
          <p className="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
      <ul className="app-menu">
        <li>
          <Link className="app-menu__item active" to="DashboardPage">
            <AiFillDashboard />
            <span className="app-menu__label">Dashboard</span>
          </Link>
        </li>
        <li className={`treeview ${expandedMenu === 0 ? "is-expanded" : ""}`}>
          <Link
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(0);
            }}
          >
            <FaLaptop />
            <span className="app-menu__label">UI Elements</span>
            <FaAngleRight />
          </Link>
          <ul className={`treeview-menu ${expandedMenu === 0 ? "show" : ""}`}>
            <li>
              <Link className="treeview-item" to="tailwindElements">
                <FaCircle /> Tailwind Elements
              </Link>
            </li>
            <li>
              <Link
                className="treeview-item"
                href="https://fontawesome.com/v4.7.0/icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCircle /> Font Icons
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="ui-cards.html">
                <FaCircle /> Cards
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="widgets.html">
                <FaCircle /> Widgets
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="app-menu__item" href="charts.html">
            <FaChartPie />
            <span className="app-menu__label">Charts</span>
          </Link>
        </li>
        <li className={`treeview ${expandedMenu === 1 ? "is-expanded" : ""}`}>
          <Link
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(1);
            }}
          >
            <FaEdit />
            <span className="app-menu__label">Forms</span>
            <FaAngleRight />
          </Link>
          <ul className={`treeview-menu ${expandedMenu === 1 ? "show" : ""}`}>
            <li>
              <Link className="treeview-item" href="form-components.html">
                <FaCircle /> Form Components
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="form-custom.html">
                <FaCircle /> Custom Components
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="form-samples.html">
                <FaCircle /> Form Samples
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="form-notifications.html">
                <FaCircle /> Form Notifications
              </Link>
            </li>
          </ul>
        </li>
        <li className={`treeview ${expandedMenu === 2 ? "is-expanded" : ""}`}>
          <Link
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(2);
            }}
          >
            <FaList />
            <span className="app-menu__label">Tables</span>
            <FaAngleRight />
          </Link>
          <ul className={`treeview-menu ${expandedMenu === 2 ? "show" : ""}`}>
            <li>
              <Link className="treeview-item" href="table-basic.html">
                <FaCircle /> Basic Tables
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="table-data-table.html">
                <FaCircle /> Data Tables
              </Link>
            </li>
          </ul>
        </li>
        <li className={`treeview ${expandedMenu === 3 ? "is-expanded" : ""}`}>
          <Link
            className="app-menu__item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTreeviewToggle(3);
            }}
          >
            <FiFileText />
            <span className="app-menu__label">Pages</span>
            <FaAngleRight />
          </Link>
          <ul className={`treeview-menu ${expandedMenu === 3 ? "show" : ""}`}>
            <li>
              <Link className="treeview-item" href="blank-page.html">
                <FaCircle /> Blank Page
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="page-login.html">
                <FaCircle /> Login Page
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="page-lockscreen.html">
                <FaCircle /> Lockscreen Page
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="page-user.html">
                <FaCircle /> User Page
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="page-invoice.html">
                <FaCircle /> Invoice Page
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="page-calendar.html">
                <FaCircle /> Calendar Page
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="page-mailbox.html">
                <FaCircle /> Mailbox
              </Link>
            </li>
            <li>
              <Link className="treeview-item" href="page-error.html">
                <FaCircle /> Error Page
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
=======
function SideBar() {
  const [showTreeview, setShowTreeview] = useState("");

  return (
    <div className="app-sidebar">
      <SidebarUser />
      <SidebarDashboard />
      <SidebarUiElements
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
      <SidebarCharts />
      <SidebarForms
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
      <SidebarTables
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
      <SidebarPages
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
    </div>
>>>>>>> Stashed changes
  );
}

export default SideBar;
