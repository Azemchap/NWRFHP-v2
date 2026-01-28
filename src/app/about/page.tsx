"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Building, Award, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const milestones = [
  { year: "1987", title: "Foundation", description: "Established as North West Pro Pharmacy to ensure constant supply of quality essential medicines." },
  { year: "1991", title: "Transformation", description: "Transformed into North West Provincial Special Fund for Health under Law No.90/62." },
  { year: "2012", title: "Public Interest Group", description: "Became a Public Interest Group under Law No.2010/023 on June 11, 2012." },
  { year: "2013", title: "Management Setup", description: "Constitutive General Assembly held to establish Management Committee and adopt internal regulations." },
];

const stats = [
  { value: siteConfig.stats.healthFacilities, label: "Community Pharmacies", icon: Building },
  { value: `${siteConfig.stats.populationServed}M`, label: "Population Served", icon: Users },
  { value: "90%", label: "Geographic Coverage", icon: Target },
  { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", icon: Award },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/096A0583.jpg"
            alt="About NWRFHP"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-800/70" />
        </div>

        <div className="container relative z-10 py-10 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
              >
                <Heart className="w-4 h-4" />
                About Us
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Who{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                  Are We?
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-white/80 mb-8 leading-relaxed"
              >
                The North West Regional Fund for Health Promotion - PIG is a public corporate dialogue
                structure serving the healthcare needs of Cameroon&apos;s North West Region since 1987.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" variant="white" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Brief History
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a cornerstone of healthcare in the North West Region
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 my-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">{milestone.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg border-neutral-200 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">Our Foundation</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    The North West Regional Fund for Health Promotion - PIG was set up in 1987 as North West Pro Pharmacy
                    to ensure a constant supply of quality essential medicines to the population of the North West region
                    in line with the 5th principal concerns of the Bamako Initiative.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    In compliance with its constituent agreement approved by Prime Ministerial order no. 005/CAB/PM of
                    January 21, 2013, a Constitutive General Assembly was held in December 2013 to put in place the
                    Management Committee and adopt the internal regulations and organizational chart.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-8 lg:py-12 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/delivery.jpg"
                  alt="Our Difference"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="text-4xl font-bold text-primary-600 mb-2">{siteConfig.stats.medicineAvailability}</p>
                <p className="text-neutral-600 text-sm">Medicine Availability Rate</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                How We Are Different
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                As PIG, we are a public corporate dialogue structure of the state, the technical/financial partners
                and the North West Community. As an essential health care program based on practical, scientifically
                sound, and socially acceptable methods, our services are made accessible to the population through
                their full participation and at a cost they can afford.
              </p>

              <div className="space-y-4">
                {[
                  "Started with 59 Community Pharmacies",
                  `Now serving ${siteConfig.stats.communityPharmacies} community pharmacies`,
                  `Coverage of ${siteConfig.stats.populationServed} million inhabitants`,
                  "90% geographical coverage",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-accent-600" />
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Vision, Mission & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                description: "To provide sustainable quality healthcare for the population of the North West Region.",
                color: "bg-blue-500",
              },
              {
                icon: Target,
                title: "Our Mission",
                description: "To assist the Ministry of Public Health in promoting access to quality healthcare of the population of the North West Region by stimulating the performance of the health system.",
                color: "bg-primary-500",
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.",
                color: "bg-accent-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-neutral-50 rounded-xl md:rounded-2xl p-4 sm:p-6 lg:p-8 border border-neutral-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl ${item.color} flex items-center justify-center mb-4 md:mb-6`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-neutral-900 mb-2 md:mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 lg:py-12 bg-primary-600">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Partner with us to make quality healthcare accessible to everyone in the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="white" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline-accent"
                className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
                asChild
              >
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
