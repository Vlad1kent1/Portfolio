import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  `cursor-pointer inline-flex items-center justify-start transition-all 
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: `
          px-5 py-6
          border-l-4 border-(--text) 
          text-(--text) text-sm font-normal
          has-[svg]:flex-beetween has-[svg]:gap-6`,
        icon: `
          p-6 
          text-(--text) text-sm font-normal`
      }
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export function Button({
  className,
  variant,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>) {
  return <button data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />
}
