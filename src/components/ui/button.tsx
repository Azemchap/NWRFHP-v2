import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Google-inspired Button Component
 * Features:
 * - High contrast hover states for accessibility
 * - Smooth transitions with subtle scale effects
 * - Clear visual feedback on all interactive states
 * - WCAG AA compliant color combinations
 */
const buttonVariants = cva(
  // Base styles - Google-inspired with proper focus states
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Primary - Google Blue with strong contrast on hover
        default:
          "bg-primary-500 text-white shadow-sm hover:bg-primary-600 hover:shadow-md focus-visible:ring-primary-500 active:bg-primary-700",

        // Destructive - Clear danger state
        destructive:
          "bg-error-500 text-white shadow-sm hover:bg-error-600 hover:shadow-md focus-visible:ring-error-500 active:bg-error-700",

        // Outline - Border with fill on hover for clear feedback
        outline:
          "border-2 border-primary-300 bg-white text-primary-600 hover:bg-primary-50 hover:border-primary-400 hover:text-primary-700 focus-visible:ring-primary-500 active:bg-primary-100",

        // Secondary - Subtle background with clear hover
        secondary:
          "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 focus-visible:ring-neutral-400 active:bg-neutral-300",

        // Ghost - Minimal with clear hover state
        ghost:
          "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-400 active:bg-neutral-200",

        // Link - Underline on hover for clear affordance
        link:
          "text-primary-600 underline-offset-4 hover:text-primary-700 hover:underline focus-visible:ring-primary-500",

        // Success variant
        success:
          "bg-success-500 text-white shadow-sm hover:bg-success-600 hover:shadow-md focus-visible:ring-success-500 active:bg-success-700",
      },
      size: {
        default: "h-11 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-3.5 text-xs has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-7 text-base has-[>svg]:px-5",
        xl: "h-14 rounded-xl px-8 text-base font-bold has-[>svg]:px-6",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
