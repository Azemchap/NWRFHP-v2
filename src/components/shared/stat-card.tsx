"use client";

import { Counter } from "@/components/animations/counter";
import { SlideInUp } from "@/components/animations/slide-in-up";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: LucideIcon;
  delay?: number;
}

export function StatCard({
  value,
  label,
  suffix = "",
  prefix = "",
  icon: Icon,
  delay = 0
}: StatCardProps) {
  return (
    <SlideInUp delay={delay}>
      <div className="text-center p-6">
        {Icon && (
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        )}
        <div className="text-5xl font-bold text-primary mb-2">
          <Counter value={value} suffix={suffix} prefix={prefix} />
        </div>
        <p className="text-lg text-muted-foreground">{label}</p>
      </div>
    </SlideInUp>
  );
}
