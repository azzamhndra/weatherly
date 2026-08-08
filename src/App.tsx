import CurrentWeatherCardSkeleton from '@/components/skeleton/CurrentWeatherCardSkeleton';
import DailyForecastSkeleton from '@/components/skeleton/DailyForecastSkeleton';
import HourlyForecastSkeleton from '@/components/skeleton/HourlyForecastSkeleton';
import WeatherDetailsCardSkeleton from '@/components/skeleton/WeatherDetailsCardSkeleton';
import CurrentWeatherCard from '@/components/ui/weather/CurrentWeatherCard';
import DailyForecast from '@/components/ui/weather/DailyForecast';
import EmptyState from '@/components/ui/weather/EmptyState';
import HourlyForecast from '@/components/ui/weather/HourlyForecast';
import Navbar from '@/components/ui/weather/Navbar';
import WeatherDetailsCard from '@/components/ui/weather/WeatherDetailsCard';
import ErrorMessage from '@/components/ui/weather/ErrorMessage';
import { useWeather } from '@/hooks/useWeather';

const App = () => {
  const { data, error, loading, searchWeather } = useWeather();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={searchWeather} loading={loading} />
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
        {data === null && !loading && !error && <EmptyState />}
        {loading && (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <CurrentWeatherCardSkeleton />
              <WeatherDetailsCardSkeleton />
            </div>
            <DailyForecastSkeleton />
            <HourlyForecastSkeleton />
          </div>
        )}
        {data && !loading && (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <CurrentWeatherCard data={data} />
              <WeatherDetailsCard data={data} />
            </div>
            <DailyForecast data={data} />
            <HourlyForecast data={data} />
          </div>
        )}
        {error && !loading && <ErrorMessage message={error} />}
      </main>
    </div>
  );
};
export default App;
