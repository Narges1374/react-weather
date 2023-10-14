import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div class="col-6">
      <div class="d-flex weather-temperature">
        <img src="" alt="" id="icon" />
        <div class="deg d-flex">
          <span id="degree" class="degree"></span>
          <a href="#" id="celsius-link" class="active">
            21°C
          </a>
          |
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
