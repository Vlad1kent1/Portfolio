import * as React from 'react';

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

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>) {
  return (
    <button 
      data-slot="button" 
      className={cn(
        buttonVariants({ variant, size }), 
        className 
      )} 
      {...props} 
    />
  )
}

export { Button }
