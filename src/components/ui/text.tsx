'use client';

import * as React from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import {
  MotionValue,
  type UseScrollOptions,
  m,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from 'motion/react';

import { cn } from '@/lib/utils';

const textVariants = cva(
  'flex items-center leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 tracking-tight',
  {
    variants: {
      variant: {
        default: 'text-text',
        inverse: 'text-text-inverse',
        muted: 'text-muted',
        muted_inverse: 'text-muted-inverse',
        contrast: 'text-contrast',
      },
      size: {
        xxxxl_bold: 'text-4xl font-bold' /* 120px 700weight */,
        xxxl_bold: 'text-3xl font-bold' /* 80px 700weight */,
        xxl_bold: 'text-2xl font-bold' /* 50px 700weight */,
        xl_bold: 'text-xl font-bold' /* 30px 700weight*/,
        xl_normal: 'text-xl font-normal' /* 30px 400weight */,
        lg_normal: 'text-lg font-normal' /* 22px 400weight */,
        base_bold: 'text-base font-bold' /* 18px 700weigth */,
        base_normal: 'text-base font-normal' /* 18px 400weight */,
        sm_medium: 'text-sm font-medium' /* 14px 500weigth*/,
        sm_normal: 'text-sm font-normal' /* 14px 400weigth*/,
        xs_semibold: 'text-xs font-semibold' /* 12px 600weight */,
        xs_normal: 'text-xs font-normal' /* 12px 400weigth */,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm_medium',
    },
  },
);

interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: React.ElementType;
  htmlFor?: string;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { className, variant, size, as: Component = 'p', htmlFor, ...props },
    ref,
  ) => {
    return (
      <Component
        htmlFor={htmlFor}
        ref={ref}
        className={cn(textVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Text.displayName = 'Text';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-[0.1em] mr-[0.25em]">
      <span className="text-muted">{children}</span>

      <m.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {children}
      </m.span>
    </span>
  );
};

interface AnimatedTextScrollRevealProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  children: string;
  as?: React.ElementType;
  offset?: UseScrollOptions['offset'];
}

const AnimatedTextScrollReveal = React.forwardRef<HTMLElement, AnimatedTextScrollRevealProps>(
  (
    {
      className,
      variant,
      size,
      as: Component = 'p',
      children,
      offset = ['start 70%', 'end 50%'],
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLElement>(null);

    React.useImperativeHandle(ref, () => containerRef.current as HTMLElement);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: offset,
    });

    const words = children.split(' ');

    return (
      <Component
        ref={containerRef}
        className={cn(textVariants({ variant, size }), 'flex-wrap', className)}
        {...props}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>
          );
        })}
      </Component>
    );
  },
);
AnimatedTextScrollReveal.displayName = 'AnimatedTextScrollReveal';

interface AnimatedTextCountUpProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  children: string;
  as?: React.ElementType;
  offset?: UseScrollOptions['offset'];
}

interface AnimatedTextCountUpProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  children: string;
  as?: React.ElementType;
}

const AnimatedTextCountUp = React.forwardRef<HTMLElement, AnimatedTextCountUpProps>(
  (
    {
      className,
      variant,
      size,
      as: Component = 'p',
      children,
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLElement>(null);
    React.useImperativeHandle(ref, () => containerRef.current as HTMLElement);

    const match = children.match(/^([0-9.]+)(.*)$/);
    const targetNumber = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : '';
    const isFloat = children.includes('.');

    const isInView = useInView(containerRef, { margin: '-50px' });
    const count = useMotionValue(0);

    const displayValue = useTransform(count, (latest) => {
      if (isFloat) {
        return latest.toFixed(1) + suffix;
      }
      return Math.round(latest) + suffix;
    });

React.useEffect(() => {
      if (isInView) {
        animate(count, targetNumber, {
          duration: 2,
          ease: 'easeOut',
        });
      } else {
        count.set(0);
      }
    }, [count, targetNumber, isInView]);

    return (
      <Component
        ref={containerRef}
        className={cn(textVariants({ variant, size }), className)}
        {...props}
      >
        <m.span>{displayValue}</m.span>
      </Component>
    );
  },
);
AnimatedTextCountUp.displayName = 'AnimatedTextCountUp';

export { Text, AnimatedTextScrollReveal, AnimatedTextCountUp };
