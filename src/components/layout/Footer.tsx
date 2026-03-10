import Link from "next/link";
import { Briefcase, Github, Linkedin, MessageCircle } from "lucide-react";
import { YiromaLogo } from "@/components/ui/YiromaLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.malt.fr/profile/romaricyi", label: "Mon profil Malt", icon: Briefcase },
  { href: "https://linkedin.com/in/yiromaric", label: "Mon profil LinkedIn", icon: Linkedin },
  { href: "https://github.com/Yiroma", label: "Mon profil GitHub", icon: Github },
  { href: "https://wa.me/33695386099", label: "Contacter moi par WhatsApp", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-border bg-muted relative z-10 border-t shadow-[0_-20px_24px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="mb-12 flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="text-foreground mb-3 inline-flex items-center gap-2 font-bold"
            >
              <YiromaLogo width={27} height={20} className="text-foreground" />
              <span className="text-lg">Yiroma</span>
            </Link>

            <div className="mb-3 flex gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground flex h-8.5 w-8.5 items-center justify-center rounded-md border transition-colors duration-150"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur Full Stack Freelance
              <br />
              Châteauneuf-sur-Loire (45) · Région Orléanaise
              <br />
              Remote toute la France
            </p>
          </div>

          <div className="text-right">
            <h4 className="text-muted-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-muted-foreground text-sm">© 2024–{new Date().getFullYear()} Yiroma</p>

          <div className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-150"
            >
              Mentions légales
            </Link>
            <Link
              href="/cgv"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-150"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
