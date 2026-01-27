"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building, Users, Heart, Pill, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import { programs } from "@/data/programs";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  { value: siteConfig.stats.healthFacilities, label: "Health Facilities", icon: Building },
  { value: siteConfig.stats.communitiesServed, label: "People Served", icon: Users },
  { value: siteConfig.stats.medicineAvailability, label: "Medicine Availability", icon: Pill },
  { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", icon: Shield },
];

export default function ProgramsPage() {
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
            className="bg-white text-primary-700 hover:bg-neutral-100"
            asChild
          >
            <Link href="/health">
              <Shield className="mr-2 h-5 w-5" />
              Learn About UHC
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
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
            {stats.map((stat, index) => (
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

      {/* Programs Grid */}
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
              Explore our comprehensive range of programs designed to serve every
              member of our community with quality healthcare services.
            </motion.p>
          </motion.div>

          {/* Programs List */}
          <div className="space-y-16 lg:space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
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
                  <div className="relative h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />

                    {/* Stats overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-3">
                        {program.stats.slice(0, 2).map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900"
                          >
                            <span className="font-bold text-primary-600">{stat.value}</span> {stat.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`absolute -bottom-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} bg-white rounded-2xl p-4 shadow-xl border border-neutral-100`}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                      <program.icon className="w-8 h-8 text-white" />
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
                  <Badge className={`${program.bgColor} text-neutral-700 border-0 mb-4`}>
                    Program {index + 1}
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
                    {program.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full ${program.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className={`w-4 h-4 ${program.iconColor || "text-primary-600"}`} />
                        </div>
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button size="lg" className="group" asChild>
                    <Link href={`/programs/${program.slug}`}>
                      Learn More
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
