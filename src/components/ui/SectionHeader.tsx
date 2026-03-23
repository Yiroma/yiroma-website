import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, align = "left" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={cn("mb-10 md:mb-14", centered && "text-center")}>
      <p className="text-primary mb-2.5 text-xs font-semibold tracking-[0.08em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-foreground font-heading text-[clamp(1.5rem,3vw,2rem)] leading-tight font-bold">
        {title}
      </h2>
      <div className={cn("bg-primary mt-3.5 h-0.75 w-10 rounded-full", centered && "mx-auto")} />
    </div>
  );
}
