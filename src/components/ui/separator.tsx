"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const separatorVariants = cva(
  `shrink-0 bg-muted 
  data-horizontal:h-px data-horizontal:w-full 
  data-vertical:w-px data-vertical:self-stretch`,
  {
    variants: {
      variant: {
        default: ``,
        none: ``,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant, 
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Separator }
