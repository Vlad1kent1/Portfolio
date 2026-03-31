"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

const selectTriggerVariants = cva(
  `flex items-center justify-between gap-5 cursor-pointer whitespace-nowrap transition-all outline-none select-none `,
  {
    variants: {
      variant: {
        default: `
          text-sm font-medium px-5 py-6 bg-backgound
          disabled:cursor-not-allowed disabled:opacity-50 
          data-placeholder:text-muted
          *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center
          [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        outline: `
          border border-muted bg-background text-sm font-medium px-5 py-6
          disabled:cursor-not-allowed disabled:opacity-50 
          data-placeholder:text-muted
          *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center
          [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        none: ``,
      } 
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

const selectContentVariants = cva(
  `relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto`,
  {
    variants: {
      variant: {
        default: `
          bg-(--background) text-(--text) shadow-xs whitespace-nowrap border border-muted
          data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 
          data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95
          duration-200 fill-mode-forwards`,
      } 
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

const selectViewportVariants = cva(
  ``,
  {
    variants: {
      variant: {
        default: `
          flex flex-col gap-3 px-5 py-4
          data-[position=popper]:h-(--radix-select-trigger-height) w-full`,
      } 
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

const selectItemVariants = cva(
  `relative flex w-full cursor-pointer items-center justify-start gap-3 outline-hidden select-none whitespace-nowrap `,
  {
    variants: {
      variant: {
        default: `
          data-disabled:pointer-events-none data-disabled:opacity-50 
          [&_svg]:pointer-events-none [&_svg]:shrink-0 
          [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,
      } 
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

const Select = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

const SelectValue = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

const SelectTrigger = ({
  className,
  children,
  variant,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & 
  VariantProps<typeof selectTriggerVariants>) => {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(selectTriggerVariants({ variant }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon size={14} className="text-(--text)" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

const SelectContent = ({
  className,
  children,

  position = "popper",
  align = "start",
  variant,

  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & 
  VariantProps<typeof selectContentVariants> & VariantProps<typeof selectViewportVariants>) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(selectContentVariants({ variant }), className, 
          position === "popper" && [
            "w-(--radix-select-trigger-width)",
            "min-w-(--radix-select-trigger-width)",
            "data-[side=bottom]:translate-y-1"
          ],)}
        position={position}
        align={align}
        {...props}
      >
        <SelectPrimitive.Viewport
          data-position={position}
          className={cn(selectViewportVariants({ variant }))}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

const SelectItem = ({
  className,
  children,
  variant,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item> &
  VariantProps<typeof selectItemVariants>) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(selectItemVariants({ variant }), className)}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
}
