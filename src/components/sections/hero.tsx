"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Serving Communities Since 1987
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
              Quality Healthcare for{" "}
              <span className="text-primary-600">North West Region</span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Promoting sustainable access to essential medicines and health services.
              We partner with communities to build a healthier future for all.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {["217 Community Pharmacies", "95% Medicine Availability", "19 Health Districts"].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-neutral-200 text-sm text-neutral-700 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+237651421052">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </a>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">90%</p>
                  <p className="text-sm text-neutral-500">Coverage</p>
                </div>
                <div className="w-px h-12 bg-neutral-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">35+</p>
                  <p className="text-sm text-neutral-500">Years</p>
                </div>
                <div className="w-px h-12 bg-neutral-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">217</p>
                  <p className="text-sm text-neutral-500">Pharmacies</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/head-office.jpg"
                alt="NWRFHP Healthcare Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4">
                  <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex-1 text-center">
                    <p className="text-2xl font-bold text-primary-600">95%</p>
                    <p className="text-xs text-neutral-600">Medicine Availability</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex-1 text-center">
                    <p className="text-2xl font-bold text-accent-600">WHO</p>
                    <p className="text-xs text-neutral-600">Standards Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
