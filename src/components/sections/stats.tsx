"use client";

import { StatCard } from "@/components/shared/stat-card";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Building2, Users, Package, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 217,
    label: "Community Pharmacies",
    description: "Serving rural & urban areas",
    icon: Building2,
    color: "primary" as const,
  },
  {
    value: 90,
    label: "Population Coverage",
    description: "Of the North West Region",
    suffix: "%",
    icon: Users,
    color: "accent" as const,
  },
  {
    value: 95,
    label: "Medicine Availability",
    description: "Essential medicines in stock",
    suffix: "%",
    icon: Package,
    color: "success" as const,
  },
  {
    value: 19,
    label: "Health Districts",
    description: "Actively supported",
    icon: MapPin,
    color: "primary" as const,
  },
];

export function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(26,115,232,0.03)_0%,transparent_50%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            Making a Difference Every Day
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
            Numbers that reflect our commitment to healthcare excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                  suffix={stat.suffix}
                  icon={stat.icon}
                  color={stat.color}
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
