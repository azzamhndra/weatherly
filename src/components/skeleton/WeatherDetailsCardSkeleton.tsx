import { Skeleton } from '@/components/ui/skeleton';

const WeatherDetailsCardSkeleton = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <Skeleton className="h-3 w-16" />
      <div className="mt-5 grid grid-cols-2 gap-3">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border/60 bg-glass p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          >
            <Skeleton className="h-4 w-4" />
            <Skeleton className="mt-3 h-3 w-16" />
            <Skeleton className="mt-0.5 h-5 w-12" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default WeatherDetailsCardSkeleton;
