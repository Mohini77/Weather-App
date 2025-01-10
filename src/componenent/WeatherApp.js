import React, { useState } from 'react'
import InfoBox from './InfoBox'
import Search from './Search'
const WeatherApp = () => {
    const[weatherInfo,setWeatherInfo]=useState({
        city:'Nagpur',
        feelsLike:26,
        humidity:69,
        max:26.01,
        min:26.01,
        temp:26.01,
        weather:'haze'
    })

    const updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
    <div>
        <h1>Weather App</h1>
      <Search updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp

