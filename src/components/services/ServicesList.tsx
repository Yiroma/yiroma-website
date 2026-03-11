"use client";

import { ServiceSection } from "./ServiceSection";
import { services } from "./services.data";

export function ServicesList() {
  return (
    <>
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </>
  );
}
