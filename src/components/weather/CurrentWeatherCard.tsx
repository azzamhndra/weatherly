import WeatherIcon from '@/components/weather/WeatherIcon';
import type { WeatherData } from '@/types/weather';
import { ArrowDown, ArrowUp } from 'lucide-react';

type CurrentWeatherCardProps = {
  data: WeatherData;
};

const gradients: Record<WeatherData['condition'], string> = {
  sunny: 'bg-gradient-sunny',
  partly: 'bg-gradient-partly',
  cloudy: 'bg-gradient-cloudy',
  rain: 'bg-gradient-rain',
  snow: 'bg-gradient-snow',
};

const CurrentWeatherCard = ({ data }: CurrentWeatherCardProps) => {
  const now = new Date();
  const date = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: data.timezone,
  });
  const time = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: data.timezone,
  });

  return (
    <section className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div
        className={`pointer-events-none absolute inset-0 opacity-80 ${gradients[data.condition]}`}
      ></div>
      <div className="relative flex flex-1 flex-col justify-between">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-2xl font-semibold tracking-tight text-foreground">
              {data.city}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{data.country}</p>
            <p className="mt-4 text-sm text-secondary-foreground">
              {date} · {time}
            </p>
          </div>
          <WeatherIcon
            condition={data.condition}
            className="h-20 w-20 shrink-0 sm:h-24 sm:w-24"
          />
        </div>
        <div className="mt-10 flex items-end gap-3">
          <span className="text-7xl font-light leading-none tracking-tighter text-foreground sm:text-8xl">
            {data.temp}°
          </span>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="text-muted-foreground">
            Terasa Seperti{' '}
            <span className="font-medium text-foreground">
              {data.feelsLike}°
            </span>
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <ArrowUp className="h-4 w-4" />
            <span className="font-medium text-foreground">{data.high}°</span>
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <ArrowDown className="h-4 w-4" />
            <span className="font-medium text-foreground">{data.low}°</span>
          </span>
        </div>
      </div>
    </section>
  );
};
export default CurrentWeatherCard;
