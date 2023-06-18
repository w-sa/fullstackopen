import axios from "axios";

const getLatLon = async (city, countryName) => {
  const BASE_URL = import.meta.env.VITE_GEOCODE_URL;
  return axios
    .get(`${BASE_URL}{${city} ${countryName}}`)
    .then((response) => response.data)
    .then((data) => {
      const { lat, lon } = data[0];
      return { lat, lon };
    })
    .catch((error) => {
      console.log("Something went wrong fetching the weather data...");
    });
};

const getWeather = async (city, countryName) => {
  const BASE_URL = import.meta.env.VITE_WEATHER_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  return getLatLon(city, countryName)
    .then(({ lat, lon }) => {
      return axios.get(`${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    })
    .then((response) => response.data);
};

export default { getWeather };
