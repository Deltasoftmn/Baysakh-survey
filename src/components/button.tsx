import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  className,
  variant = "primary"
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2";

  const styles: Record<Variant, string> = {
    primary:
      "bg-[rgb(var(--accent))] text-white shadow-sm hover:brightness-95 active:brightness-90",
    secondary:
      "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15",
    ghost:
      "bg-transparent text-[rgb(var(--fg))] ring-1 ring-[rgb(var(--line))] hover:bg-black/[0.03]"
  };

  const cls = cn(base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}

