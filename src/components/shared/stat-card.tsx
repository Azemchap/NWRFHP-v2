"use client";

import { Counter } from "@/components/animations/counter";
import { SlideInUp } from "@/components/animations/slide-in-up";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  label: string;
  description?: string;
  suffix?: string;
  prefix?: string;
  icon?: LucideIcon;
  delay?: number;
  color?: "primary" | "accent" | "success";
}

const colorVariants = {
  primary: {
    bg: "bg-primary-50",
    iconBg: "bg-primary-100",
    icon: "text-primary-600",
    value: "text-primary-600",
    border: "group-hover:border-primary-200",
  },
  accent: {
    bg: "bg-accent-50",
    iconBg: "bg-accent-100",
    icon: "text-accent-600",
    value: "text-accent-600",
    border: "group-hover:border-accent-200",
  },
  success: {
    bg: "bg-success-50",
    iconBg: "bg-success-100",
    icon: "text-success-600",
    value: "text-success-600",
    border: "group-hover:border-success-200",
  },
};

export function StatCard({
  value,
  label,
  description,
  suffix = "",
  prefix = "",
  icon: Icon,
  delay = 0,
  color = "primary",
}: StatCardProps) {
  const colors = colorVariants[color];

  return (
    <SlideInUp delay={delay}>
      <div
        className={cn(
          "group relative p-6 rounded-2xl bg-white border border-neutral-100",
          "transition-all duration-300 ease-out",
          "hover:shadow-lg hover:-translate-y-1",
          colors.border
        )}
      >
        {/* Icon */}
        {Icon && (
          <div
            className={cn(
              "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl",
              "transition-all duration-300",
              colors.iconBg,
              "group-hover:scale-110"
            )}
          >
            <Icon className={cn("h-7 w-7", colors.icon)} />
          </div>
        )}

        {/* Value */}
        <div className={cn("text-4xl lg:text-5xl font-bold mb-2 tracking-tight", colors.value)}>
          <Counter value={value} suffix={suffix} prefix={prefix} />
        </div>

        {/* Label */}
        <p className="text-base font-semibold text-neutral-900 mb-1">{label}</p>

        {/* Description */}
        {description && (
          <p className="text-sm text-neutral-500">{description}</p>
        )}

        {/* Decorative corner */}
        <div
          className={cn(
            "absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-30 -z-10",
            colors.bg
          )}
        />
      </div>
    </SlideInUp>
  );
}
