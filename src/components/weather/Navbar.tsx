import { Button } from '@/components/ui/button';
import SearchBar from '@/components/weather/SearchBar';
import { CloudSun, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type NavbarProps = {
  onSearch: (cityName: string) => void;
  loading?: boolean;
};

const Navbar = ({ onSearch, loading }: NavbarProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-glass backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center gap-3 px-4 py-3.5 sm:px-6 lg:gap-6">
        <div className="flex items-center min-w-0 gap-2.5">
          <div className="bg-primary p-2 rounded-full text-primary-foreground">
            <CloudSun className="h-5.5 w-5.5" />
          </div>
          <h1 className="font-semibold text-lg tracking-tight truncate text-foreground">
            Weatherly
          </h1>
        </div>
        <div className="min-w-0 flex-1">
          <SearchBar onSearch={onSearch} loading={loading} />
        </div>
        <div>
          <Button
            variant={'outline'}
            size={'icon-lg'}
            className="rounded-full"
            onClick={() =>
              setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
            }
          >
            {theme === 'dark' ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
