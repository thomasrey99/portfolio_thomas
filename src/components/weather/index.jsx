"use client";
import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      fetchWeather(pos.coords.latitude, pos.coords.longitude);
    });
  }, []);

  const fetchWeather = async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric&lang=es`
    );
    setWeather(await res.json());
  };

  if (!weather) return null;

  return (
    <>
      {/* Mobile – compact */}
      <div className="md:hidden flex items-center gap-1 text-sm font-bold text-neutral-800">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          className="w-6 h-6"
          alt={weather.weather[0].description}
        />
        <span>{Math.round(weather.main.temp)}° C</span>
      </div>

      {/* Desktop – centered editorial */}
      <div
        className="
          hidden md:flex items-center
          absolute left-1/2 -translate-x-1/2
          gap-4 text-[13px] tracking-[0.18em] uppercase
          text-neutral-600
        "
      >
        <span className="font-semibold">{weather.name}</span>

        <span className="h-3 w-px bg-neutral-300" />

        <span className="font-black text-neutral-900 text-[15px]">
          {Math.round(weather.main.temp)}° C
        </span>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          className="w-6 h-6 -ml-1 opacity-80"
          alt={weather.weather[0].description}
        />
      </div>
    </>
  );
}
