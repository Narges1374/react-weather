import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
    let[loaded, setLoaded] = useState(false)
    let[forecast,setForecast] = useState(null)
    function showForecast(response){
        console.log(response.data);
        setForecast(response.data.daily)
        setLoaded(true)
    }
    
    if(loaded){
        return (
          <div className="forecast">
            <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecast}/>
              </div>
            </div>
          </div>
        );
    }
    else{
        let units = "metric";
        let apiKey = "5205d0cd1111be04odfa3bb3834ad0t0";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=${units}`;
        
        axios.get(apiUrl).then(showForecast)
        
        return null
    }
    
}