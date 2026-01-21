"use client";

import { StatCard } from "@/components/shared/stat-card";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Building2, Users, Package, MapPin } from "lucide-react";

const stats = [
  {
    value: 217,
    label: "Community Pharmacies",
    icon: Building2,
  },
  {
    value: 90,
    label: "Population Coverage",
    suffix: "%",
    icon: Users,
  },
  {
    value: 95,
    label: "Medicine Availability",
    suffix: "%",
    icon: Package,
  },
  {
    value: 19,
    label: "Health Districts Served",
    icon: MapPin,
  },
];

export function StatsSection() {
  return (
    <section className="border-b bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <StaggerContainer>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  icon={stat.icon}
                  delay={index * 0.1}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
