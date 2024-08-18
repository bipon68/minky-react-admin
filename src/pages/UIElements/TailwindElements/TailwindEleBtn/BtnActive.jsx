import React from "react";

const BtnActive = () => {
  return (
    <div className="grid gap-2">
      <div className="bs-component">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-primary active">
            <input type="checkbox" checked="" autocomplete="off" /> Active
          </label>
          <label className="btn btn-primary">
            <input type="checkbox" autocomplete="off" /> Check
          </label>
          <label className="btn btn-primary">
            <input type="checkbox" autocomplete="off" /> Check
          </label>
        </div>
      </div>
      <div className="bs-component">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-primary active">
            <input
              id="option1"
              type="radio"
              name="options"
              autocomplete="off"
              checked=""
            />
            Active
          </label>
          <label className="btn btn-primary">
            <input
              id="option2"
              type="radio"
              name="options"
              autocomplete="off"
            />
            Radio
          </label>
          <label className="btn btn-primary">
            <input
              id="option3"
              type="radio"
              name="options"
              autocomplete="off"
            />
            Radio
          </label>
        </div>
      </div>
      <div class="bs-component">
        <div class=" btn-group-vertical grid w-fit" data-toggle="buttons">
          <button class="btn btn-primary" type="button">
            Button
          </button>
          <button class="btn btn-primary" type="button">
            Button
          </button>
          <button class="btn btn-primary" type="button">
            Button
          </button>
          <button class="btn btn-primary" type="button">
            Button
          </button>
          <button class="btn btn-primary" type="button">
            Button
          </button>
          <button class="btn btn-primary" type="button">
            Button
          </button>
        </div>
      </div>
      <div class="bs-component">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button class="btn btn-secondary" type="button">
            Left
          </button>
          <button class="btn btn-secondary" type="button">
            Middle
          </button>
          <button class="btn btn-secondary" type="button">
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnActive;
