import React from "react";
import { Link } from "react-router-dom";

const NavsBreadCrumbs = () => {
  return (
    <div>
      <h2
        className="mb-3 line-head text-4xl font-semibold border-b"
        id="nav-breadcrumbs"
      >
        Breadcrumbs
      </h2>
      <div className="bs-component">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Home</li>
        </ol>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="#">Home</Link>
          </li>
          <li className="breadcrumb-item active">Library</li>
        </ol>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#">Library</Link>
          </li>
          <li className="breadcrumb-item active">Data</li>
        </ol>
      </div>
    </div>
  );
};

export default NavsBreadCrumbs;
