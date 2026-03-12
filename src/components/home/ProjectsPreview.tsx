import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Project = {
  id: string;
  type: string;
  year: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    id: "careplan",
    type: "Application",
    year: "2025",
    title: "CarePlan",
    description:
      "Gestion de plannings médicaux complexes avec plusieurs rôles utilisateurs dans une seule interface.",
    stack: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Docker"],
    href: "/portfolio#careplan",
  },
  {
    id: "hive",
    type: "Application",
    year: "2025",
    title: "Hive",
    description:
      "Bibliothèque de médias locale avec favoris et recommandations, pensée pour tourner sur NAS ou Raspberry Pi.",
    stack: ["React", "TypeScript", "Tailwind", "GraphQL", "SQLite"],
    href: "/portfolio#hive",
  },
  {
    id: "taxi",
    type: "Site web",
    year: "2024",
    title: "Taxi Loire Valley Services",
    description:
      "Site vitrine pour VTC local avec identité visuelle créée de zéro et SEO local optimisé — Lighthouse > 95.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    href: "/portfolio#taxi",
  },
];

export function ProjectsPreview() {
  return (
    <section className="bg-muted relative z-10 py-16 shadow-[0_-20px_24px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] md:py-24">
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Quelques réalisations"
          title={
            <>
              Des projets concrets,
              <br />
              pour des besoins réels.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className={cn(
                "project-card",
                "border-border bg-card relative flex flex-col gap-3 overflow-hidden rounded-xl border p-7",
                "transition-[box-shadow,transform] duration-200",
                "hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]",
              )}
            >
              <div className="flex items-center gap-2">
                <span className="border-primary/20 bg-primary/10 text-primary rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-semibold">
                  {project.type}
                </span>
                <span className="text-muted-foreground text-xs">{project.year}</span>
              </div>

              <h3 className="text-foreground font-sans text-[1.0625rem] font-semibold">
                {project.title}
              </h3>

              <p className="text-muted-foreground flex-1 text-sm leading-[1.6]">
                {project.description}
              </p>

              <ul className="mt-1 flex flex-wrap gap-1.5" aria-label="Stack technique">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="border-border bg-muted text-muted-foreground rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="text-primary inline-flex items-center gap-1.5 text-sm font-medium transition-[gap] duration-150 hover:gap-2.5"
          >
            Voir toutes mes réalisations <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
