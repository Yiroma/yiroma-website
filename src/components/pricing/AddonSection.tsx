"use client";

import { m } from "framer-motion";
import { addonPlans } from "@/data/pricing.data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "./PricingCard";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function AddonSection() {
  return (
    <section className="bg-background relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </m.div>

        <m.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {addonPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} ariaLabel="Inclus dans cette prestation" />
          ))}
        </m.div>
      </div>
    </section>
  );
}
