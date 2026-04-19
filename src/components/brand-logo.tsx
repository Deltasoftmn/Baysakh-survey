import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoSize = "xs" | "sm" | "md";

const dimensions: Record<BrandLogoSize, number> = {
  xs: 32,
  sm: 36,
  md: 40
};

type BrandLogoProps = {
  alt: string;
  /**
   * `true`: white tile + logo forced to dark (for footer / scrolled header / mobile drawer).
   * `false`: navy tile for the white-on-transparent PNG (for header over the dark hero).
   */
  onLightBackground?: boolean;
  size?: BrandLogoSize;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  alt,
  onLightBackground = true,
  size = "sm",
  priority = false,
  className
}: BrandLogoProps) {
  const d = dimensions[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-md shadow-sm ring-1",
        onLightBackground
          ? "bg-white ring-black/10"
          : "bg-[rgb(var(--brand-2))]/92 ring-white/25 backdrop-blur-sm",
        className
      )}
      style={{ height: d, width: d }}
    >
      <Image
        src="/logo.png"
        alt={alt}
        fill
        className={cn(
          "object-contain object-center p-1.5",
          onLightBackground && "brightness-0"
        )}
        sizes={`${d}px`}
        priority={priority}
      />
    </div>
  );
}
