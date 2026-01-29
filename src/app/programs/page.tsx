"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building, Users, Heart, Pill, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import { sections, getAllPrograms } from "@/data/sections";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  { value: siteConfig.stats.healthFacilities, label: "Health Facilities", icon: Building },
  { value: siteConfig.stats.communitiesServed, label: "People Served", icon: Users },
  { value: siteConfig.stats.medicineAvailability, label: "Medicine Availability", icon: Pill },
  { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", icon: Shield },
];

export default function ProgramsPage() {
  const allPrograms = getAllPrograms();

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section with Background Image */}
      <PageHero
        badge={{ icon: Heart, text: "Our Programs" }}
        title="Healthcare Programs for"
        titleHighlight="Every Community"
        description="Comprehensive healthcare initiatives designed to improve access and outcomes across the North West Region of Cameroon."
        backgroundImage="/images/096A0599.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="white"
            asChild
          >
            <Link href="/sections">
              <Shield className="mr-2 h-5 w-5" />
              View Sections
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="py-8 -mt-20 relative z-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs by Section */}
      <section className="py-8 lg:py-12">
        <div className="container">
          {/* Section Header */}
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
              What We Do
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
            >
              Our Healthcare{" "}
              <span className="text-gradient">Programs</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-neutral-600"
            >
              Explore our {allPrograms.length} comprehensive programs organized across {sections.length} strategic sections,
              designed to serve every member of our community with quality healthcare services.
            </motion.p>
          </motion.div>

          {/* Programs by Section */}
          {sections.map((section) => (
            <div key={section.id} className="mb-16 lg:mb-24">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <Link
                    href={`/sections/${section.slug}`}
                    className="text-2xl sm:text-3xl font-bold text-neutral-900 hover:text-primary-600 transition-colors"
                  >
                    {section.acronym}
                  </Link>
                  <p className="text-neutral-500">{section.shortTitle}</p>
                </div>
                <div className="flex-1" />
                <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                  <Link href={`/sections/${section.slug}`}>
                    View Section
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Programs Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {section.programs.map((program) => (
                  <motion.div
                    key={program.id}
                    variants={staggerItem}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`/programs/${program.slug}`}
                      className="group block h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />

                        {/* Icon Badge */}
                        <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                          <program.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Stats overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {program.stats.slice(0, 2).map((stat, statIndex) => (
                              <div
                                key={statIndex}
                                className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-900"
                              >
                                <span className="font-bold text-primary-600">{stat.value}</span> {stat.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <Badge className={`${program.bgColor} text-neutral-700 border-0 mb-3`}>
                          {section.acronym}
                        </Badge>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                          {program.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-4">
                          {program.features.slice(0, 3).map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="w-4 h-4 text-accent-500 shrink-0" />
                              <span className="text-neutral-600 text-xs truncate">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Link */}
                        <div className="flex items-center text-primary-600 font-medium text-sm">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
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
              Join us in our mission to make quality healthcare accessible to everyone
              in the North West Region. Together, we can make a difference.
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
