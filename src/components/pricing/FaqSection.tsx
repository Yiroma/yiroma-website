"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { faqs } from "@/data/faq.data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion-variants";

export function FaqSection() {
  return (
    <section id="faq" className="bg-muted/40 relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader eyebrow="Questions fréquentes" title="Une question avant de se lancer ?" />
        </m.div>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <m.div
            className="w-56 shrink-0 md:w-80 lg:w-96"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/faq.svg"
              alt=""
              width={400}
              height={400}
              className="h-auto w-full"
              aria-hidden="true"
            />
          </m.div>

          <m.div
            className="w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Accordion multiple>
              {faqs.map((faq, index) => (
                <m.div key={faq.question} variants={staggerItem}>
                  <AccordionItem value={String(index)}>
                    <AccordionTrigger className="text-foreground text-sm font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </m.div>
              ))}
            </Accordion>
          </m.div>
        </div>
      </div>
    </section>
  );
}
