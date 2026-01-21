"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInUp, fadeIn } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 lg:min-h-[700px]">
      <div className="container relative z-10 px-4 py-20 text-center lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={slideInUp}
          >
            Quality Healthcare for{" "}
            <span className="text-primary">North West Region</span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl"
            variants={slideInUp}
            transition={{ delay: 0.2 }}
          >
            Promoting sustainable access to essential medicines and health services
            for the population since 1987
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={slideInUp}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/programs">
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+237651421052">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-500/5 blur-3xl" />
    </section>
  );
}
