import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props){
    return (
      <div>
        <div>
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormatedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={props.data.icon} alt={props.data.description} />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6 humidity-wind">
            <ul>
              <li>
                Humidity(%):<span>{props.data.humidity}</span>
              </li>
              <li>
                Wind(km/h): <span>{props.data.wind}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}