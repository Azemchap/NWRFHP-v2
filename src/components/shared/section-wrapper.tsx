"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  id?: string;
  background?: "white" | "gray" | "primary" | "gradient";
}

export function SectionWrapper({
  children,
  className = "",
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
  id,
  background = "white",
}: SectionWrapperProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-neutral-50",
    primary: "bg-primary-600",
    gradient: "bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900",
  };

  const textClasses = {
    white: "text-neutral-900",
    gray: "text-neutral-900",
    primary: "text-white",
    gradient: "text-white",
  };

  const descriptionClasses = {
    white: "text-neutral-600",
    gray: "text-neutral-600",
    primary: "text-white/80",
    gradient: "text-white/80",
  };

  const badgeClasses = {
    white: "text-primary-600 bg-primary-50",
    gray: "text-primary-600 bg-primary-50",
    primary: "text-white/90 bg-white/10 border-white/20",
    gradient: "text-white/90 bg-white/10 border-white/20",
  };

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container">
        {(badge || title || description) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}
          >
            {badge && (
              <motion.span
                variants={staggerItem}
                className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full ${badgeClasses[background]}`}
              >
                {badge}
              </motion.span>
            )}
            {title && (
              <motion.h2
                variants={staggerItem}
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${textClasses[background]}`}
              >
                {title}{" "}
                {titleHighlight && (
                  <span className={`${background === "white" || background === "gray" ? "text-gradient" : "text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400"}`}>
                    {titleHighlight}
                  </span>
                )}
              </motion.h2>
            )}
            {description && (
              <motion.p
                variants={staggerItem}
                className={`text-lg leading-relaxed ${descriptionClasses[background]}`}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
