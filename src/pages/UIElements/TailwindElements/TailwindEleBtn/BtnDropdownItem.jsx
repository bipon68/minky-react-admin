import React from "react";
import { Link } from "react-router-dom";

const BtnDropdownItem = () => {
  return (
    <div className=" absolute z-50 w-32  rounded-lg flex justify-center  items-center full bg-gray-300 mt-8 ">
      <div class="grid w-full    ">
        <Link class=" w-full py-1 hover:bg-gray-400" href="#">
          Dropdown link
        </Link>
        <Link class=" w-full py-1 hover:bg-gray-400" href="#">
          Dropdown link
        </Link>
      </div>
    </div>
  );
};

export default BtnDropdownItem;
