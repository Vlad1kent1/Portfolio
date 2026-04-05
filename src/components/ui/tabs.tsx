"use client"

import * as React from "react"

import { Tabs as TabsPrimitive } from "radix-ui"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  `group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground 
  group-data-horizontal/tabs:h-8 
  group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col`,
  {
    variants: {
      variant: {
        default: `bg-background`,
        line: ``
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tabsTriggerVariants = cva(
  `cursor-pointer relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all `,
  {
    variants: {
      variant: {
        default: `
        gap-5 px-5 py-6 text-sm font-medium text-text
        group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start 
        disabled:pointer-events-none disabled:opacity-50 
        [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
        
        after:absolute after:bg-background-inverse after:opacity-0 after:transition-all
        
        group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:h-0.5 group-data-horizontal/tabs:after:bottom-1        
        group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 
        
        group-data-[variant=line]/tabs-list:data-active:after:opacity-100`,
      } 
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

const Tabs = ({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-3 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const TabsList = ({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(
        tabsListVariants({ variant }), 
        className
      )}
      {...props}
    />
  )
}

const TabsTrigger = ({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) => {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        tabsTriggerVariants({ variant }), 
        className
      )}
      {...props}
    />
  )
}

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("text-sm outline-none", className)}
      {...props}
    />
  )
}

export { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
}
