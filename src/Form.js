import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form id="search-form">
      <input
        type="text"
        id="search-city"
        autocomplete="off"
        placeholder="Type a city..."
      />
      <button type="submit" class="btn btn-primary">
        Search
      </button>
      <button type="submit" id="current-location" class="btn btn-success">
        Current
      </button>
    </form>
  );
}
