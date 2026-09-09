import {
  Activity,
  GitBranch,
  HeartPulse,
  Layers,
  Replace,
  RotateCcw,
  Scissors,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Activity,
  GitBranch,
  HeartPulse,
  Layers,
  Replace,
  RotateCcw,
  Scissors,
  Wrench,
};

export function TreatmentIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? HeartPulse;
  return <Icon className={className} aria-hidden="true" />;
}
