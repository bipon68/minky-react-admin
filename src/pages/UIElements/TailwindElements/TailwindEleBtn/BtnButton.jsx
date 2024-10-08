import React from "react";

const BtnButton = () => {
  return (
    <div>
      <div class="bs-component pb-1 flex gap-1">
        <button class="btn btn-primary" type="button">
          Primary
        </button>
        <button class="btn btn-secondary" type="button">
          Secondary
        </button>
        <button class="btn btn-success" type="button">
          Success
        </button>
        <button class="btn btn-info" type="button">
          Info
        </button>
        <button class="btn btn-warning" type="button">
          Warning
        </button>
        <button class="btn btn-danger" type="button">
          Danger
        </button>
        <button class="btn btn-link" type="button">
          Link
        </button>
      </div>
    </div>
  );
};

export default BtnButton;
