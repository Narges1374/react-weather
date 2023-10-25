import React, { useState,useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
    let[loaded, setLoaded] = useState(false)
    let[forecast,setForecast] = useState(null)
    
    useEffect(() => {
        setLoaded(false);
    }, [props.data.city])

    function showForecast(response){
        setForecast(response.data.daily)
        setLoaded(true)
    }
    
    if(loaded){
        return (
          <div className="forecast">
            <div className="row">
              
                {forecast.map(function(dailyForecast, index) {
                    if(index < 5){
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        )
                    }
                })}
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