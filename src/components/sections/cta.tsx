"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-24 bg-primary-600 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Join Our Healthcare Mission
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Make a{" "}
            <span className="text-accent-300">Difference Together?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us, access our services, or support our mission,
            we'd love to hear from you. Let's build a healthier community together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-primary-700 hover:bg-neutral-100"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+237651421052">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Quick Contact Options */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
            <a
              href="mailto:info@nwrfhp.org"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@nwrfhp.org</span>
            </a>
            <a
              href="https://wa.me/237651421052"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-accent-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="tel:+237651421052"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+237 651 421 052</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
