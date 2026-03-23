import * as React from "react"

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  `w-full min-w-0 outline-none field-sizing-content
  file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium
  disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 
  `,
  {
    variants: {
      variant: {
        default: `
          border border-muted p-5
          min-h-[calc(1lh+2.75rem)]
          text-sm font-medium placeholder:text-muted
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

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants>>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        data-slot="textarea"
        className={cn(
          textareaVariants({ variant }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

export { Textarea }
