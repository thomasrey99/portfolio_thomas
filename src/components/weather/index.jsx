"use client";
import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      fetchWeather(pos.coords.latitude, pos.coords.longitude);
    });

    const onScroll = () => setVisible(window.scrollY < 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fetchWeather = async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
    );
    setWeather(await res.json());
  };

  if (!weather || !visible) return null;

  return (
    <div
      className="
        absolute top-6 right-6 z-5
        flex items-center gap-3
        px-4 py-2 rounded-full
        bg-black backdrop-blur-md border border-white/10
        text-white
        transition-all duration-300
      "
    >
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        className="w-7 h-7"
      />
      <span className="text-lg font-bold">
        {Math.round(weather.main.temp)}°
      </span>
      <span className="text-xs uppercase hidden sm:block">
        {weather.name}
      </span>
    </div>
  );
}
