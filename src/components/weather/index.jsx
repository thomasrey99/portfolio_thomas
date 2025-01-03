"use client";
import { getWeatherByCoordinates } from "@/libs/weather";
import Image from "next/image";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          try {
            const weatherData = await getWeatherByCoordinates(
              latitude,
              longitude
            );
            setWeather(weatherData);
            setLoading(false);
          } catch (err) {
            setError("No se pudo obtener el clima");
            setLoading(false);
          }
        },
        (err) => {
          setError("No se pudo obtener la ubicación");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocalización no soportada");
      setLoading(false);
    }
  }, []);

  console.log(weather);
  return (
    weather && (
      <div className="absolute top-0 right-20 flex items-center justify-center gap-3">
        <p className="text-fontItems text-[1rem] text-center font-bold">{weather.location.name}</p>
        <p className="text-fontItems text-[1rem] text-center">{weather.current.temp_c}°C</p>
        <img src={weather.current.condition.icon} />
      </div>
    )
  );
};

export default Weather;
