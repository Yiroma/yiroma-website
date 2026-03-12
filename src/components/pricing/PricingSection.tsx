import { webPlans } from "./pricing.data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "./PricingCard";
import { MaintenanceBlock } from "./MaintenanceBlock";

export function PricingSection() {
  return (
    <section className="bg-muted/40 relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Développement web"
          title={
            <>
              Choisissez le forfait
              <br />
              adapté à votre projet
            </>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {webPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-8">
          <MaintenanceBlock />
        </div>
      </div>
    </section>
  );
}
