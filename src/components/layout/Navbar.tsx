"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { YiromaLogo } from "@/components/ui/YiromaLogo";
import { NavbarMobile } from "@/components/layout/NavbarMobile";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navLinks } from "@/data/nav.data";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 60], [0.7, 0.95]);

  return (
    <motion.header
      style={{ "--nav-bg-opacity": bgOpacity } as React.CSSProperties}
      className="border-border sticky top-0 z-50 w-full border-b backdrop-blur-md"
      // Opacité du fond pilotée par le scroll via une variable CSS
      // bg-background/80 est remplacé par une inline style pour le contrôle fin
    >
      <div
        className="bg-background absolute inset-0"
        style={{ opacity: "var(--nav-bg-opacity, 0.8)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className={cn(
            "text-foreground inline-flex items-center gap-2 font-bold",
            "transition-opacity duration-150 hover:opacity-80",
            "focus-visible:ring-primary rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          )}
        >
          <YiromaLogo width={27} height={20} className="text-primary" />
          <span className="text-lg">Yiroma</span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={cn(
                      "py-1 text-sm font-medium",
                      "transition-colors duration-150",
                      "focus-visible:ring-primary rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="bg-primary absolute right-0 -bottom-1 left-0 h-0.5 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={navLinks.find((l) => l.href === "/contact")!.href}
            className={cn(
              "bg-primary text-primary-foreground hidden rounded-md px-4 py-2 text-sm font-medium md:inline-flex",
              "transition-all duration-150 hover:brightness-90",
              "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            )}
          >
            Demander un devis
          </Link>

          <ThemeToggle className="hidden md:flex" />
          <NavbarMobile navLinks={navLinks} />
        </div>
      </div>
    </motion.header>
  );
}
