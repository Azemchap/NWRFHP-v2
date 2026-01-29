"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Layers, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { sections } from "@/data/sections";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function SectionsPage() {
  const totalPrograms = sections.reduce((acc, s) => acc + s.programs.length, 0);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Layers, text: "Our Sections" }}
        title="Strategic Healthcare"
        titleHighlight="Sections"
        description="Our work is organized into three core sections, each containing specialized programs designed to deliver comprehensive healthcare services to the North West Region."
        backgroundImage="/images/096A0599.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="white" asChild>
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
            asChild
          >
            <Link href="/health">Learn About UHC</Link>
          </Button>
        </div>
      </PageHero>

      {/* Overview Stats */}
      <section className="py-8 -mt-20 relative z-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6"
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-1">
                {sections.length}
              </p>
              <p className="text-neutral-600">Core Sections</p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-1">
                {totalPrograms}
              </p>
              <p className="text-neutral-600">Active Programs</p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-1">
                {siteConfig.stats.populationServed}M
              </p>
              <p className="text-neutral-600">Population Served</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sections List */}
      <section className="py-16 lg:py-24">
        <div className="container">
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
              Explore Our Work
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
            >
              Our Core <span className="text-gradient">Sections</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-neutral-600">
              Each section represents a strategic pillar of our healthcare
              delivery system, working together to ensure comprehensive coverage
              for all communities.
            </motion.p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-16 lg:space-y-24">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={section.heroImage}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />

                    {/* Section badge */}
                    <div className="absolute top-6 left-6">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm`}
                      >
                        <section.icon
                          className={`w-5 h-5 ${section.iconColor}`}
                        />
                        <span className="font-bold text-neutral-900">
                          {section.acronym}
                        </span>
                      </div>
                    </div>

                    {/* Programs count */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-2">
                        {section.programs.slice(0, 3).map((program) => (
                          <span
                            key={program.id}
                            className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900"
                          >
                            {program.shortTitle}
                          </span>
                        ))}
                        {section.programs.length > 3 && (
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900">
                            +{section.programs.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Floating icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`absolute -bottom-6 ${
                      index % 2 === 0 ? "-right-6" : "-left-6"
                    } bg-white rounded-2xl p-4 shadow-xl border border-neutral-100`}
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}
                    >
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${section.bgColor} mb-4`}
                  >
                    <span className={`text-sm font-bold ${section.iconColor}`}>
                      Section {index + 1}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-xl text-primary-600 font-semibold mb-4">
                    {section.acronym}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-8">
                    {section.fullDescription}
                  </p>

                  {/* Programs List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                      Programs in this section
                    </p>
                    <div className="space-y-2">
                      {section.programs.map((program) => (
                        <Link
                          key={program.id}
                          href={`/programs/${program.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all group"
                        >
                          <div
                            className={`w-10 h-10 rounded-lg ${program.bgColor} flex items-center justify-center shrink-0`}
                          >
                            <program.icon
                              className={`w-5 h-5 ${program.iconColor}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                              {program.shortTitle}
                            </p>
                            <p className="text-sm text-neutral-500 truncate">
                              {program.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" className="group" asChild>
                    <Link href={`/sections/${section.slug}`}>
                      Explore {section.acronym} Section
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Heart className="w-4 h-4" />
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to Support Our Mission?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join us in our mission to make quality healthcare accessible to
              everyone in the North West Region. Together, we can make a
              difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
