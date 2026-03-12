import Link from "next/link";
import { Briefcase, MessageCircle } from "lucide-react";
import { YiromaLogo } from "@/components/ui/YiromaLogo";

export function IconGithub({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

export function IconLinkedin({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type SocialIcon = typeof Briefcase | typeof MessageCircle | typeof IconGithub | typeof IconLinkedin;

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

const socialLinks: { href: string; label: string; icon: SocialIcon }[] = [
  { href: "https://www.malt.fr/profile/romaricyi", label: "Mon profil Malt", icon: Briefcase },
  { href: "https://linkedin.com/in/yiromaric", label: "Mon profil LinkedIn", icon: IconLinkedin },
  { href: "https://github.com/Yiroma", label: "Mon profil GitHub", icon: IconGithub },
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
