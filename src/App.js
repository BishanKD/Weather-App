import React, { useState, useStatev} from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import DateTimeDisplay from './components/DateTimeDisplay';
import { getWeather } from './utils/api';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearch = async (city) => {
    setIsLoading(true);
    try{
      const data = await getWeather(city);
      setWeatherData(data);
      setError(null);
      console.log(data);
    }
    catch(err){
      setError("Couldn't fetch weather data");
      setWeatherData(null);
    }
    finally{
      setIsLoading(false);
    }
  }
  return (
    <div className="App">
      {/* <h1>Weather App</h1> */}
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && weatherData && (
        <>
          <CurrentWeather data={weatherData} />
          <DateTimeDisplay data={weatherData} />
        </>
      )}
    </div>
  );
}

export default App;