import WeatherIcon from '@/components/ui/weather/WeatherIcon';
import type { WeatherData } from '@/types/weather';
import { Droplet, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

type HourlyForecastProps = {
  data: WeatherData;
};

const HourlyForecast = ({ data }: HourlyForecastProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [data.hourly]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 200;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium uppercase text-muted-foreground">
          Prakiraan per jam
        </h3>
        <div className="flex gap-1.5">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="rounded-full border border-border p-1.5 text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-glass"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="rounded-full border border-border p-1.5 text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-glass"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="-mx-2 mt-5 flex gap-3 overflow-x-auto px-2 pb-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {data.hourly.map((hour, index) => (
          <div
            key={hour.time}
            className="flex flex-1 basis-[92px] flex-col items-center gap-2.5 rounded-2xl border border-border/60 bg-glass px-3 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
          >
            <span className="text-xs text-muted-foreground">
              {index === 0 ? 'Now' : hour.time}
            </span>
            <WeatherIcon condition={hour.condition} className="h-7 w-7" />
            <span className="text-base font-medium text-foreground">
              {hour.temp}°
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Droplet className="h-3 w-3" strokeWidth={1.75} />
              {hour.rain}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HourlyForecast;
