"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={resolvedTheme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md",
        "border-border bg-background text-muted-foreground border",
        "hover:text-foreground transition-colors duration-150",
        "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <Sun size={15} strokeWidth={1.5} className="hidden dark:block" />
      <Moon size={15} strokeWidth={1.5} className="block dark:hidden" />
    </button>
  );
}
