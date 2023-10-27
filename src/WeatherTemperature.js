import React,{useState} from "react";

import "./Weather.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius")
  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
  }
  
  function showSelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius"){
    return (
      <div className="d-flex">
        <span className="degree">{props.celsius}</span>
          °C <span>|</span>{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  }
  else{
    let fahrenheit = Math.round((props.celsius * 9/5) + 32);
    return (
      <div className="d-flex">
        <span className="degree">{fahrenheit}</span>
        <a href="/" onClick={showSelsius}>
          °C
        </a>{"  "}
        <span>|</span> °F
      </div>
    );
  }
}


