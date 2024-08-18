import React from "react";
import { Link } from "react-router-dom";

const BtnDropdownItem = () => {
  return (
    <div>
      <div class="dropdown-menu dropdown-menu-right">
        <Link class="dropdown-item" href="#">
          Dropdown link
        </Link>
        <Link class="dropdown-item" href="#">
          Dropdown link
        </Link>
      </div>
    </div>
  );
};

export default BtnDropdownItem;
