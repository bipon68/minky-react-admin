import React from "react";

const BtnToolbar = () => {
  return (
    <div>
      <div class="bs-component">
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button class="btn btn-secondary" type="button">
              1
            </button>
            <button class="btn btn-secondary" type="button">
              2
            </button>
            <button class="btn btn-secondary" type="button">
              3
            </button>
            <button class="btn btn-secondary" type="button">
              4
            </button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button class="btn btn-secondary" type="button">
              5
            </button>
            <button class="btn btn-secondary" type="button">
              6
            </button>
            <button class="btn btn-secondary" type="button">
              7
            </button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button class="btn btn-secondary" type="button">
              8
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnToolbar;
