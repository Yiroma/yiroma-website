import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyYiroma } from "@/components/home/WhyYiroma";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyYiroma />
      <ProjectsPreview />
    </main>
  );
}
