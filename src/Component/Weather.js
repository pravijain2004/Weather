import React, { useState } from 'react';
import './Weather.css';
import { FaSearch, FaWind } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';

const Weather = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const API_KEY = "5acc1683650652bab831ecf7d57fd397";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    function handleOnChange(event) {
        setCity(event.target.value);
        setError('');
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            fetchData();
        }
    }

    async function fetchData() { 
        if (!city) {
            setError('Please enter a city name.');
            return;
        }

        setError('');
        try {
            let response = await fetch(url);

            // Handle response
            if (!response.ok) {
                if (response.status === 404) {
                    setError('City not found. Please try again.');
                } else {
                    setError('An unexpected error occurred. Please try again later.');
                }
                setWeather(null);
                return;
            }

            let output = await response.json();
            setWeather(output);

        } catch (error) {
            setWeather(null);
            setError('Network error. Please check your internet connection and try again.');
        }
    }

    // Determine Weather Condition
    const getWeatherCondition = (temp, weatherData) => {
        let condition = '';
        let icon = '';

        if (weatherData && weatherData.weather[0].main === "Rain") {
            condition = "Rainy";
            icon = "rain";
        } else if (temp > 25) {
            condition = "Sunny";
            icon = "sunny";
        } else if (temp <= 25 && temp >= 15) {
            condition = "Cloudy";
            icon = "cloudy";
        } else if (temp < 15) {
            condition = "Cold";
            icon = "cold";
        }

        return { condition, icon };
    };

    const weatherCondition = weather ? getWeatherCondition(weather.main.temp, weather) : { condition: '', icon: '' };

    //icons
    const weatherIcons = {
        sunny: 'https://openweathermap.org/img/wn/01d.png',  
        cloudy: 'https://openweathermap.org/img/wn/02d.png', 
        rain: 'https://openweathermap.org/img/wn/09d.png',   
        cold: 'https://openweathermap.org/img/wn/13d.png',   
        default: 'https://openweathermap.org/img/wn/50d.png' 
    };

    return (
        <div className='container'>
            <div className='city'>
                <input
                    type='text'
                    value={city}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Enter city name'
                />
                <button onClick={() => fetchData()}>
                    <FaSearch />
                </button>
            </div>

            {error && <p className='error-message'>{error}</p>}

            {weather && weather.weather && (
                <div className='content'>
                    <div className='weather-image'>
                        <img
                            src={weatherIcons[weatherCondition.icon] || weatherIcons.default}
                            alt={weatherCondition.condition}
                        />
                        <h3 className='desc'>{weatherCondition.condition}</h3>
                    </div>

                    <div className='weather-temp'>
                        <h2>{weather.main.temp}<span>&deg;C</span></h2>
                    </div>

                    <div className='weather-city'>
                        <div className='location'>
                            <MdLocationOn />
                        </div>
                        <p>{weather.name},<span>{weather.sys.country}</span></p>
                    </div>

                    <div className='weather-stats'>
                        <div className='wind'>
                            <div className='wind-icon'>
                                <FaWind />
                            </div>
                            <h3 className='wind-speed'>{weather.wind.speed}<span> Km/h</span></h3>
                            <h3 className='wind-heading'>Wind Speed</h3>
                        </div>
                        <div className='humidity'>
                            <div className='humidity-icon'>
                                <WiHumidity />
                            </div>
                            <h3 className='humidity-percent'>{weather.main.humidity}<span>%</span></h3>
                            <h3 className='humidity-heading'>Humidity</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
