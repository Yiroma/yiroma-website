"use client";

import Link from "next/link";
import { Check, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/data/pricing.data";
import { navLinks } from "@/data/nav.data";
import { staggerItem } from "@/lib/motion-variants";

type Props = {
  plan: PricingPlan;
  ariaLabel?: string;
};

export function PricingCard({ plan, ariaLabel = "Inclus dans ce forfait" }: Props) {
  return (
    <motion.div
      variants={staggerItem}
      className="h-full"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={cn(
          "relative flex h-full flex-col gap-5 py-6",
          plan.highlighted
            ? "border-primary/50 bg-primary/5 ring-primary/20"
            : "ring-foreground/10",
        )}
      >
        {plan.highlighted && (
          <span className="text-primary bg-primary/10 absolute top-4 right-4 rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold">
            Le plus choisi
          </span>
        )}

        <CardHeader className="gap-0 pb-0">
          <CardTitle
            className={cn(
              "text-sm font-semibold",
              plan.highlighted ? "text-primary" : "text-foreground",
            )}
          >
            {plan.name}
          </CardTitle>
          <p className="text-muted-foreground text-xs leading-normal">{plan.tagline}</p>
        </CardHeader>

        <CardContent className="flex flex-col gap-5">
          <p className="text-foreground font-heading text-lg leading-snug font-bold">
            {plan.price}
          </p>

          <p className="text-muted-foreground text-xs leading-normal">Idéal pour : {plan.target}</p>

          <ul className="flex flex-col gap-2" aria-label={ariaLabel}>
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs">
                <Check size={13} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="mt-auto flex-col items-stretch gap-3 border-t border-dashed pt-4">
          <p className="text-muted-foreground flex items-center gap-1.5 text-[0.6875rem]">
            <Clock size={11} className="shrink-0" aria-hidden="true" />
            Délai estimé : {plan.delay}
          </p>
          <Link
            href={navLinks[3].href}
            className={cn(
              buttonVariants({
                variant: plan.highlighted ? "default" : "outline",
                size: "sm",
              }),
              "w-full justify-center text-xs",
            )}
          >
            {plan.cta}
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
