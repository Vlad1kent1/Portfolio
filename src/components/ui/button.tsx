import * as React from 'react';

import { m, type HTMLMotionProps, Variants } from 'motion/react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  `cursor-pointer outline-none select-none inline-flex items-center justify-center transition-all 
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: `
          border-l-2 border-muted 
          bg-background text-sm font-medium
          has-[svg]:justify-between has-[svg]:gap-5`,
        ghost: `
          bg-background text-sm font-medium
          has-[svg]:justify-between has-[svg]:gap-5
          hover:bg-muted/20`,
        outline: `
          border border-muted
          bg-background text-sm font-medium
          has-[svg]:justify-between has-[svg]:gap-5`,
        none: ``,
      },
      size: {
        default: `px-5 py-6`,
        icon: `p-6`,
        base: `p-5`,
        xs: `p-1`,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

// Regular Button
interface ButtonProps 
  extends React.ComponentProps<'button'>, 
    VariantProps<typeof buttonVariants> {}

const Button = ({
  ref,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button 
      ref={ref}
      data-slot="button" 
      className={cn(
        buttonVariants({ variant, size }), 
        className 
      )}
      {...props} 
    />
  )
}

// Animated Button
interface AnimatedButtonProps 
  extends HTMLMotionProps<"button">, 
    VariantProps<typeof buttonVariants> {}

interface RevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'right' | 'left'
  className?: string
}

const Reveal = ({ 
  children, 
  direction = 'down', 
  className 
}: RevealProps) => {
  const isVertical = direction === 'up' || direction === 'down';
  const sharedTransition = { 
    duration: 0.3, 
    ease: [0.76, 0, 0.24, 1] as const 
  };
  
  const variants1: Variants = {
    initial: { x: 0, y: 0, transition: sharedTransition },
    hover: { 
      x: direction === 'right' ? '100%' : direction === 'left' ? '-100%' : 0, 
      y: direction === 'down' ? '100%' : direction === 'up' ? '-100%' : 0, 
      transition: sharedTransition
    }
  }

  const variants2: Variants = {
    initial: { 
      x: direction === 'right' ? '-100%' : direction === 'left' ? '100%' : 0, 
      y: direction === 'down' ? '-100%' : direction === 'up' ? '100%' : 0,
      transition: sharedTransition
    },
    hover: { 
      x: 0, 
      y: 0, 
      transition: sharedTransition 
    }
  }

  return (
    <span 
      className={cn(
        "relative flex overflow-hidden items-center justify-center leading-none", 
        isVertical ? "flex-col h-[1em]" : "flex-row", 
        className
      )}
    >
      <m.span 
        variants={variants1} 
        className="relative block whitespace-nowrap"
      >
        {children}
      </m.span>

      <m.span 
        variants={variants2} 
        className="absolute inset-0 block whitespace-nowrap"
      >
        {children}
      </m.span>
    </span>
  )
}

const ButtonIcon = ({ children, direction = 'right', className }: RevealProps) => (
  <Reveal direction={direction} className={cn("inline-flex items-center justify-center", className)}>
    {children}
  </Reveal>
)

const ButtonText = ({ children, direction = 'up', className }: RevealProps) => (
  <Reveal direction={direction} className={className}>
    {children}
  </Reveal>
)

const AnimatedButtonRoot = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <m.button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      {children}
    </m.button>
  )
)

const AnimatedButton = Object.assign(AnimatedButtonRoot, {
  Icon: ButtonIcon,
  Text: ButtonText,
})

export { Button, AnimatedButton }
