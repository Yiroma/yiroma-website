"use client";

import Link from "next/link";
import { Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";

export function MaintenanceBlock() {
  return (
    <Card className="flex-row items-center justify-between gap-5 px-6 py-6 md:px-8">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 shrink-0 rounded-lg p-2.5">
          <Wrench size={20} className="text-primary" aria-hidden="true" />
        </div>
        <div>
          <p className="text-foreground mb-1 text-sm font-semibold">
            {`Besoin d'un coup de main après livraison ?`}
          </p>
          <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
            {`Je propose une maintenance à la demande : corrections, mises à jour, évolutions mineures. Pas d'abonnement — vous faites appel à moi quand vous en avez besoin.`}
          </p>
        </div>
      </div>
      <Link
        href={`${navLinks[3].href}`}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shrink-0")}
      >
        Me contacter
      </Link>
    </Card>
  );
}
