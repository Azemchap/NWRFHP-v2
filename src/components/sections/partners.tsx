"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const partners = [
  { src: "/images/logo1.gif", alt: "Ministry of Public Health", name: "Ministry of Public Health" },
  { src: "/images/logo2.png", alt: "WHO", name: "World Health Organization" },
  { src: "/images/logo3.png", alt: "UNICEF", name: "UNICEF" },
  { src: "/images/logo4.png", alt: "USAID", name: "USAID" },
  { src: "/images/logo5.png", alt: "Global Fund", name: "Global Fund" },
  { src: "/images/logo6.png", alt: "Regional Delegation", name: "NW Regional Delegation" },
];

export function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-neutral-100">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
            Our Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
            Trusted by Leading Organizations
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Working together with government agencies and international organizations
            to deliver quality healthcare across the North West Region.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center group"
            >
              <div className="relative h-16 w-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <p className="mt-3 text-xs text-neutral-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-12 border-t border-neutral-100"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-600">15+</p>
              <p className="text-sm text-neutral-600">Partner Organizations</p>
            </div>
            <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-primary-600">10+</p>
              <p className="text-sm text-neutral-600">International Funders</p>
            </div>
            <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-primary-600">37+</p>
              <p className="text-sm text-neutral-600">Years of Partnership</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
