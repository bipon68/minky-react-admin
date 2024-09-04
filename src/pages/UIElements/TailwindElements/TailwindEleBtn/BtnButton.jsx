import React from "react";

const BtnButton = () => {
  return (
    <div>
      <div class="bs-component pb-1 flex gap-1">
        <button
          class=" px-3 py-2 font-medium text-white  rounded-md bg-primary hover:drop-shadow"
          type="button"
        >
          Primary
        </button>
        <button class="btn_sec" type="button">
          Secondary
        </button>
        <button
          class="px-3 py-2 font-medium text-white  rounded-md bg-success"
          type="button"
        >
          Success
        </button>
        <button
          class="px-3 py-2 font-medium text-white  rounded-md bg-info"
          type="button"
        >
          Info
        </button>
        <button
          class="px-3 py-2 font-medium text-white  rounded-md bg-warning"
          type="button"
        >
          Warning
        </button>
        <button
          class="px-3 py-2 font-medium text-white  rounded-md bg-danger"
          type="button"
        >
          Danger
        </button>
        <button
          class="px-3 py-2 font-medium text-gray  rounded-md bg-link"
          type="button"
        >
          Link
        </button>
      </div>
    </div>
  );
};

export default BtnButton;
