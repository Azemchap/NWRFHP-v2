"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Pill, Heart, Shield, Baby, Stethoscope, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    icon: Pill,
    title: "Essential Medicines",
    description: "Quality medicines available at 217 pharmacies with 95% availability rate.",
    href: "/programs/essential-medicines",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Community Health",
    description: "850+ trained health workers providing primary care across 19 districts.",
    href: "/programs/community-health",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Shield,
    title: "Health Coverage",
    description: "Universal Health Coverage serving 2.2 million with subsidized care.",
    href: "/programs/universal-health-coverage",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    description: "Health Voucher program for safe deliveries at just FCFA 6,000.",
    href: "/programs/maternal-child-health",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Stethoscope,
    title: "Disease Management",
    description: "Free treatment for HIV/AIDS, TB, and other priority diseases.",
    href: "/programs/disease-management",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Droplets,
    title: "Hemodialysis",
    description: "Life-saving dialysis services at FCFA 15,000 annually.",
    href: "/programs/hemodialysis",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
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
            Our Services
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
          >
            Comprehensive Healthcare{" "}
            <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-neutral-600"
          >
            From essential medicines to specialized treatment programs, we provide
            a complete range of healthcare services for the North West Region.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={service.href}
                className="group block h-full bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
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
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
