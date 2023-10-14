import "./Weather.css";

import Form from "./Form.js";
import Description from "./Description";
import Temperature from "./Temperature.js";
import HumidityWind from "./HumidityWind.js";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <Form />

            <Description />

            <div class="row">
              <Temperature />

              <HumidityWind />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
