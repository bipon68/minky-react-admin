import React from "react";

const BtnOutline = () => {
  return (
    <div>
      <div class="bs-component pb-1 flex gap-1">
        <button
          class="px-3 py-2  font-medium hover:text-white rounded-md border-2 border-primary hover:bg-primary hover:transition-all hover:duration-500"
          type="button"
        >
          Primary
        </button>
        <button
          class="px-3 py-2 font-medium hover:text-white rounded-md border-2 border-secondary hover:bg-secondary hover:transition-all hover:duration-500"
          type="button"
        >
          Secondary
        </button>
        <button
          class="px-3 py-2 font-medium hover:text-white rounded-md border-2 border-success hover:bg-success hover:transition-all hover:duration-500"
          type="button"
        >
          Success
        </button>
        <button
          class="px-3 py-2 font-medium hover:text-white rounded-md border-2 border-info hover:bg-info hover:transition-all hover:duration-500"
          type="button"
        >
          Info
        </button>
        <button
          class="px-3 py-2 font-medium hover:text-white rounded-md border-2 border-warning hover:bg-warning hover:transition-all hover:duration-500"
          type="button"
        >
          Warning
        </button>
        <button
          class="px-3 py-2 font-medium hover:text-white rounded-md border-2 border-danger hover:bg-danger hover:transition-all hover:duration-500"
          type="button"
        >
          Danger
        </button>
      </div>
    </div>
  );
};

export default BtnOutline;
