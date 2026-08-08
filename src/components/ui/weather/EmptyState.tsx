import { CloudSun } from 'lucide-react';

const EmptyState = () => {
  return (
    <section className="animate-fade-in mx-auto max-w-lg rounded-3xl border border-border bg-card p-12 text-center shadow-soft">
      <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-partly">
        <CloudSun className="h-12 w-12 text-primary" strokeWidth={1.25} />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
        Cari kota untuk melihat cuaca.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Sekilas tentang prakiraan, garis waktu dan kondisi setiap jam.
      </p>
    </section>
  );
};
export default EmptyState;
