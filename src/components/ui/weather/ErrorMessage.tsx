import { CloudOff } from 'lucide-react';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <section className="animate-fade-in mx-auto max-w-lg rounded-3xl border border-border bg-card p-12 text-center shadow-soft">
      <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-destructive">
        <CloudOff className="h-12 w-12 text-destructive" strokeWidth={1.25} />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
        Terjadi Kesalahan
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
    </section>
  );
};
export default ErrorMessage;
