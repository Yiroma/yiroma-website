"use client";

import { useBlobAnimation } from "@/hooks/useBlobAnimation";

interface HeroWrapperProps {
  children: React.ReactNode;
}

export function HeroWrapper({ children }: HeroWrapperProps) {
  const { setRef } = useBlobAnimation(3);

  return (
    <section className="section-primary-bg relative z-0 overflow-hidden py-20 pb-16 md:py-28 md:pb-24">
      <div ref={setRef(0)} className="section-blob-1" />
      <div ref={setRef(1)} className="section-blob-2" />
      <div ref={setRef(2)} className="section-blob-3" />
      <div className="section-diagonal pointer-events-none absolute inset-0" />
      <div className="section-spotlights pointer-events-none absolute inset-0" />
      <div className="section-fade pointer-events-none absolute inset-0" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">{children}</div>
    </section>
  );
}
