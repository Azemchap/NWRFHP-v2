"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { slideInUp } from "@/lib/animations";

interface SlideInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SlideInUp({ children, delay = 0, className }: SlideInUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
