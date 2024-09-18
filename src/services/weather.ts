import { ajax } from "../tools/ajax";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = async (lat: number, lon: number) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

  return await ajax(url);
}

export const getLocation = async (query: string) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;

  return await ajax(url);
} 