'use client';

import * as React from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import { Tabs as TabsPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

import { SectionProgress } from './section-progress';

const tabsListVariants = cva(
  `group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground 
  group-data-[orientation=horizontal]/tabs:h-full 
  group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col`,
  {
    variants: {
      variant: {
        default: `bg-background`,
        line: ``,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const tabsTriggerVariants = cva(
  `cursor-pointer relative inline-flex h-full flex-1 items-center justify-center whitespace-nowrap transition-colors px-5 text-sm font-medium text-text`,
  {
    variants: {
      variant: {
        default: `
        disabled:pointer-events-none disabled:opacity-50 
        [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Tabs = ({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        'group/tabs flex h-full gap-3 data-[orientation=horizontal]:flex-col',
        className,
      )}
      {...props}
    />
  );
};

const TabsList = ({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
};

const TabsTrigger = ({
  className,
  variant,
  children,
  activeValue,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants> & {
    activeValue?: string;
  }) => {
  const isActive = value === activeValue;

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      value={value}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {isActive && <SectionProgress targetId={value} />}
    </TabsPrimitive.Trigger>
  );
};

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('text-sm outline-none', className)}
      {...props}
    />
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
