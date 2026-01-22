"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Pill, Heart, Shield, ArrowRight, CheckCircle, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const programs = [
  {
    id: "essential-medicines",
    title: "Essential Medicines Management",
    description:
      "Ensuring consistent supply and quality of essential medicines across 217 community pharmacies serving rural and urban populations.",
    image: "/images/formulary.jpg",
    icon: Pill,
    color: "from-blue-500 to-blue-600",
    features: [
      "95% medicine availability rate",
      "217 community pharmacies",
      "WHO quality standards",
      "Affordable pricing for all",
    ],
  },
  {
    id: "community-health",
    title: "Community Health Services",
    description:
      "Comprehensive primary healthcare services delivered through our extensive network of trained community health workers.",
    image: "/images/delivery.jpg",
    icon: Heart,
    color: "from-red-500 to-red-600",
    features: [
      "850+ trained health workers",
      "19 health districts covered",
      "Primary care services",
      "Health education programs",
    ],
  },
  {
    id: "universal-health-coverage",
    title: "Universal Health Coverage",
    description:
      "Working towards accessible, affordable, and quality healthcare for all residents of the North West Region.",
    image: "/images/UHC1.jpg",
    icon: Shield,
    color: "from-green-500 to-green-600",
    features: [
      "2.2M population served",
      "90% geographic coverage",
      "Subsidized healthcare",
      "Community partnerships",
    ],
  },
];

const stats = [
  { value: siteConfig.stats.healthFacilities, label: "Health Facilities", icon: Building },
  { value: siteConfig.stats.communitiesServed, label: "People Served", icon: Users },
  { value: siteConfig.stats.medicineAvailability, label: "Medicine Availability", icon: Pill },
  { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", icon: Shield },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
            >
              <Heart className="w-4 h-4" />
              Our Programs
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Healthcare Programs for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                Every Community
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Comprehensive healthcare initiatives designed to improve access and outcomes
              across the North West Region of Cameroon.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Programs List */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-16 lg:space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
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
                  <div className="relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                  </div>
                  {/* Floating badge */}
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} bg-white rounded-2xl p-4 shadow-xl`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
                    Program {index + 1}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                    {program.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-accent-600" />
                        </div>
                        <span className="text-neutral-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button size="lg" asChild>
                    <Link href={`/programs/${program.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to Partner With Us?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
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
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
