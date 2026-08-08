import { Skeleton } from '@/components/ui/skeleton';

const DailyForecastSkeleton = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <Skeleton className="h-3 w-16" />
      <div className="-mx-2 mt-5 flex gap-3 overflow-x-auto px-2 pb-2 py-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="flex min-w-[120px] flex-1 flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-5"
          >
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-9 w-9 rounded-full" />
            <div className="flex gap-2 items-baseline">
              <Skeleton className="h-7 w-12" />
              <Skeleton className="h-5 w-12" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default DailyForecastSkeleton;
