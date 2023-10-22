import React, { useState } from "react";
import axios from "axios";
import FormatedDate from "./FormatedDate"

import "./Weather.css";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time*1000),
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div class="Weather">
        <div class="container">
          <div class="weather-app-wrapper">
            <div class="weather-app">
              <form>
                <div className="row">
                  <div className="col-8">
                    <input
                      type="text"
                      autoComplete="off"
                      autoFocus="on"
                      placeholder="Type a city..."
                      className="form-control"
                    />
                  </div>
                  <div class="col-4">
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>{" "}
                    <button type="submit" className="btn btn-success">
                      Current
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>
                    <FormatedDate date={weatherData.date} />
                  </li>
                  <li>{weatherData.description}</li>
                </ul>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="d-flex weather-temperature">
                    <img src={weatherData.icon} alt="" />
                    <div class="d-flex">
                      <span class="degree">{weatherData.temperature}</span>
                      <a
                        href="https://www.shecodes.io/learn/workshops/1446/units/75/lessons/193"
                        class="active"
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
                <div class="col-6 humidity-wind">
                  <ul>
                    <li>
                      Humidity(%):<span>{weatherData.humidity}</span>
                    </li>
                    <li>
                      Wind(km/h): <span>{weatherData.wind}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "lisbon";
    let units = "metric";
    let apiKey = "5205d0cd1111be04odfa3bb3834ad0t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return "loading..";
  }
}
