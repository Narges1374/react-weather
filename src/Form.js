import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form>
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            autoComplete="off"
            autoFocus="on"
            placeholder="Type a city..."
            className="form-control"
          />
        </div>
        <div className="col-4">
          <button type="submit" class="btn btn-primary w-50">
            Search
          </button>{" "}
          <button type="submit" id="current-location" class="btn btn-success">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
