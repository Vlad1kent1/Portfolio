"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from "@/lib/utils"

const popoverContentVariants = cva(
  `z-20 flex rigin-(--radix-popover-content-transform-origin) flex-col outline-hidden duration-100 
  data-[side=bottom]:slide-in-from-top-3 
  data-[side=left]:slide-in-from-right-3 
  data-[side=right]:slide-in-from-left-3 
  data-[side=top]:slide-in-from-bottom-3`, 
  {
    variants: {
      variant: {
        default: `
          bg-background gap-3 p-5 
          border border-muted
          text-sm font-medium
          data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 
          data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
        none: ``,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


function Popover({
  modal=false,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" modal={modal} {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  portal = true,
  variant,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> &
  {portal?: boolean} & 
  VariantProps<typeof popoverContentVariants>) {
  const content = (
    <PopoverPrimitive.Content
      data-slot="popover-content"
      align={align}
      sideOffset={sideOffset}
      className={cn(
        popoverContentVariants({ variant }),
        className
      )}
      {...props}
    />
  )

  if (!portal) return content

  return <PopoverPrimitive.Portal>{content}</PopoverPrimitive.Portal>
}

export {
  Popover,
  PopoverContent,
  PopoverTrigger,
}
