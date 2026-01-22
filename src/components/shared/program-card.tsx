"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export function ProgramCard({ title, description, imageUrl, slug }: ProgramCardProps) {
  return (
    <Link href={`/programs/${slug}`} className="block h-full group">
      <article className="h-full flex flex-col overflow-hidden rounded-xl bg-white border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-neutral-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed flex-grow mb-4">
            {description}
          </p>
          <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
