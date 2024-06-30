import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {   // takes the onSearch prop of SearchBar component 
    const [city, setCity] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()){               // checks if city is empty after removing whitespace
            onSearch(city);            // pass the city to the onSearch prop
            setCity('');
        };
    };
    return (
        <div className="search-box">
            <h1>Weather App</h1>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;

