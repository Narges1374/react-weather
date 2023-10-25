import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
    });
  }

  function search(){
    let units = "metric";
    let apiKey = "5205d0cd1111be04odfa3bb3834ad0t0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search()
  }

  function handleCityChange(event){
    setCity(event.target.value)
  }

  if (weatherData.ready) {
    return (
      <div class="Weather">
        <div class="container">
          <div class="weather-app-wrapper">
            <div class="weather-app">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-8">
                    <input
                      type="text"
                      autoComplete="off"
                      autoFocus="on"
                      placeholder="Type a city..."
                      className="form-control"
                      onChange={handleCityChange}
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
              <WeatherInfo data={weatherData} />
              <WeatherForecast data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search()
    return "loading..";
  }
}
