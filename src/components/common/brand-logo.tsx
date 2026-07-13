"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
        <span className="absolute h-2 w-2 rotate-45 rounded-sm bg-primary animate-diamond-pulse" />
        <span className="font-mono text-xs font-bold text-primary">AV</span>
      </span>
      <span className="hidden sm:inline text-sm text-foreground">Arthur Vega</span>
    </div>
  );
}
