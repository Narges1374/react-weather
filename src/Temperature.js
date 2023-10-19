import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div class="col-6">
      <div class="d-flex weather-temperature">
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
          alt=""
        />
        <div class="deg d-flex">
          <span class="degree"> 21</span>
          <a href="#" class="active">
            °C
          </a>
          |<a href="#">°F</a>
        </div>
      </div>
    </div>
  );
}
