'use client'

import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  duration?: number
  threshold?: number
}

const directionStyles: Record<RevealDirection, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
}

export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: RevealProps) {
  const { ref, isVisible } = useReveal({ threshold })

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : cn('opacity-0', directionStyles[direction]),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function RevealStagger({
  children,
  className,
  direction = 'up',
  staggerDelay = 100,
  duration = 700,
  threshold = 0.1,
}: RevealProps & { staggerDelay?: number }) {
  const { ref, isVisible } = useReveal({ threshold })

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                'transition-all ease-out',
                isVisible
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : cn('opacity-0', directionStyles[direction])
              )}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
