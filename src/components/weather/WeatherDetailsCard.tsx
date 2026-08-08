import type { WeatherData } from '@/types/weather';
import { Droplets, Eye, Gauge, Sun, Sunrise, Sunset, Wind } from 'lucide-react';

type WeatherDetailsCardProps = {
  data: WeatherData;
};

const WeatherDetailsCard = ({ data }: WeatherDetailsCardProps) => {
  const detail = data.details;
  const items = [
    { icon: Droplets, label: 'Humidity', value: detail.humidity, unit: '%' },
    { icon: Wind, label: 'Wind Speed', value: detail.wind, unit: 'km/h' },
    { icon: Gauge, label: 'Pressure', value: detail.pressure, unit: 'hPa' },
    { icon: Eye, label: 'Visibility', value: detail.visibility, unit: 'km' },
    { icon: Sun, label: 'UV Index', value: detail.uv },
    { icon: Sunrise, label: 'Sunrise', value: detail.sunrise },
    { icon: Sunset, label: 'Sunset', value: detail.sunset },
  ];
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <h3 className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
        Details
      </h3>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {items.map(({ icon: Icon, label, value, unit }) => (
          <div
            className="rounded-2xl border border-border/60 bg-glass p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
            key={label}
          >
            <Icon className="h-4 w-4 text-primary" />
            <p className="mt-3 text-xs text-muted-foreground">{label}</p>
            <p className="mt-0.5 text-lg font-medium tracking-tight text-foreground">
              {value}
              {unit === '%' ? unit : unit ? ` ${unit}` : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WeatherDetailsCard;
