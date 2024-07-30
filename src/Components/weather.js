// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Form = styled.form`
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #21a1f1;
  }
`;

const WeatherInfo = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ForecastItem = styled.div`
  background-color: #444;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
`;

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecast(forecastResponse.data);
      setError('');
    } catch (error) {
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
    <Container>
      <h1>Weather App</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <Button type="submit">Search</Button>
      </Form>
      {error && <p>{error}</p>}
      {weather && (
        <WeatherInfo>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </WeatherInfo>
      )}
      {forecast && (
        <ForecastContainer>
          {forecast.list.map((item) => (
            <ForecastItem key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p>Temp: {item.main.temp}°C</p>
              <p>Humidity: {item.main.humidity}%</p>
              <p>Wind: {item.wind.speed} m/s</p>
            </ForecastItem>
          ))}
        </ForecastContainer>
      )}
    </Container>
  );
};

export default Weather;
