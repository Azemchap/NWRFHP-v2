"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerItem } from "@/lib/animations";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
