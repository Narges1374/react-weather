import React from "react";

//import "./Form.css";

export default function Description() {
  return (
    <div>
      <h1>Tehran 34°</h1>
      <ul>
        <li>
          Last Updated: <span id="day-hour">21:55</span>
        </li>
        <li id="description">Sunny</li>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="Sunny"
          class="float-left"
        />
      </ul>
    </div>
  );
}
