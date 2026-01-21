"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Play, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInUp, fadeIn } from "@/lib/animations";

const heroFeatures = [
  "217 Community Pharmacies",
  "95% Medicine Availability",
  "19 Health Districts Served",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,115,232,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,191,165,0.06)_0%,transparent_50%)]" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={slideInUp}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"
            >
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Serving Communities Since 1987
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
              variants={slideInUp}
            >
              Quality Healthcare for{" "}
              <span className="relative">
                <span className="relative z-10 text-primary-600">
                  North West Region
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-0" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mb-8 text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              Promoting sustainable access to essential medicines and health services.
              We partner with communities to build a healthier future for all.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              variants={slideInUp}
              transition={{ delay: 0.2 }}
            >
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-neutral-200 text-sm text-neutral-700 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  {feature}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              variants={slideInUp}
              transition={{ delay: 0.3 }}
            >
              <Button size="xl" asChild className="w-full sm:w-auto">
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="w-full sm:w-auto">
                <a href="tel:+237651421052">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-10 pt-8 border-t border-neutral-200"
              variants={slideInUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-4">
                Trusted by Communities Across
              </p>
              <div className="flex items-center gap-8 justify-center lg:justify-start text-neutral-600">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">90%</p>
                  <p className="text-xs text-neutral-500">Population Coverage</p>
                </div>
                <div className="w-px h-10 bg-neutral-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">35+</p>
                  <p className="text-xs text-neutral-500">Years of Service</p>
                </div>
                <div className="w-px h-10 bg-neutral-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">217</p>
                  <p className="text-xs text-neutral-500">Pharmacies</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-600 to-primary-800 aspect-[4/5]">
                <Image
                  src="/images/head-office.jpg"
                  alt="NWRFHP Healthcare Services"
                  fill
                  className="object-cover mix-blend-overlay opacity-80"
                  priority
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Watch Our Story</p>
                      <p className="text-white/70 text-sm">2 minute overview</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-neutral-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">Quality Assured</p>
                    <p className="text-xs text-neutral-500">WHO Standards</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/2 bg-white rounded-xl shadow-lg p-4 border border-neutral-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-600">95%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">Medicine Available</p>
                    <p className="text-xs text-neutral-500">24/7 Supply Chain</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 35.8C384 38.3 480 51.7 576 55.8C672 60 768 55 864 48.3C960 41.7 1056 33.3 1152 33.3C1248 33.3 1344 41.7 1392 45.8L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
