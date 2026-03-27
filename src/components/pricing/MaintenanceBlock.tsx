"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";

export function MaintenanceBlock() {
  return (
    <Card className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
      <div className="flex items-center gap-4">
        <Image
          src="/maintenance.svg"
          alt=""
          width={64}
          height={64}
          className="h-36 w-auto shrink-0"
          style={{ width: "auto" }}
          aria-hidden="true"
        />
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
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "w-full justify-center text-xs sm:w-auto sm:shrink-0",
        )}
      >
        Me contacter
      </Link>
    </Card>
  );
}
