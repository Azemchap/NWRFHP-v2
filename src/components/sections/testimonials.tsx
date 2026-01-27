"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    quote: "The Health Voucher program saved my life and my baby's life. I delivered safely at the hospital for just FCFA 6,000. Thank you NWRFHP!",
    author: "Mary N.",
    role: "Health Voucher Beneficiary",
    location: "Bamenda",
    image: "/images/social11.jpg",
    rating: 5,
  },
  {
    quote: "Having access to affordable medicines at the community pharmacy near my village has made a huge difference for my family's health.",
    author: "Peter T.",
    role: "Community Member",
    location: "Nkambe",
    image: "/images/front3.jpg",
    rating: 5,
  },
  {
    quote: "The dialysis program gave me hope when I thought all was lost. Paying FCFA 15,000 for a whole year of treatment is a blessing.",
    author: "Emmanuel F.",
    role: "Dialysis Patient",
    location: "Bamenda",
    image: "/images/front4.jpg",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-10 lg:py-16 bg-neutral-50">
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
            Testimonials
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
          >
            Stories of{" "}
            <span className="text-gradient">Impact</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-neutral-600"
          >
            Hear from the communities and individuals whose lives have been
            transformed by our healthcare programs.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-neutral-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  <p className="text-xs text-primary-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
