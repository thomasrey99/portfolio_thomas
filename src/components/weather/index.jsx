"use client";
import { getWeatherByCoordinates } from "@/libs/weather";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
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

  return (
    weather && (
      <div className="p-[0.5rem] absolute top-0 right-0 flex items-center justify-center  gap-2">
        <p className="text-fontItems text-[1rem] text-center font-bold">
          {weather.location.name}
        </p>
        <p className="text-amber-500 text-[1rem] text-center font-bold">
          {weather.current.temp_c}°C
        </p>
        <img
          src={weather.current.condition.icon}
          className="w-[3rem] h-[3rem]"
        />
      </div>
    )
  );
};

export default Weather;
