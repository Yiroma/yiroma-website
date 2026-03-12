import { addonPlans } from "./pricing.data";
import { PricingCard } from "./PricingCard";

export function AddonSection() {
  return (
    <section className="bg-background relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 md:mb-14">
          <p className="text-primary mb-2.5 text-xs font-semibold tracking-[0.08em] uppercase">
            Identité visuelle & Audit
          </p>
          <h2 className="text-foreground font-sans text-[clamp(1.5rem,3vw,2rem)] leading-tight font-bold">
            Des prestations complémentaires
            <br />
            pour aller plus loin
          </h2>
          <div className="bg-primary mt-3.5 h-0.75 w-10 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {addonPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} ariaLabel="Inclus dans cette prestation" />
          ))}
        </div>
      </div>
    </section>
  );
}
