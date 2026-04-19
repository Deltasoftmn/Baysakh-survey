import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  body,
  align = "left"
}: {
  kicker: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left")}>
      <div className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--brand))]/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[rgb(var(--brand))]">
        <span className="size-1.5 rounded-full bg-[rgb(var(--accent))]" />
        {kicker}
      </div>
      <h2 className="mt-4 text-balance font-[var(--font-condensed)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className={cn("mt-4 max-w-3xl text-base leading-relaxed text-slate-600", align === "center" ? "mx-auto" : "")}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

