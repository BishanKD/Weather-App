import React, { useState } from 'react';
import '../styles/CurrentWeather.css';
import WeatherIcon from './WeatherIcon';

function CurrentWeather({ data }) {
  const [showMore, setShowMore] = useState(false);
  if (!data) return null;

  const { name, main, weather, wind, visibility, sys } = data;
  const { temp, feels_like, temp_min, temp_max, humidity } = main;
  const { description, icon } = weather[0];
  const { country } = sys;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="current-weather">
      <h2>{name}, {country}</h2>
      <div className="weather-icon">
        <WeatherIcon icon={icon} description={description} />
      </div>
      <div className="temperature">
        <p className="current-temp">{Math.round(temp)}°C</p>
        <p>Feels like: {Math.round(feels_like)}°C</p>
      </div>
      <p className="description">{description}</p>
      <button className="more-info-button" onClick={toggleShowMore}>
        {showMore ? 'Hide Information' : 'More Information'}
      </button>
      <div className={`details ${showMore ? 'show':''}`}>
        <p>Min: {Math.round(temp_min)}°C | Max: {Math.round(temp_max)}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
        <p>Visibility: {visibility / 1000} km</p>
      </div>
    </div>
  );
}

export default CurrentWeather;