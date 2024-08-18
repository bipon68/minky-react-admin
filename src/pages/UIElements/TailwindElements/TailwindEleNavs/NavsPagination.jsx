import React from "react";
import { Link } from "react-router-dom";

const NavsPagination = () => {
  return (
    <div>
      <h2
        className="mb-3 line-head text-4xl font-semibold border-b"
        id="pagination"
      >
        Pagination
      </h2>
      <div className="bs-component grid gap-3">
        <div>
          <ul className="pagination">
            <li className="page-item disabled">
              <Link className="page-link" href="#">
                «
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" href="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                »
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pagination pagination-lg">
            <li className="page-item disabled">
              <Link className="page-link" href="#">
                «
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" href="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                »
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pagination pagination-sm">
            <li className="page-item disabled">
              <Link className="page-link" href="#">
                «
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" href="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                »
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavsPagination;
