import React from 'react';

function WeatherIcon({ icon, description }) {
  return (
    <img 
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
      alt={description} 
    />
  );
}

export default WeatherIcon;