"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { YiromaLogo } from "@/components/ui/YiromaLogo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

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
          "border-border bg-background text-muted-foreground border",
          "hover:text-foreground transition-colors duration-150",
          "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        )}
        aria-label="Ouvrir le menu"
      >
        <Menu size={18} strokeWidth={1.5} />
      </SheetTrigger>

      <SheetContent side="right" className="w-72 px-6 py-8">
        <SheetHeader className="mb-8 text-left">
          <SheetTitle>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-foreground inline-flex items-center gap-2 font-bold"
            >
              <YiromaLogo width={24} height={18} className="text-primary" />
              <span className="text-lg">Yiroma</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <motion.nav
          aria-label="Navigation mobile"
          variants={staggerContainer}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <motion.li key={href} variants={staggerItem}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-muted-foreground block rounded-md px-3 py-2.5 text-sm font-medium",
                    "hover:bg-accent hover:text-foreground transition-colors duration-150",
                    "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  )}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <motion.div variants={staggerItem} animate={open ? "visible" : "hidden"} initial="hidden">
          <Link
            href={navLinks[3].href}
            onClick={() => setOpen(false)}
            className={cn(
              "bg-primary mt-4 flex w-full items-center justify-center rounded-md px-4 py-2.5",
              "text-primary-foreground text-sm font-medium",
              "transition-all duration-150 hover:brightness-90",
              "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            )}
          >
            Demander un devis
          </Link>
        </motion.div>

        <div className="border-border mt-6 flex items-center justify-between border-t pt-6">
          <span className="text-muted-foreground pl-3 text-sm">Thème</span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
