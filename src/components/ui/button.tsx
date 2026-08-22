import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // ── Standard shadcn variants (use semantic CSS tokens) ──
        default:
          "bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,43,26,0.2)]",
        secondary:
          "bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90",
        outline:
          "bg-transparent text-primary border border-primary/30 rounded-full hover:border-primary hover:bg-primary/5",
        ghost:
          "bg-transparent text-primary hover:bg-accent hover:text-accent-foreground rounded-full",
        link:
          "text-primary underline-offset-4 hover:underline p-0",
        // ── Custom project variants ──
        primary:
          "bg-olive-800 text-bone rounded-full hover:bg-olive-950 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,38,17,0.2)]",
        nav:
          "bg-olive-800 text-bone rounded-full hover:bg-olive-950 hover:-translate-y-px",
        // Harvest pill: the one conversion action, same color everywhere
        "hero-cta":
          "bg-harvest text-olive-950 rounded-full hover:bg-harvest-deep hover:text-bone hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(181,100,30,0.25)] hover:shadow-[0_6px_24px_rgba(181,100,30,0.35)] font-medium gap-2",
        "hero-ghost":
          "bg-transparent text-olive-950/75 border border-olive-950/25 rounded-full hover:border-olive-950/60 hover:text-olive-950",
        // Harvest pill on olive-drenched surfaces (final CTA)
        "cta-bone":
          "bg-harvest text-olive-950 rounded-full hover:bg-bone hover:-translate-y-0.5 font-medium gap-2",
        "cta-ghost-bone":
          "bg-transparent text-bone/75 border border-bone/30 rounded-full hover:border-bone/70 hover:text-bone",
      },
      size: {
        // Standard shadcn sizes
        default: "px-8 py-[14px] text-[15px]",
        xs:      "px-3 py-1 text-xs",
        sm:      "px-4 py-2 text-sm",
        lg:      "px-10 py-4 text-base",
        icon:       "h-9 w-9",
        "icon-xs":  "h-6 w-6",
        "icon-sm":  "h-8 w-8",
        "icon-lg":  "h-11 w-11",
        // Custom sizes
        nav:  "px-6 py-[10px] text-sm",
        full: "w-full py-3 text-sm",
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
