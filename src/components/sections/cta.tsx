"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Join Our Healthcare Mission
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Make a <br className="hidden sm:block" />
            <span className="text-accent-300">Difference Together?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to partner with us, access our services, or support our mission,
            we'd love to hear from you. Let's build a healthier community together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="xl"
              className="w-full sm:w-auto bg-white text-primary-700 hover:bg-neutral-100 hover:text-primary-800 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50"
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
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">info@nwrfhp.org</span>
            </a>
            <a
              href="https://wa.me/237651421052"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-accent-300 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="tel:+237651421052"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">+237 651 421 052</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
