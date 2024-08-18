import React from "react";
import { Link } from "react-router-dom";

const TailwindEleList = () => {
  return (
    <div>
      <div className="row ">
        <h3 className="text-3xl pb-3 font-semibold border-b">List groups</h3>
      </div>
      <div className=" flex gap-6 mt-6">
        <div className="w-full">
          <div className="bs-component">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="tag tag-default tag-pill float-xs-right">
                  14
                </span>
                Cras justo odio
              </li>
              <li className="list-group-item">
                <span className="tag tag-default tag-pill float-xs-right">
                  2
                </span>
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item">
                <span className="tag tag-default tag-pill float-xs-right">
                  1
                </span>
                Morbi leo risus
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="bs-component">
            <div className="list-group">
              <Link
                className="list-group-item list-group-item-action active"
                href="#"
              >
                Cras justo odio
              </Link>
              <Link className="list-group-item list-group-item-action" href="#">
                Dapibus ac facilisis in
              </Link>
              <Link
                className="list-group-item list-group-item-action disabled"
                href="#"
              >
                Morbi leo risus
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bs-component">
            <div className="list-group">
              <Link
                className="list-group-item list-group-item-action active"
                href="#"
              >
                <h4 className="list-group-item-heading">
                  List group item heading
                </h4>
                <p className="list-group-item-text">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
              </Link>
              <Link className="list-group-item list-group-item-action" href="#">
                <h4 className="list-group-item-heading">
                  List group item heading
                </h4>
                <p className="list-group-item-text">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindEleList;
