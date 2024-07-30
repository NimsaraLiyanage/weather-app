// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      console.log(`Fetching weather for ${city} with API key ${apiKey}`);
      
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      console.log('Weather response:', weatherResponse.data);
      setWeather(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      console.log('Forecast response:', forecastResponse.data);
      setForecast(forecastResponse.data);
      setError('');
    } catch (error) {
      console.error('Error fetching weather:', error);
      setError('City not found');
      setWeather(null);
      setForecast(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
      {forecast && (
        <div>
          <h3>5-Day Forecast</h3>
          <div>
            {forecast.list.map((item) => (
              <div key={item.dt}>
                <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
                <p>Temp: {item.main.temp}°C</p>
                <p>Humidity: {item.main.humidity}%</p>
                <p>Wind: {item.wind.speed} m/s</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
