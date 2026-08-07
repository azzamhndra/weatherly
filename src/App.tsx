import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWeather } from '@/hooks/useWeather';
import { useState } from 'react';

const App = () => {
  const { data, error, loading, searchWeather } = useWeather();

  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      searchWeather(query);
    }
  };

  console.log(data);

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSearch}>
        <Input
          placeholder="Cari Kota..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" variant="default" disabled={loading}>
          {loading ? 'Loading...' : 'Cari Kota'}
        </Button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="mt-4">
          <h2>
            {data.city}, {data.country}
          </h2>
          <p>{data.temp}°C</p>
          <p>{data.condition}</p>
        </div>
      )}
    </div>
  );
};
export default App;
