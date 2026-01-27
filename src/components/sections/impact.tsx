"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Building, Users, Pill, MapPin, Heart, Award } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { siteConfig } from "@/config/site";

const impactStats = [
  {
    icon: Building,
    value: siteConfig.stats.communityPharmacies,
    suffix: "+",
    label: "Community Pharmacies",
    description: "Serving rural & urban areas",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: Users,
    value: siteConfig.stats.populationServed,
    suffix: "M+",
    label: "Population Served",
    description: "Across the region",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: Pill,
    value: siteConfig.stats.medicineAvailability,
    suffix: "%",
    label: "Medicine Availability",
    description: "WHO quality standards",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: MapPin,
    value: siteConfig.stats.healthDistricts,
    suffix: "",
    label: "Health Districts",
    description: "Complete coverage",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Heart,
    value: siteConfig.stats.healthWorkers,
    suffix: "+",
    label: "Health Workers",
    description: "Trained professionals",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Award,
    value: siteConfig.stats.yearsOfService,
    suffix: "+",
    label: "Years of Service",
    description: `Since ${siteConfig.foundedYear}`,
    color: "from-purple-500 to-purple-600",
  },
];

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start * 10) / 10);
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.round(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section className="py-10 lg:py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
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
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
          >
            Our Impact
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Transforming Healthcare{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
              Across the Region
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-white/70"
          >
            For over three decades, we have been dedicated to improving healthcare
            access and outcomes for millions of people in the North West Region.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>

                {/* Label */}
                <p className="text-lg font-semibold text-white/90 mb-1">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-sm text-white/60">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
