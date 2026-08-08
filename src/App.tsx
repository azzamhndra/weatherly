import CurrentWeatherCard from '@/components/weather/CurrentWeatherCard';
import DailyForecast from '@/components/weather/DailyForecast';
import HourlyForecast from '@/components/weather/HourlyForecast';
import Navbar from '@/components/weather/Navbar';
import WeatherDetailsCard from '@/components/weather/WeatherDetailsCard';
import { useWeather } from '@/hooks/useWeather';

const App = () => {
  const { data, error, loading, searchWeather } = useWeather();
  console.log(data);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={searchWeather} loading={loading} />
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
        {data && (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <CurrentWeatherCard data={data} />
              <WeatherDetailsCard data={data} />
            </div>
            <DailyForecast data={data} />
            <HourlyForecast data={data} />
          </div>
        )}
      </main>
    </div>
  );
};
export default App;
