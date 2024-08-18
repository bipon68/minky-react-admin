import React from "react";
import { Link } from "react-router-dom";
import TailwindsEleHeader from "./TailwindsEleHeader";
import TailwindEleBtn from "./TailwindEleBtn";
import TailwindEleTypo from "./TailwindEleTypo";
import TailwindEleNavs from "./TailwindEleNavs";
import TailwindEleIndicators from "./TailwindEleIndicators";

const TailwindsElements = () => {
  return (
    <div className="mt-14 ml-56 ">
      <main className="app-content">
        <TailwindsEleHeader />

        <TailwindEleBtn />
        <TailwindEleTypo />

        <TailwindEleNavs />
        <TailwindEleIndicators />
        <div className="tile mb-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h2 className="mb-3 line-head text-3xl font-semibold">
                  Progress
                </h2>
              </div>
              <h5 id="progress-basic " className="text-2xl font-semibold">
                Basic
              </h5>
              <div className="bs-component mb-2">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-alternatives" className="text-2xl font-semibold">
                Contextual alternatives
              </h5>
              <div className="bs-component">
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-multiple" className="text-2xl font-semibold">
                Multiple bars
              </h5>
              <div className="bs-component">
                <div className="progress mb-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-striped" className="text-2xl font-semibold">
                Striped
              </h5>
              <div className="bs-component">
                <div className="progress mb-2">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar progress-bar-striped bg-warning"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-animated" className="text-2xl font-semibold">
                Animated
              </h5>
              <div className="bs-component">
                <div className="progress mb-2">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tile mb-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h2
                  className="mb-3 line-head text-3xl font-semibold"
                  id="containers"
                >
                  Containers
                </h2>
              </div>
              <div className="bs-component">
                <div className="jumbotron">
                  <h1 className="display-3">Jumbotron</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Link className="btn btn-primary btn-lg" href="#">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-3xl font-semibold">List groups</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
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
            <div className="col-lg-4">
              <div className="bs-component">
                <div className="list-group">
                  <Link
                    className="list-group-item list-group-item-action active"
                    href="#"
                  >
                    Cras justo odio
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
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
            <div className="col-lg-4">
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
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <h4 className="list-group-item-heading">
                      List group item heading
                    </h4>
                    <p className="list-group-item-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-3xl font-semibold">Cards</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="bs-component">
                <div className="card mb-3 text-white bg-primary">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 text-white bg-success">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 text-white bg-info">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 text-white bg-warning">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 text-white bg-danger">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 text-black bg-light">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 text-white bg-dark">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bs-component">
                <div className="card mb-3 border-primary">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 border-success">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 border-info">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 border-warning">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 border-danger">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 border-light">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card mb-3 border-dark">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bs-component">
                <div className="card">
                  <h4 className="card-header text-2xl font-semibold">
                    Card header
                  </h4>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <h6 className="card-subtitle text-muted">
                      Support card subtitle
                    </h6>
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link className="card-link" href="#">
                      Card link
                    </Link>
                    <Link className="card-link" href="#">
                      Another link
                    </Link>
                  </div>
                  <div className="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tile mb-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h2
                  className="mb-3 line-head text-2xl font-semibold"
                  id="dialogs"
                >
                  Dialogs
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="text-xl font-semibold">Modals</h4>
              <div className="bs-component">
                <div className="modal">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-2xl font-semibold">
                          Modal title
                        </h5>
                        <button
                          className="close"
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Modal body text goes here.</p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-primary" type="button">
                          Save changes
                        </button>
                        <button
                          className="btn btn-secondary"
                          type="button"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-2xl font-semibold">Popovers</h4>
              <div className="bs-component">
                <button
                  className="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="left"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Left
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Top
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="bottom"
                  data-content="Vivamus					sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Bottom
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Right
                </button>
              </div>
              <h4 className="text-2xl font-semibold">Tooltips</h4>
              <div className="bs-component">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Tooltip on left"
                >
                  Left
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Tooltip on top"
                >
                  Top
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Tooltip on bottom"
                >
                  Bottom
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="Tooltip on right"
                >
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TailwindsElements;
