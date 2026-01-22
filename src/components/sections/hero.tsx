"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
            >
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Serving Communities Since {siteConfig.foundedYear}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Quality Healthcare for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                North West Region
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Promoting sustainable access to essential medicines and health services.
              We partner with communities to build a healthier future for all in Cameroon.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              {[
                `${siteConfig.stats.healthFacilities} Community Pharmacies`,
                `${siteConfig.stats.medicineAvailability} Medicine Availability`,
                "19 Health Districts"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-sm text-white/90"
                >
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
                asChild
              >
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
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
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <h3 className="text-white text-lg font-semibold mb-6">Our Impact</h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: siteConfig.stats.healthFacilities, label: "Health Facilities", color: "primary" },
                    { value: siteConfig.stats.communitiesServed, label: "Communities Served", color: "accent" },
                    { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", color: "primary" },
                    { value: siteConfig.stats.healthWorkers, label: "Health Workers", color: "accent" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <p className={`text-3xl font-bold ${stat.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`}>
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* WHO Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mt-6 flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WHO Standards</p>
                    <p className="text-white/60 text-sm">Certified Healthcare Provider</p>
                  </div>
                </motion.div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-2xl blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent-500/30 to-primary-500/30 rounded-2xl blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
