import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  `cursor-pointer outline-none inline-flex items-center justify-start transition-all 
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: `
          border-l-2 border-(--text) 
          text-(--text) text-sm font-normal
          has-[svg]:flex-beetween has-[svg]:gap-6`,
        ghost: `
          text-(--text) text-sm font-normal
          has-[svg]:flex-beetween has-[svg]:gap-6
          hover:bg-(--text)/90`,
      },
      size: {
        default: `px-5 py-6`,
        icon: `p-6`,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>) {
  return <button data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
