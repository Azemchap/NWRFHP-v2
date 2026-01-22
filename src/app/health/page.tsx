"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Baby,
  Droplets,
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Phone,
  Users,
  Building,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

const uhcPackages = [
  {
    id: 1,
    icon: Baby,
    title: "Children 0-5 Years",
    subtitle: "Free Consultations",
    description: "All children aged 0-5 years receive free medical consultations and treatment for malaria at enrolled government health facilities.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    features: [
      "Free consultation by doctors",
      "Malaria treatment included",
      "No registration required",
      "Available at all enrolled facilities",
    ],
  },
  {
    id: 2,
    icon: Heart,
    title: "Health Voucher",
    subtitle: "FCFA 6,000 Only",
    description: "Pregnant women pay just FCFA 6,000 for complete maternal care from conception to 42 days after delivery, including C-sections.",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    features: [
      "4 antenatal visits covered",
      "Safe delivery (including C-section)",
      "42 days postnatal care",
      "Emergency transport included",
    ],
  },
  {
    id: 3,
    icon: Stethoscope,
    title: "HIV/AIDS & TB",
    subtitle: "Free Treatment",
    description: "Persons living with HIV/AIDS, Tuberculosis, and Onchocerciasis receive completely free treatment including consultations and medications.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: [
      "Free ARV medications",
      "Free TB treatment",
      "Regular consultations",
      "Laboratory tests included",
    ],
  },
  {
    id: 4,
    icon: Droplets,
    title: "Hemodialysis",
    subtitle: "FCFA 15,000/Year",
    description: "Kidney patients access unlimited dialysis sessions for just FCFA 15,000 annually instead of FCFA 520,000 - a 97% cost reduction.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    features: [
      "Unlimited sessions for one year",
      "97% cost reduction",
      "Professional medical care",
      "Modern equipment",
    ],
  },
  {
    id: 5,
    icon: Users,
    title: "User Fee Removal",
    subtitle: "General Population",
    description: "The general public can access preventive and promotional health services free of charge at all enrolled government facilities.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    features: [
      "Free health education",
      "Preventive services",
      "Community outreach",
      "Promotional activities",
    ],
  },
];

const stats = [
  { value: "5", label: "Service Packages", icon: Shield },
  { value: "2.2M", label: "Population Covered", icon: Users },
  { value: "90%", label: "Geographic Coverage", icon: Building },
  { value: "6K", label: "FCFA Health Voucher", icon: Heart },
];

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Shield, text: "Universal Health Coverage" }}
        title="Quality Healthcare"
        titleHighlight="For Everyone"
        description="Comprehensive health coverage ensuring accessible, affordable, and quality healthcare for all residents of the North West Region through five key service packages."
        backgroundImage="/images/logu1.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-primary-700 hover:bg-neutral-100"
            asChild
          >
            <a href="#packages">
              View Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Stats Section */}
      <section className="py-8 -mt-20 relative z-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={staggerItem}
                className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
              >
                About UHC
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6"
              >
                Universal Health Coverage:{" "}
                <span className="text-gradient">The Umbrella of Care</span>
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-neutral-600 mb-6 leading-relaxed"
              >
                Universal Health Coverage (UHC) is a flagship health financing mechanism
                of the Government of Cameroon aimed at ensuring that all residents have
                access to quality healthcare services without facing financial hardship.
              </motion.p>
              <motion.p
                variants={staggerItem}
                className="text-neutral-600 mb-8 leading-relaxed"
              >
                Through NWRFHP, the UHC program in the North West Region covers five key
                service packages subsidized by the state budget, making essential healthcare
                accessible to the most vulnerable populations including children, pregnant
                women, and persons living with chronic conditions.
              </motion.p>

              <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/gallery">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Team
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/logu1.jpg"
                  alt="Universal Health Coverage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-600">5</p>
                    <p className="text-neutral-600 text-sm">Service Packages</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UHC Packages Section */}
      <section id="packages" className="py-20 lg:py-28 bg-neutral-50">
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
              UHC Packages
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
            >
              Five Packages of{" "}
              <span className="text-gradient">Health Coverage</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-neutral-600"
            >
              Comprehensive healthcare services subsidized by the government to ensure
              no one is left behind in accessing quality care.
            </motion.p>
          </motion.div>

          {/* Packages Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {uhcPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className={`bg-white rounded-3xl shadow-lg border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className={`${pkg.bgColor} ${pkg.iconColor} border-0 mb-2`}>
                          Package {pkg.id}
                        </Badge>
                        <h3 className="text-2xl font-bold text-neutral-900">{pkg.title}</h3>
                        <p className="text-primary-600 font-semibold">{pkg.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full ${pkg.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className={`w-4 h-4 ${pkg.iconColor}`} />
                          </div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative h-64 lg:h-auto ${pkg.bgColor} flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    <div className="relative text-center p-8">
                      <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <pkg.icon className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-4xl font-bold text-neutral-900">{pkg.subtitle}</p>
                      <p className={`text-sm ${pkg.iconColor} font-medium`}>{pkg.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Benefit Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={staggerItem}
                className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
              >
                Get Started
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8"
              >
                How to Become a{" "}
                <span className="text-gradient">Beneficiary</span>
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Visit a Health Facility",
                    description: "Go to any enrolled government health facility or community pharmacy in the North West Region.",
                  },
                  {
                    step: "02",
                    title: "Register for Services",
                    description: "Register for the appropriate UHC package. Health Voucher costs FCFA 6,000, Dialysis costs FCFA 15,000 annually.",
                  },
                  {
                    step: "03",
                    title: "Receive Your Care",
                    description: "Access quality healthcare services as covered by your package. No hidden costs or additional fees.",
                  },
                  {
                    step: "04",
                    title: "Stay Healthy",
                    description: "Continue to benefit from follow-up care and preventive services included in your coverage.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="/images/voucher.jpg" alt="Health Voucher" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="/images/delivery.jpg" alt="Healthcare Delivery" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="/images/front3.jpg" alt="Community" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="/images/formulary.jpg" alt="Medicines" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Access Quality Healthcare?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Do not let cost be a barrier to your health. Register for Universal Health Coverage
              today and join millions of beneficiaries across the North West Region.
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
