import { Skeleton } from '@/components/ui/skeleton';

const HourlyForecastSkeleton = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3.5 w-20" />
        <div className="flex gap-1.5">
          <Skeleton className="h-4 w-4 rounded-full border-border" />
          <Skeleton className="h-4 w-4 rounded-full border-border" />
        </div>
      </div>

      <div className="-mx-2 mt-5 flex gap-3 overflow-x-auto px-2 pb-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-1 basis-[92px] flex-col items-center gap-2.5 rounded-2xl border border-border/60 bg-glass px-3 py-4"
          >
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-7 w-7 rounded-full" />
            <Skeleton className="h-3 w-12" />
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Skeleton className="h-3 w-3" />
              <Skeleton className="h-3 w-12" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HourlyForecastSkeleton;
