"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export function ProgramCard({ title, description, imageUrl, slug }: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group h-full"
    >
      <Link href={`/programs/${slug}`} className="block h-full">
        <article
          className={cn(
            "relative h-full flex flex-col overflow-hidden rounded-2xl",
            "bg-white border border-neutral-200",
            "transition-all duration-300",
            "hover:shadow-xl hover:border-neutral-300"
          )}
        >
          {/* Image Container */}
          <div className="relative h-52 overflow-hidden bg-neutral-100">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow p-6">
            {/* Title */}
            <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-neutral-600 text-sm leading-relaxed flex-grow mb-4">
              {description}
            </p>

            {/* CTA Link */}
            <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Hover accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </article>
      </Link>
    </motion.div>
  );
}
