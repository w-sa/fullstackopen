import weatherService from "../services/weatherService";
import { useEffect, useState } from "react";

const Weather = ({ city, country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    weatherService.getWeather(city, country).then((data) => {
      setWeatherData(data);
    });
  }, []);

  if (weatherData === null) {
    return null;
  }

  const toCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  const getWeatherIcon = (code) => {
    const weatherIconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;
    return weatherIconUrl;
  };

  const {
    main: { temp: temperature },
    wind: { speed: windSpeed },
  } = weatherData;

  const icon = weatherData.weather[0].icon;

  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>Temperature {toCelsius(temperature)} C</p>
      <img src={getWeatherIcon(icon)}></img>
      <p>Wind {windSpeed} m/s</p>
    </div>
  );
};

export default Weather;
