import type { Condition } from '@/types/weather';
import { Cloud, CloudRain, CloudSun, Snowflake, Sun } from 'lucide-react';

const map = {
  sunny: Sun,
  partly: CloudSun,
  cloudy: Cloud,
  rain: CloudRain,
  snow: Snowflake,
} as const;

type WeatherIconProps = {
  condition: Condition;
  className?: string;
};

const WeatherIcon = ({ condition, className }: WeatherIconProps) => {
  const Icon = map[condition];
  return <Icon className={`text-primary ${className}`} />;
};
export default WeatherIcon;
