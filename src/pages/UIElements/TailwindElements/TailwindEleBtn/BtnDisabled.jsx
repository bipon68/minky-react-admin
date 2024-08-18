import React from "react";

const BtnDisabled = () => {
  return (
    <div>
      <div class="bs-component pb-1 flex gap-1">
        <button class="btn btn-primary disabled" type="button">
          Primary
        </button>
        <button class="btn btn-secondary disabled" type="button">
          Secondary
        </button>
        <button class="btn btn-success disabled" type="button">
          Success
        </button>
        <button class="btn btn-info disabled" type="button">
          Info
        </button>
        <button class="btn btn-warning disabled" type="button">
          Warning
        </button>
        <button class="btn btn-danger disabled" type="button">
          Danger
        </button>
        <button class="btn btn-link disabled" type="button" disabled="">
          Link
        </button>
      </div>
    </div>
  );
};

export default BtnDisabled;
