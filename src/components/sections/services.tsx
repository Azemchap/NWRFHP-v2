"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { sections } from "@/data/sections";
import { useState } from "react";

export function ServicesSection() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
          >
            Our Sections
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
          >
            Core Healthcare{" "}
            <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-neutral-600"
          >
            Our work is organized into three strategic sections, each containing
            specialized programs designed to deliver comprehensive healthcare to the
            North West Region.
          </motion.p>
        </motion.div>

        {/* Sections Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={staggerItem}
              className="relative"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Section Card */}
              <div
                className={`group relative bg-white rounded-3xl p-6 lg:p-8 border-2 transition-all duration-300 h-full ${
                  hoveredSection === section.id
                    ? "border-primary-500 shadow-2xl shadow-primary-500/10"
                    : "border-neutral-100 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Acronym */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${section.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <section.icon
                        className={`w-7 h-7 lg:w-8 lg:h-8 ${section.iconColor}`}
                      />
                    </div>
                    <span
                      className={`text-sm font-bold ${section.iconColor} bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                    >
                      {section.acronym}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {section.shortTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed text-sm lg:text-base line-clamp-3">
                    {section.description}
                  </p>

                  {/* Programs Preview */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {section.programs.length} Programs
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {section.programs.slice(0, 3).map((program) => (
                        <span
                          key={program.id}
                          className={`text-xs px-2.5 py-1 rounded-full ${section.bgColor} ${section.iconColor} font-medium`}
                        >
                          {program.shortTitle}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Section Link */}
                  <Link
                    href={`/sections/${section.slug}`}
                    className={`inline-flex items-center text-sm font-semibold ${section.iconColor} group/link`}
                  >
                    Explore Section
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Dropdown */}
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 right-0 top-full mt-2 z-50"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-4 mx-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 px-2">
                          Programs in {section.acronym}
                        </p>
                        <div className="space-y-1">
                          {section.programs.map((program) => (
                            <Link
                              key={program.id}
                              href={`/programs/${program.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                            >
                              <div
                                className={`w-8 h-8 rounded-lg ${program.bgColor} flex items-center justify-center flex-shrink-0`}
                              >
                                <program.icon
                                  className={`w-4 h-4 ${program.iconColor}`}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-neutral-900 group-hover/item:text-primary-600 transition-colors truncate">
                                  {program.shortTitle}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover/item:text-primary-600 group-hover/item:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/sections">
              View All Sections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
