const API_KEY = "025f86a3e30445a7851183021250301";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export async function getWeatherByCoordinates(lat, lon) {
  const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=${lat},${lon}`);
  if (!res.ok) {
    throw new Error("No se pudo obtener el clima");
  }
  return res.json();
}
