import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchBar = ({
  onSearch,
  loading,
}: {
  onSearch: (cityName: string) => void;
  loading?: boolean;
}) => {
  const [query, setQuery] = useState('');

  return (
    <form
      className="flex w-full items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (query.trim()) {
          onSearch(query);
        }
      }}
    >
      <div className="relative flex min-w-0 flex-1 items-center">
        <Search className="absolute top-1/2 text-muted-foreground h-4.5 w-4.5 -translate-y-1/2 left-3.5" />
        <Input
          className="rounded-full h-11 w-full min-w-0 border border-border bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-primary"
          placeholder="Masukan nama kota"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Button
        variant={'default'}
        className="rounded-full h-11 px-5"
        type="submit"
        disabled={loading}
      >
        Cari Kota
      </Button>
    </form>
  );
};
export default SearchBar;
