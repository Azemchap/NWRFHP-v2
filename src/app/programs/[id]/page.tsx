"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Pill, Heart, Shield, Building, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";

const programsData = {
  "essential-medicines": {
    id: "essential-medicines",
    title: "Essential Medicines Management",
    subtitle: "Ensuring Quality Medicine Access for All",
    description: "Our Essential Medicines Management program ensures a constant supply of quality essential medicines to 217 community pharmacies across the North West Region, serving over 2.2 million people.",
    image: "/images/formulary.jpg",
    heroImage: "/images/delivery.jpg",
    icon: Pill,
    color: "from-blue-500 to-blue-600",
    overview: `The Essential Medicines Management program is the cornerstone of NWRFHP's operations. Established in 1987 as North West Pro Pharmacy, this program ensures a constant supply of quality essential medicines to the population of the North West region in line with the 5th principal concerns of the Bamako Initiative.

Our Regional Medical Store maintains 85% medicine availability, while community pharmacies achieve 90% availability. We keep medicine expiration rates below 4% through efficient inventory management and distribution systems.`,
    features: [
      "95% medicine availability rate across all facilities",
      "217 community pharmacies supplied from regional store",
      "WHO quality standards compliance",
      "Affordable pricing accessible to all income levels",
      "Continuous training on rational medicine use",
      "Less than 4% medicine expiry rate",
    ],
    stats: [
      { value: "217", label: "Community Pharmacies" },
      { value: "95%", label: "Medicine Availability" },
      { value: "<4%", label: "Expiry Rate" },
      { value: "2.2M", label: "People Served" },
    ],
    benefits: [
      { title: "Quality Assurance", description: "All medicines meet WHO quality standards and are sourced from verified suppliers." },
      { title: "Affordable Access", description: "Cost-effective pricing ensures medicines are accessible to all community members." },
      { title: "Reliable Supply", description: "Consistent availability through efficient supply chain management." },
      { title: "Professional Training", description: "Continuous training for health personnel on rational medicine use." },
    ],
  },
  "community-health": {
    id: "community-health",
    title: "Community Health Services",
    subtitle: "Healthcare Delivered to Your Doorstep",
    description: "Comprehensive primary healthcare services delivered through our extensive network of trained community health workers across 19 health districts.",
    image: "/images/delivery.jpg",
    heroImage: "/images/096A0583.jpg",
    icon: Heart,
    color: "from-red-500 to-red-600",
    overview: `Our Community Health Services program brings quality healthcare directly to communities across the North West Region. Working through 19 health districts, our trained community health workers provide essential primary healthcare services to populations that might otherwise lack access to medical care.

This program embodies the Bamako Initiative's principles of community participation and affordable healthcare, ensuring that services are accessible through full community participation at costs they can afford.`,
    features: [
      "850+ trained community health workers",
      "Coverage across 19 health districts",
      "Primary care and preventive services",
      "Health education and awareness programs",
      "Maternal and child health services",
      "Disease prevention and control",
    ],
    stats: [
      { value: "850+", label: "Health Workers" },
      { value: "19", label: "Health Districts" },
      { value: "90%", label: "Geographic Coverage" },
      { value: "500K+", label: "Annual Consultations" },
    ],
    benefits: [
      { title: "Accessible Care", description: "Healthcare services brought directly to remote and underserved communities." },
      { title: "Trained Professionals", description: "All health workers receive comprehensive training and ongoing support." },
      { title: "Preventive Focus", description: "Emphasis on prevention and health education to reduce disease burden." },
      { title: "Community Partnership", description: "Working with local health committees for sustainable healthcare delivery." },
    ],
  },
  "universal-health-coverage": {
    id: "universal-health-coverage",
    title: "Universal Health Coverage",
    subtitle: "Healthcare for Every Citizen",
    description: "Working towards accessible, affordable, and quality healthcare for all residents of the North West Region through innovative health financing mechanisms.",
    image: "/images/UHC1.jpg",
    heroImage: "/images/head-office.jpg",
    icon: Shield,
    color: "from-green-500 to-green-600",
    overview: `The Universal Health Coverage initiative represents NWRFHP's commitment to ensuring that all residents of the North West Region have access to quality healthcare without financial hardship. This program focuses on developing sustainable health financing mechanisms and expanding coverage to underserved populations.

Through partnerships with the government, development partners, and communities, we are building a healthcare system that leaves no one behind, providing coverage for essential health services across the region.`,
    features: [
      "2.2 million population coverage target",
      "90% geographic coverage achieved",
      "Subsidized healthcare for vulnerable groups",
      "Community-based health insurance schemes",
      "Partnership with government health programs",
      "Integration with national health strategy",
    ],
    stats: [
      { value: "2.2M", label: "Target Population" },
      { value: "90%", label: "Geographic Coverage" },
      { value: "37+", label: "Years of Service" },
      { value: "100%", label: "Commitment" },
    ],
    benefits: [
      { title: "Financial Protection", description: "Reducing out-of-pocket expenses through insurance and subsidy schemes." },
      { title: "Comprehensive Coverage", description: "Access to essential health services for all community members." },
      { title: "Equity Focus", description: "Prioritizing vulnerable and underserved populations." },
      { title: "Sustainable Financing", description: "Building long-term health financing mechanisms for the region." },
    ],
  },
};

type ProgramId = keyof typeof programsData;

export default function ProgramDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const program = programsData[id as ProgramId];

  if (!program) {
    notFound();
  }

  const Icon = program.icon;
  const otherPrograms = Object.values(programsData).filter((p) => p.id !== id);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/programs" className="hover:text-primary-600 transition-colors">
              Programs
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-neutral-900 font-medium">{program.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.heroImage}
            alt={program.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/70" />
        </div>

        <div className="container relative z-10 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-white hover:text-white hover:bg-white/10">
              <Link href="/programs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Programs
              </Link>
            </Button>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {program.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/80 mb-8"
            >
              {program.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/70 leading-relaxed max-w-2xl"
            >
              {program.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 text-center"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
                Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                About This Program
              </h2>
              <div className="prose prose-neutral max-w-none">
                {program.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-neutral-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Key Program Features
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-neutral-100"
              >
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-accent-600" />
                </div>
                <span className="text-neutral-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Why This Program Matters
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {program.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Want to Learn More?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us to learn more about our {program.title} program and how we can work together
              to improve healthcare in your community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100" asChild>
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

      {/* Other Programs */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Explore More
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Other Programs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherPrograms.map((otherProgram, index) => {
              const OtherIcon = otherProgram.icon;
              return (
                <motion.div
                  key={otherProgram.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/programs/${otherProgram.id}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={otherProgram.image}
                          alt={otherProgram.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${otherProgram.color} flex items-center justify-center`}>
                          <OtherIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                          {otherProgram.title}
                        </h3>
                        <p className="text-neutral-600 text-sm line-clamp-2">
                          {otherProgram.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
