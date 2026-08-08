import type { Condition } from '@/types/weather';

export const mapWeatherCode = (code: number): Condition => {
  if (code === 0) return 'sunny';
  if (code === 1) return 'partly';
  if (code === 2) return 'partly';
  if (code === 3 || code === 45 || code === 48) return 'cloudy';
  if (code >= 71 && code <= 77) return 'snow';
  if (code === 85 || code === 86) return 'snow';
  if (code >= 51 && code <= 67) return 'rain';
  if (code >= 80 && code <= 82) return 'rain';
  if (code >= 95 && code <= 99) return 'rain';
  return 'cloudy';
};

export const formatDayName = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  }

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return dayNames[date.getDay()];
};

export const WEATHER_API_CONFIG = {
  currentParams: [
    'temperature_2m',
    'apparent_temperature',
    'relative_humidity_2m',
    'wind_speed_10m',
    'surface_pressure',
    'visibility',
    'uv_index',
    'weather_code',
  ],
  dailyParams: [
    'temperature_2m_max',
    'temperature_2m_min',
    'sunrise',
    'sunset',
    'weather_code',
  ],
  forecastDays: 7,
  timezone: 'auto',
  baseUrl: 'https://api.open-meteo.com/v1/forecast',
};

export const buildWeatherUrl = (
  latitude: number,
  longitude: number
): string => {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: WEATHER_API_CONFIG.currentParams.join(','),
    daily: WEATHER_API_CONFIG.dailyParams.join(','),
    forecast_days: WEATHER_API_CONFIG.forecastDays.toString(),
    timezone: WEATHER_API_CONFIG.timezone,
  });

  return `${WEATHER_API_CONFIG.baseUrl}?${params.toString()}`;
};

export const formatTime = (time: string): string => {
  const date = new Date(time);
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const metersToKm = (meters: number): number => {
  return meters / 1000;
};
