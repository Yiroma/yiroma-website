import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyYiroma } from "@/components/home/WhyYiroma";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyYiroma />
    </main>
  );
}
