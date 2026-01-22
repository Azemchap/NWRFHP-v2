"use client";

import { StatCard } from "@/components/shared/stat-card";
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            Making a Difference Every Day
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Numbers that reflect our commitment to healthcare excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                description={stat.description}
                suffix={stat.suffix}
                icon={stat.icon}
                color={stat.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
