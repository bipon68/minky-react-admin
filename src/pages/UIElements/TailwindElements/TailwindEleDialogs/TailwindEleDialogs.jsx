import React from "react";

const TailwindEleDialogs = () => {
  return (
    <div>
      <div className="tile mb-4 mx-6">
        <h2
          className="mb-3 line-head text-2xl font-semibold border-b pb-3"
          id="dialogs"
        >
          Dialogs
        </h2>

        <div className="flex">
          <div className=" w-full">
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
          <div className="w-full">
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
    </div>
  );
};

export default TailwindEleDialogs;
