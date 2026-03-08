import Link from "next/link";
import { cn } from "@/lib/utils";
import { YiromaLogo } from "@/components/ui/YiromaLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2 font-bold text-foreground",
            "transition-opacity duration-150 hover:opacity-80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
          )}
        >
          <YiromaLogo width={27} height={20} className="text-primary" />
          <span className="text-lg">Yiroma</span>
        </Link>

        {/* Liens de navigation — desktop */}
        <nav aria-label="Navigation principale">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground",
                    "transition-colors duration-150 hover:text-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + placeholder menu mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              "hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground md:inline-flex",
              "transition-all duration-150 hover:brightness-90",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            Demander un devis
          </Link>

          {/* Menu mobile — à implémenter dans la prochaine issue */}
          <div className="md:hidden" aria-label="Menu mobile" />
        </div>
      </div>
    </header>
  );
}
