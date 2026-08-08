import { Skeleton } from '@/components/ui/skeleton';

const CurrentWeatherCardSkeleton = () => {
  return (
    <section className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="relative flex flex-1 flex-col justify-between">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0 space-y-3">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-4 h-4 w-48" />
          </div>
          <Skeleton className="h-20 w-20 rounded-full sm:h-24 sm:w-24" />
        </div>
        <div className="mt-10">
          <Skeleton className="h-20 w-40" />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </section>
  );
};
export default CurrentWeatherCardSkeleton;
