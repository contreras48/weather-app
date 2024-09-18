import React, { useState, useEffect } from 'react';
import Card from './components/card'

import { getUserLocation } from './tools/location';
import { getWeather } from './services/weather';

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (position?: any) => {

    try {
      
      const { latitude, longitude } = position !== undefined
    ? { latitude: position.lat, longitude: position.lon }
    : await getUserLocation();
    
      const weatherData = await getWeather(latitude, longitude);
      setWeather(weatherData);
    } catch (err) {
      setError('Failed to fetch weather data');
    }
  };

  const handleSearch = (position: any) => {
    fetchWeather(position);
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