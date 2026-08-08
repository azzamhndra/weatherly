import { useState } from 'react';
import type {
  GeoLocation,
  WeatherResponse,
  WeatherData,
} from '@/types/weather';
import {
  mapWeatherCode,
  formatDayName,
  formatTime,
  metersToKm,
} from '@/lib/weather';

export const useWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGeoLocation = async (cityName: string): Promise<GeoLocation> => {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`
    );

    if (!geoResponse.ok) throw new Error('Gagal mengambil data lokasi.');

    const locationData = await geoResponse.json();

    if (!locationData.results || locationData.results.length === 0)
      throw new Error('Kota tidak ditemukan.');

    const location = locationData.results[0] as GeoLocation;
    return location;
  };

  const fetchWeatherData = async (
    latitude: number,
    longitude: number
  ): Promise<WeatherResponse> => {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,surface_pressure,visibility,uv_index,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weather_code&forecast_days=7&timezone=auto`
    );

    if (!weatherResponse.ok) throw new Error('Gagal mengambil data cuaca.');

    const weatherData: WeatherResponse = await weatherResponse.json();
    return weatherData;
  };

  const transformWeatherData = (
    location: GeoLocation,
    weatherData: WeatherResponse
  ): WeatherData => {
    return {
      city: location.name,
      country: location.country,
      timezone: location.timezone,
      temp: weatherData.current.temperature_2m,
      condition: mapWeatherCode(weatherData.current.weather_code),
      feelsLike: weatherData.current.apparent_temperature,
      high: weatherData.daily.temperature_2m_max[0],
      low: weatherData.daily.temperature_2m_min[0],
      details: {
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        pressure: weatherData.current.surface_pressure,
        visibility: metersToKm(weatherData.current.visibility),
        uv: weatherData.current.uv_index,
        sunrise: formatTime(weatherData.daily.sunrise[0]),
        sunset: formatTime(weatherData.daily.sunset[0]),
      },
      daily: weatherData.daily.time.map((day, index) => ({
        day: formatDayName(day),
        condition: mapWeatherCode(weatherData.daily.weather_code[index]),
        high: weatherData.daily.temperature_2m_max[index],
        low: weatherData.daily.temperature_2m_min[index],
      })),
    };
  };

  const searchWeather = async (cityName: string) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const location = await fetchGeoLocation(cityName);

      const weatherData = await fetchWeatherData(
        location.latitude,
        location.longitude
      );

      const transformData = transformWeatherData(location, weatherData);
      setData(transformData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred.';
      setError(errorMessage);
      console.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    searchWeather,
  };
};
