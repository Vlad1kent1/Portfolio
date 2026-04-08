import * as React from "react"
import { Plus } from "lucide-react"
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from "@/lib/utils"

const decorativeBoxVariants = cva(
  `flex w-full items-center border-muted relative`,
  {
    variants: {
      variant: {
        default: `border-b`,
        horizontal: `border-y`,
        none: ``,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface FramedContainerProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof decorativeBoxVariants> {
}

const DecorativeBox = ({
  children,
  className,
  variant, 
  ...props
}:   React.HTMLAttributes<HTMLDivElement> & 
    VariantProps<typeof decorativeBoxVariants>
) => {
  const cornerClass = "absolute w-4 h-4 flex items-center justify-center text-text z-10"

  return (
    <div 
      className={cn(decorativeBoxVariants({ variant }), className)} 
      {...props}
    >
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">     
        <div className={cn(cornerClass, "left-0 bottom-0 -translate-x-1/2 translate-y-1/2")}>
          <Plus size={16} strokeWidth={1.5} />
        </div>
        <div className={cn(cornerClass, "right-0 bottom-0 translate-x-1/2 translate-y-1/2")}>
          <Plus size={16} strokeWidth={1.5} />
        </div>
 
        {(variant === 'horizontal') && (
          <>
            <div className={cn(cornerClass, "left-0 top-0 -translate-x-1/2 -translate-y-1/2")}>
              <Plus size={16} strokeWidth={1.5} />
            </div>
            <div className={cn(cornerClass, "right-0 top-0 translate-x-1/2 -translate-y-1/2")}>
              <Plus size={16} strokeWidth={1.5} />
            </div>
          </>
        )}
      </div>

      {/* Контент */}
      {children}
    </div>
  )
}

export { DecorativeBox}