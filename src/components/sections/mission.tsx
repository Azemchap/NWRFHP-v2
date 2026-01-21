"use client";

import { SlideInUp } from "@/components/animations/slide-in-up";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To assist the Ministry of Public Health in providing sustainable quality healthcare for the population of the North West Region.",
    color: "primary" as const,
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Promoting access to quality healthcare by improving the performance of the health system across all levels.",
    color: "accent" as const,
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.",
    color: "rose" as const,
  },
];

const colorMap = {
  primary: {
    bg: "bg-primary-50",
    iconBg: "bg-primary-100 group-hover:bg-primary-200",
    icon: "text-primary-600",
    border: "border-primary-100 group-hover:border-primary-200",
    accent: "bg-primary-500",
  },
  accent: {
    bg: "bg-accent-50",
    iconBg: "bg-accent-100 group-hover:bg-accent-200",
    icon: "text-accent-600",
    border: "border-accent-100 group-hover:border-accent-200",
    accent: "bg-accent-500",
  },
  rose: {
    bg: "bg-rose-50",
    iconBg: "bg-rose-100 group-hover:bg-rose-200",
    icon: "text-rose-600",
    border: "border-rose-100 group-hover:border-rose-200",
    accent: "bg-rose-500",
  },
};

export function MissionSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-neutral-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-white border border-neutral-200 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Why We Exist
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl mb-4">
            Our Purpose & Commitment
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 text-lg">
            Dedicated to transforming healthcare delivery and improving lives across the North West Region
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {values.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <SlideInUp key={item.title} delay={index * 0.15}>
                <div
                  className={cn(
                    "group relative h-full p-8 rounded-2xl bg-white",
                    "border transition-all duration-300",
                    "hover:shadow-xl hover:-translate-y-1",
                    colors.border
                  )}
                >
                  {/* Accent Line */}
                  <div
                    className={cn(
                      "absolute top-0 left-8 right-8 h-1 rounded-b-full",
                      colors.accent
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl",
                      "transition-all duration-300",
                      colors.iconBg
                    )}
                  >
                    <item.icon className={cn("h-8 w-8", colors.icon)} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Background decoration */}
                  <div
                    className={cn(
                      "absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-20",
                      colors.bg
                    )}
                  />
                </div>
              </SlideInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
