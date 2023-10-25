import React from "react";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props){
    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay()

        let days = [
          "Sun",
          "Mon",
          "Tue",
          "Wen",
          "Thu",
          "Fri",
          "Sat",
        ];
        return days[day]
    }
    return (
      <div>
        <div className="days">{day()}</div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
        <div className="forecast-temperature">
          <span className="max-temperature">
            {Math.round(props.data.temperature.maximum)}°
          </span>
          <span className="min-temperature">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
      </div>
    );
}