import { HomeHero } from "@/components/home/HomeHero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyYiroma } from "@/components/home/WhyYiroma";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { PricingPreview } from "@/components/home/PricingPreview";
import { HomeCtaFinal } from "@/components/home/HomeCtaFinal";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ServicesPreview />
      <WhyYiroma />
      <ProjectsPreview />
      <PricingPreview />
      <HomeCtaFinal />
    </main>
  );
}
