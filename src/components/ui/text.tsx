"use client"

import * as React from "react"

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from "@/lib/utils"

const textVariants = cva(
  "flex items-center leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-text",
        destructive: "text-destructive",
      },
      size: {
        xxxl_bold: "text-3xl font-bold", /* 80px 700weight */
        xxl_bold: "text-2xl font-bold", /* 50px 700weight */
        xl_bold: "text-xl font-bold", /* 30px 700weight*/
        xl_normal: "text-xl font-normal", /* 30px 400weight */
        lg_normal: "text-lg font-normal", /* 22px 400weight */
        base_bold: "text-base font-bold", /* 18px 700weigth */
        base_normal: "text-base font-normal", /* 18px 400weight */
        sm_medium: "text-sm font-medium",  /* 14px 500weigth*/
        xs_semibold: "text-xs font-semibold", /* 12px 600weight */
        xs_normal: "text-xs font-normal", /* 12px 400weigth */
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm_medium",
    },
  }
)

interface TextProps 
  extends React.HTMLAttributes<HTMLElement>, 
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
  htmlFor?: string
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ 
    className, 
    variant, 
    size, 
    as: Component = "p", 
    htmlFor,
    ...props 
  }, ref) => {
    return (
      <Component
        htmlFor={htmlFor}
        ref={ref}
        className={cn(textVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

export { Text }