"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface PageHeroProps {
  badge?: {
    icon?: LucideIcon;
    text: string;
  };
  title: string;
  titleHighlight?: string;
  description?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  centered?: boolean;
  minHeight?: string;
  overlay?: "dark" | "primary" | "gradient";
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  backgroundImage,
  children,
  centered = true,
  minHeight = "min-h-[60vh]",
  overlay = "primary",
}: PageHeroProps) {
  const overlayClasses = {
    dark: "bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/70",
    primary: "bg-gradient-to-r from-primary-950/95 via-primary-900/90 to-primary-800/80",
    gradient: "bg-gradient-to-br from-primary-950/95 via-primary-900/85 to-primary-700/70",
  };

  return (
    <section className={`relative ${minHeight} flex items-center overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Gradient Background when no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
      )}

      <div className="container relative z-10 py-8 sm:py-10 lg:py-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={`${centered ? "text-center max-w-4xl mx-auto" : "max-w-3xl"}`}
        >
          {/* Badge */}
          {badge && (
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium"
            >
              {badge.icon && <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {badge.text}
            </motion.span>
          )}

          {/* Title */}
          <motion.h1
            variants={staggerItem}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            {title}{" "}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-400">
                {titleHighlight}
              </span>
            )}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* Children (CTA buttons, etc.) */}
          {children && (
            <motion.div variants={staggerItem}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative bottom gradient - pointer-events-none allows clicks through */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
