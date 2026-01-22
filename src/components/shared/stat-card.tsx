"use client";

import { Counter } from "@/components/animations/counter";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  label: string;
  description?: string;
  suffix?: string;
  prefix?: string;
  icon?: LucideIcon;
  color?: "primary" | "accent" | "success";
}

const colorVariants = {
  primary: {
    iconBg: "bg-primary-100",
    icon: "text-primary-600",
    value: "text-primary-600",
  },
  accent: {
    iconBg: "bg-accent-100",
    icon: "text-accent-600",
    value: "text-accent-600",
  },
  success: {
    iconBg: "bg-green-100",
    icon: "text-green-600",
    value: "text-green-600",
  },
};

export function StatCard({
  value,
  label,
  description,
  suffix = "",
  prefix = "",
  icon: Icon,
  color = "primary",
}: StatCardProps) {
  const colors = colorVariants[color];

  return (
    <div className="group p-6 rounded-xl bg-white border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
      {/* Icon */}
      {Icon && (
        <div className={cn("mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg", colors.iconBg)}>
          <Icon className={cn("h-6 w-6", colors.icon)} />
        </div>
      )}

      {/* Value */}
      <div className={cn("text-3xl lg:text-4xl font-bold mb-1", colors.value)}>
        <Counter value={value} suffix={suffix} prefix={prefix} />
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-neutral-900 mb-0.5">{label}</p>

      {/* Description */}
      {description && (
        <p className="text-xs text-neutral-500">{description}</p>
      )}
    </div>
  );
}
