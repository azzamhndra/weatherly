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

export type WeatherData = {
  city: string;
  country: string;
  temp: number;
  condition: Condition;
  description: string;
  feelsLike: number;
  high: number;
  low: number;
  details: WeatherDetails;
  daily: DailyForecast[];
};
