"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from "@/lib/utils"

const tooltipContentVariants = cva(
  `z-20 inline-flex w-fit origin-(--radix-tooltip-content-transform-origin) items-center 
  has-data-[slot=kbd]:pr-1.5 
  data-[side=bottom]:slide-in-from-top-3 
  data-[side=left]:slide-in-from-right-3 
  data-[side=right]:slide-in-from-left-3 
  data-[side=top]:slide-in-from-bottom-3 
  **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-20 
  data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95`,
  {
    variants: {
      variant: {
        default: `
          gap-3 px-3 py-2
          bg-text text-sm text-background
          data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 
          data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


const TooltipProvider = ({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

const Tooltip = ({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

const TooltipTrigger = ({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

const TooltipContent = ({
  className,
  sideOffset = 4,
  side = "right",
  variant,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipContentVariants> & {
    side?: "top" | "right" | "bottom" | "left"
  }) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        side={side}
        className={cn(
          tooltipContentVariants({ variant}),
          className
        )}
        {...props}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
}
