import { cn } from "@/lib/cn";

export function Container({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 lg:py-20", className)}>
      {children}
    </section>
  );
}

