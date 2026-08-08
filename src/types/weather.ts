export type Condition = 'sunny' | 'cloudy' | 'rain' | 'snow' | 'partly';

export type DailyForecast = {
  day: string;
  condition: Condition;
  high: number;
  low: number;
};

export type WeatherDetails = {
  humidity: number;
  wind: number;
  pressure: number;
  visibility: number;
  uv: number;
  sunrise: string;
  sunset: string;
};

export type GeoLocation = {
  name: string;
  country: string;
  longitude: number;
  latitude: number;
  timezone: string;
};

export type WeatherResponse = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    surface_pressure: number;
    visibility: number;
    uv_index: number;
    weather_code: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    weather_code: number[];
  };
};

export type WeatherData = {
  city: string;
  country: string;
  timezone: string;
  temp: number;
  condition: Condition;
  feelsLike: number;
  high: number;
  low: number;
  details: WeatherDetails;
  daily: DailyForecast[];
};
