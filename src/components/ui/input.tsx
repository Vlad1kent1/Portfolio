import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  `w-full min-w-0 transition-all outline-none 
  file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-text 
  disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 
  `,
  {
    variants: {
      variant: {
        default: `
          border border-text p-5
          text-sm font-normal placeholder:text-muted
          focus:bg-muted/20
          aria-invalid:border-contrast aria-invalid:ring aria-invalid:ring-contrast`,
        none: ``,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Input({ 
  className, 
  type, 
  variant,
  ...props }: React.ComponentProps<"input"> & 
  VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({variant}), className)}
      {...props}
    />
  )
}

export { Input }
