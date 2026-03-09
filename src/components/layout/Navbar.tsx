import Link from "next/link";
import { cn } from "@/lib/utils";
import { YiromaLogo } from "@/components/ui/YiromaLogo";
import { NavbarMobile } from "@/components/layout/NavbarMobile";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
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
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-muted-foreground text-sm font-medium",
                    "hover:text-foreground transition-colors duration-150",
                    "focus-visible:ring-primary rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
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
    </header>
  );
}
