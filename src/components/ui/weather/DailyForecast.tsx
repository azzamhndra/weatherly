import WeatherIcon from '@/components/ui/weather/WeatherIcon';
import type { WeatherData } from '@/types/weather';

type DailyForecastProps = {
  data: WeatherData;
};

const DailyForecast = ({ data }: DailyForecastProps) => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <h3 className="text-sm font-medium uppercase text-muted-foreground">
        Prakiraan cuaca 7 hari
      </h3>
      <div className="-mx-2 mt-5 flex gap-3 overflow-x-auto px-2 pb-2 py-1">
        {data.daily.map((day) => (
          <div
            className="flex min-w-[120px] flex-1 flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
            key={day.day}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {day.day}
            </span>
            <WeatherIcon condition={day.condition} className="h-9 w-9" />
            <div className="flex gap-2 items-baseline">
              <span className="text-lg font-medium text-foreground">
                {day.high}°
              </span>
              <span className="text-sm text-muted-foreground">{day.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default DailyForecast;
