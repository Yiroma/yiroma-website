"use client";

import { motion } from "framer-motion";
import { webPlans } from "@/data/pricing.data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "./PricingCard";
import { MaintenanceBlock } from "./MaintenanceBlock";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function PricingSection() {
  return (
    <section className="bg-muted/40 relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {webPlans.map((plan) => (
            <div key={plan.name} id={plan.id}>
              <PricingCard plan={plan} />
            </div>
          ))}
        </motion.div>

        <div className="mt-8">
          <MaintenanceBlock />
        </div>
      </div>
    </section>
  );
}
