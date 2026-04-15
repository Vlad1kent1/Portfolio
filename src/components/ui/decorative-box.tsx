import * as React from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

const decorativeBoxVariants = cva(
  `flex w-full items-center border-muted relative`,
  {
    variants: {
      variant: {
        default: ``,
        horizontal: ``,
        none: ``,
      },
      borderOrientation: {
        vertical: `border-l border-r`,
        horizontal: `border-t border-b`,
        top: `border-t`,
        bottom: `border-b`,
        right: `border-r`,
        left: `border-l`,
        none: ``,
      },
    },
    defaultVariants: {
      variant: 'default',
      borderOrientation: 'horizontal',
    },
  },
);

interface FramedContainerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof decorativeBoxVariants> {}

const DecorativeBox = ({
  children,
  className,
  variant,
  borderOrientation,
  ...props
}: FramedContainerProps) => {
  const cornerClass = 'absolute w-4 h-4 flex text-text z-10';

  return (
    <div
      className={cn(
        decorativeBoxVariants({ variant, borderOrientation }),
        className,
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
      >
        <div
          className={cn(
            cornerClass,
            'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
          )}
        >
          <Plus
            size={16}
            strokeWidth={1.5}
          />
        </div>
        <div
          className={cn(
            cornerClass,
            'right-0 bottom-0 translate-x-1/2 translate-y-1/2',
          )}
        >
          <Plus
            size={16}
            strokeWidth={1.5}
          />
        </div>

        {variant === 'horizontal' && (
          <>
            <div
              className={cn(
                cornerClass,
                'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
              )}
            >
              <Plus
                size={16}
                strokeWidth={1.5}
              />
            </div>
            <div
              className={cn(
                cornerClass,
                'top-0 right-0 translate-x-1/2 -translate-y-1/2',
              )}
            >
              <Plus
                size={16}
                strokeWidth={1.5}
              />
            </div>
          </>
        )}
      </div>

      {/* Content */}
      {children}
    </div>
  );
};

export { DecorativeBox };
