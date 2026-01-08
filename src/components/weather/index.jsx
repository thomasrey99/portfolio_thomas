"use client";

import { useEffect, useState } from "react";

const Weather = () => {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos=>{
      fetchWeather(pos.coords.latitude, pos.coords.longitude);
    });
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div>

    </div>
  );
};

export default Weather;
