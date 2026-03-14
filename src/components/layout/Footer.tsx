"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { YiromaLogo } from "@/components/ui/YiromaLogo";
import { navLinks } from "@/data/nav.data";
import { socialLinks } from "@/data/contact.data";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

export function Footer() {
  return (
    <footer className="border-border bg-muted relative z-10 border-t shadow-[0_-20px_24px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <motion.div
          className="mb-12 flex flex-col gap-10 sm:flex-row sm:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={staggerItem} className="max-w-xs">
            <Link
              href="/"
              className="text-foreground mb-3 inline-flex items-center gap-2 font-bold"
            >
              <YiromaLogo width={27} height={20} className="text-foreground" />
              <span className="text-lg">Yiroma</span>
            </Link>

            <div className="mb-3 flex gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mon profil ${label}`}
                  className="border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground flex h-8.5 w-8.5 items-center justify-center rounded-md border transition-colors duration-150"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur Full Stack Freelance
              <br />
              Châteauneuf-sur-Loire (45) · Région Orléanaise
              <br />
              Remote toute la France
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="text-right">
            <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
              Navigation
            </p>
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
          </motion.div>
        </motion.div>

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
