import React, { useState, useEffect } from 'react';
import Card from './components/card'

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const getUserLocation = () => {
    return new Promise<GeolocationCoordinates>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error)
      );
    });
  };

  const getWeather = async (lat: number, lon: number) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };

  const fetchWeather = async (lat?: number, lon?: number) => {
    let latitude, longitude;

    try {
      if(lat != undefined && lon != undefined){
        latitude = lat;
        longitude = lon;
      }else{
        const position  = await getUserLocation();
        latitude = position.latitude;
        longitude = position.longitude;
      }
      const weatherData = await getWeather(latitude, longitude);
      setWeather(weatherData);
    } catch (err) {
      setError('Failed to fetch weather data');
    }
  };

  const handleSearch = (position: any) => {
    fetchWeather(position.lat, position.lon);
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center bg-neutral-light">
      {error ? error 
      : weather ? <Card weather={weather} handleSearch={handleSearch} /> : <p>Loading...</p>}
    </main>
  );
}

export default App;