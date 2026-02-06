"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function Counter({
  value,
  direction = "up",
  className,
  suffix = "",
  prefix = "",
  duration = 2,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(direction === "down" ? value : 0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startValue = direction === "down" ? value : 0;
          const endValue = direction === "down" ? 0 : value;
          const increment = (endValue - startValue) / (duration * 60);
          let current = startValue;

          const timer = setInterval(() => {
            current += increment;
            if (
              (direction === "up" && current >= endValue) ||
              (direction === "down" && current <= endValue)
            ) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, direction, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
