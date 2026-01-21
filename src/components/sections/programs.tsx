"use client";

import { ProgramCard } from "@/components/shared/program-card";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Essential Medicines Management",
    description:
      "Ensuring 95% availability of quality medicines across 217 community pharmacies serving rural and urban populations.",
    imageUrl: "/images/programs/medicines.jpg",
    slug: "essential-medicines",
  },
  {
    title: "Community Health Services",
    description:
      "Comprehensive primary healthcare services delivered through our extensive network of community health workers.",
    imageUrl: "/images/programs/community-health.jpg",
    slug: "community-health",
  },
  {
    title: "Universal Health Coverage",
    description:
      "Working towards accessible, affordable, and quality healthcare for all residents of North West Region.",
    imageUrl: "/images/programs/uhc.jpg",
    slug: "universal-health-coverage",
  },
];

export function ProgramsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-neutral-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl mb-4">
            Our Healthcare Programs
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
            Comprehensive initiatives designed to improve healthcare access and outcomes across the North West Region
          </p>
        </motion.div>

        {/* Programs Grid */}
        <StaggerContainer>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {programs.map((program) => (
              <StaggerItem key={program.slug}>
                <ProgramCard {...program} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs" className="group">
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
