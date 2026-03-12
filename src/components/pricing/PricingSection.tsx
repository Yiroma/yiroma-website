import { webPlans } from "./pricing.data";
import { PricingCard } from "./PricingCard";
import { MaintenanceBlock } from "./MaintenanceBlock";

export function PricingSection() {
  return (
    <section className="bg-muted/40 relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 md:mb-14">
          <p className="text-primary mb-2.5 text-xs font-semibold tracking-[0.08em] uppercase">
            Développement web
          </p>
          <h2 className="text-foreground font-sans text-[clamp(1.5rem,3vw,2rem)] leading-tight font-bold">
            Choisissez le forfait
            <br />
            adapté à votre projet
          </h2>
          <div className="bg-primary mt-3.5 h-0.75 w-10 rounded-full" />
        </div>

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
