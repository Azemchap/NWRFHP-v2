import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Google Material Design inspired Card Component
 * Features:
 * - Smooth elevation transitions on hover
 * - Subtle transform for depth perception
 * - Clean, accessible color contrast
 * - Multiple style variants through className overrides
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        // Base card styles
        "bg-white text-neutral-900 flex flex-col rounded-xl",
        // Border and shadow
        "border border-neutral-200 shadow-sm",
        // Smooth transition for all interactive states
        "transition-all duration-300 ease-out",
        // Hover: Subtle lift effect with enhanced shadow
        "hover:shadow-lg hover:border-neutral-300 hover:-translate-y-0.5",
        // Focus state for accessibility
        "focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-300",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 p-6 pb-4",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "[.border-b]:pb-6 [.border-b]:border-neutral-100",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-lg font-semibold leading-tight tracking-tight text-neutral-900",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm text-neutral-600 leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 pb-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 pb-6 pt-0",
        "[.border-t]:pt-6 [.border-t]:border-neutral-100",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
