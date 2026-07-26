'use client';

import * as React from 'react';

import { type HTMLMotionProps, type Variants, motion } from 'motion/react';

import { cn } from '@/lib/utils';

import { useUIStore } from '@/hooks/use-ui-store';

export type RevealBoxDirection = 'up' | 'down' | 'left' | 'right' | 'center';

export interface RevealBoxProps extends HTMLMotionProps<'div'> {
  direction?: RevealBoxDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  innerClassName?: string;
}

const RevealBox = React.forwardRef<HTMLDivElement, RevealBoxProps>(
  (
    {
      className,
      direction = 'center',
      delay = 0,
      duration = 0.5,
      once = true,
      innerClassName,
      children,
      ...props
    },
    ref,
  ) => {
    const { isIntroDone } = useUIStore();
    const variants: Record<RevealBoxDirection, Variants> = {
      up: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      },
      down: {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      },
      left: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      },
      right: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      },
      center: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
      },
    };

    const isCenter = direction === 'center';

    if (isCenter) {
      return (
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView={isIntroDone ? 'visible' : 'hidden'}
          viewport={{ once, margin: '-50px' }}
          transition={{ duration, delay, ease: 'easeOut' }}
          variants={variants.center}
          className={cn(className, innerClassName)}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('relative overflow-hidden', className)}
      >
        <motion.div
          initial="hidden"
          whileInView={isIntroDone ? 'visible' : 'hidden'}
          viewport={{ once, margin: '-50px' }}
          transition={{ duration, delay, ease: 'easeOut' }}
          variants={variants[direction]}
          className={cn(innerClassName)}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  },
);

RevealBox.displayName = 'RevealBox';

export { RevealBox };
