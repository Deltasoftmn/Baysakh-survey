import type React from "react";

import {
  Building2,
  Circle,
  Cpu,
  Crosshair,
  Drone,
  HardHat,
  LandPlot,
  Map,
  Network,
  Ruler,
  Satellite,
  ShieldCheck,
  TrainFront,
  Waves
} from "lucide-react";

const icons = {
  "building-2": Building2,
  "train-front": TrainFront,
  network: Network,
  map: Map,
  "land-plot": LandPlot,
  drone: Drone,
  crosshair: Crosshair,
  "shield-check": ShieldCheck,
  cpu: Cpu,
  "hard-hat": HardHat,
  ruler: Ruler,
  waves: Waves,
  satellite: Satellite
} as const;

export function Icon({
  name,
  className,
  ...props
}: { name: string } & React.SVGProps<SVGSVGElement>) {
  const Cmp = (
    icons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>
  )[name];
  const I = Cmp ?? Circle;
  return <I className={className} aria-hidden="true" focusable="false" {...props} />;
}

