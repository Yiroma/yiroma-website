import { addonPlans } from "./pricing.data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "./PricingCard";

export function AddonSection() {
  return (
    <section className="bg-background relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Identité visuelle & Audit"
          title={
            <>
              Des prestations complémentaires
              <br />
              pour aller plus loin
            </>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {addonPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} ariaLabel="Inclus dans cette prestation" />
          ))}
        </div>
      </div>
    </section>
  );
}
