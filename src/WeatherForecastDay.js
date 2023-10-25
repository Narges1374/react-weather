import React from "react";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props){
    function day(){
        let date = new Date(props.data[0].time * 1000);
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
          src={props.data[0].condition.icon_url}
          alt={props.data[0].condition.description}
        />
        <div className="forecast-temperature">
          <span className="max-temperature">
            {Math.round(props.data[0].temperature.maximum)}°
          </span>
          <span className="min-temperature">
            {Math.round(props.data[0].temperature.minimum)}°
          </span>
        </div>
      </div>
    );
}