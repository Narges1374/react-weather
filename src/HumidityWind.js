import React from "react";

import "./HumidityWind.css";

export default function HumidityWind() {
  return (
    <div class="col-6 humidity-wind">
      <ul>
        <li>
          Humidity(%):<span id="Humidity"> </span>
        </li>
        <li>
          Wind(km/h): <span id="Wind"></span>
        </li>
      </ul>
    </div>
  );
}
