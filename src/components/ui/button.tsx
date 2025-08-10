import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-manrope text-[16px] font-medium rounded-[10px] px-6 py-3 border border-transparent cursor-pointer transition-all duration-200 ease-in-out text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Primary: Solid Charcoal Black */
        default: "bg-[#191919] hover:bg-[#333333]",
        destructive:
          "bg-destructive hover:bg-destructive/90",
        /* Secondary (Outline): Transparent with Charcoal border/text */
        outline:
          "bg-transparent text-[#191919] border border-[#191919] hover:bg-[#191919] hover:text-white",
        secondary:
          "bg-secondary text-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted",
        link: "text-foreground underline underline-offset-4",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-[14px]",
        lg: "px-8 py-4 text-[18px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
