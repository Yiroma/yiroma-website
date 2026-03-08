"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { YiromaLogo } from "@/components/ui/YiromaLogo";

interface NavbarMobileProps {
  navLinks: { href: string; label: string }[];
}

export function NavbarMobile({ navLinks }: NavbarMobileProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md md:hidden",
          "border border-border bg-background text-muted-foreground",
          "transition-colors duration-150 hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        )}
        aria-label="Ouvrir le menu"
      >
        <Menu size={18} strokeWidth={1.5} />
      </SheetTrigger>

      <SheetContent side="right" className="w-72 px-6 py-8">
        <SheetHeader className="mb-8 text-left">
          <SheetTitle asChild>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 font-bold text-foreground"
            >
              <YiromaLogo width={24} height={18} className="text-primary" />
              <span className="text-lg">Yiroma</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Navigation mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground",
                    "transition-colors duration-150 hover:bg-accent hover:text-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(
              "flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5",
              "text-sm font-medium text-primary-foreground",
              "transition-all duration-150 hover:brightness-90",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            Demander un devis
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
