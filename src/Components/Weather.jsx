import React, { useState } from 'react';
import clouds from '../Media/clouds.png';

// OpenWeatherMap API key & site link
const api = {
  key: "3be4a59490bd19b22f63c9eb0f02c5d8",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather () {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // Search bar functionality to pull city weather data (metric) based in search query
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
    }
  }


  return (
    <div className="weather-container">
      <div className="section-title">
            <img
            src={clouds}
            alt="Weather Icon" />
                <h1>
                  My Weather
                </h1>
      </div>
      <div className="searched-weather-container">
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 15) ? 'Warm' : 'Cool') : 'Default'}>
        <main>
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search any city or town..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div 
            className="location-box">
              <div 
              className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>
            <div 
            className="weather-box">
              <div 
              className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div 
              className="current-weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>
      </div>
    </div>
  );
}

export default Weather;