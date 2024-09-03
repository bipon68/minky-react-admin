import React from "react";

const BtnDisabled = () => {
  return (
    <div>
      <div class="bs-component pb-1 flex gap-1">
        <button
          class="px-3 py-2 font-medium text-white rounded-md bg-primary opacity-50"
          type="button"
        >
          Primary
        </button>
        <button
          class="px-3 py-2 font-medium text-white rounded-md bg-secondary opacity-50"
          type="button"
        >
          Secondary
        </button>
        <button
          class="px-3 py-2 font-medium text-white rounded-md bg-success opacity-50"
          type="button"
        >
          Success
        </button>
        <button
          class="px-3 py-2 font-medium text-white rounded-md bg-info opacity-50"
          type="button"
        >
          Info
        </button>
        <button
          class="px-3 py-2 font-medium text-white rounded-md bg-warning opacity-50"
          type="button"
        >
          Warning
        </button>
        <button
          class="px-3 py-2 font-medium text-white rounded-md bg-danger opacity-50"
          type="button"
        >
          Danger
        </button>
        <button
          class="px-3 py-2 font-medium text-black rounded-md bg-link opacity-50"
          type="button"
          disabled=""
        >
          Link
        </button>
      </div>
    </div>
  );
};

export default BtnDisabled;
