"use client";

import { motion } from "framer-motion";
import { cardReveal } from "@/lib/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={`bg-white rounded-2xl border border-neutral-100 shadow-md hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
