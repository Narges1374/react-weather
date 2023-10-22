import React from "react";
import FormatedDate from "./FormatedDate";
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
              <div className="d-flex">
                <span className="degree">{props.data.temperature}</span>
                <a
                  href="https://www.shecodes.io/learn/workshops/1446/units/75/lessons/193"
                  className="active"
                >
                  °C
                </a>
                |
                <a href="https://www.shecodes.io/learn/workshops/1446/units/75/lessons/193">
                  °F
                </a>
              </div>
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