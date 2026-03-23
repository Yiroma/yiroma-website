"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Fallback sans animation si l'API n'est pas disponible ou si reduced-motion est activé
    if (
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const { clientX: x, clientY: y } = e;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    document.documentElement.style.setProperty("--vt-r", `${radius}px`);

    (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(
      () => setTheme(nextTheme),
    );
  }

  return (
    <button
      onClick={handleToggle}
      aria-label="Changer le thème"
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
