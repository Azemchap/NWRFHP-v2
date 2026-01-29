"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/head-office.jpg"
          alt="NWRFHP Healthcare"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay - Using new primary blue with stronger contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/65 via-primary-900/50 to-primary-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-primary-950/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-accent-400 rounded-full"
              />
              Serving Communities Since {siteConfig.foundedYear}
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={staggerItem}
              className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-lg"
            >
              Quality Healthcare for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-300">
                North West Region
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="mb-8 text-lg lg:text-xl text-white/95 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md"
            > We partner with organizations and communities to build a healthier future for over 2.2 million people in Cameroon.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
            >
              {[
                `${siteConfig.stats.medicineAvailability}% Medicines Availability`,
                `${siteConfig.stats.healthDistricts}+ Health Districts`
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                variant="default"
                className="w-full sm:w-auto group"
                asChild
              >
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="white"
                className="w-full sm:w-auto"
                asChild
              >
                <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-[2rem] blur-2xl" />

              {/* Main Stats Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-accent-400" />
                  <h3 className="text-white text-lg font-semibold">Our Impact in Numbers</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: `${siteConfig.stats.healthFacilities}+`, label: "Health Facilities", color: "primary" },
                    { value: `${siteConfig.stats.communitiesServed}k+`, label: "Communities Served", color: "accent" },
                    { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", color: "primary" },
                    { value: `${siteConfig.stats.healthWorkers}+`, label: "Health Workers Empowered", color: "accent" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="text-center p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300"
                    >
                      <p className={`text-3xl xl:text-4xl font-bold ${stat.color === 'primary' ? 'text-white' : 'text-accent-400'}`}>
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/80 mt-2">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* WHO Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="mt-8 flex items-center justify-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-white/10"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-accent-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg">WHO Standards</p>
                    <p className="text-white/80 text-sm">Certified Healthcare Provider</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
        >
          <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/80 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
